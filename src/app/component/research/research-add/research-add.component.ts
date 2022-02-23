import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';

import {NzMessageService} from 'ng-zorro-antd/message';
import {ResearchService} from 'src/app/service/research.service';
import {StorageUtil} from "../../../util/storage.util";

@Component({
    selector: 'app-research-add',
    templateUrl: './research-add.component.html',
    styleUrls: ['./research-add.component.scss']
})
export class ResearchAddComponent implements OnInit {

    teacherId: number = 0;
    researchName: string = "";
    researchDescription: string = "";

    createResearchForm = this.formBuilder.group({
        teacherId: [null],
        researchName: [null, [
            Validators.required,
            Validators.maxLength(50)
        ]],
        researchDescription: [null, [
            Validators.required,
            Validators.maxLength(255)
        ]]
    })

    constructor(
        private formBuilder: FormBuilder,
        private messageService: NzMessageService,
        private researchService: ResearchService,
        private storageUtil: StorageUtil
    ) {
    }

    ngOnInit(): void {
        this.teacherId = this.storageUtil.get("auth").teacherId;
    }

    goBack() {
        history.back();
    }

    // 创建研究
    createResearch(): void {
        this.createResearchForm.patchValue({teacherId: this.teacherId})
        this.researchService.createResearch(this.createResearchForm.value).subscribe(response => {
            console.log(response);
            if (response.body == true) {
                this.messageService.success('创建研究成功');
                this.goBack();
            }
        })
    }
}
