import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { NzMessageService } from 'ng-zorro-antd/message';
import { CreateResearchForm } from 'src/app/form/create-research-form';
import { ResearchService } from 'src/app/service/research.service';

@Component({
    selector: 'app-research-add',
    templateUrl: './research-add.component.html',
    styleUrls: ['./research-add.component.scss']
})
export class ResearchAddComponent implements OnInit {

    teacherId: number = 0;
    researchName: string = "";
    researchDescription: string = "";

    constructor(
        private researchService: ResearchService,
        private formBuilder: FormBuilder,
        private messageService: NzMessageService,
        private router: Router
    ) { }

    ngOnInit(): void {
        this.teacherId = Number(localStorage.getItem('teacherId'));
    }

    // 创建研究
    createResearch(): void {
        let createResearchForm: CreateResearchForm = new CreateResearchForm(
            this.teacherId,
            this.researchName,
            this.researchDescription
        );
        this.researchService.createResearch(createResearchForm).subscribe(response => {
            console.log(response);
            if(response.body == true) {
                this.messageService.success('创建研究成功');
                this.router.navigateByUrl("/research");
            }
        })
    }
}
