import { Component, OnInit } from '@angular/core';

import { Research } from 'src/app/entity/research.entity';
import { QueryResearchListForm } from 'src/app/form/query-research-list-form';

import { ResearchService } from 'src/app/service/research.service';

@Component({
    selector: 'app-research-list',
    templateUrl: './research-list.component.html',
    styleUrls: ['./research-list.component.scss']
})
export class ResearchListComponent implements OnInit {

    teacherId: string | number = 0;
    researchName: string = "";
    researchList: Array<Research> = [];

    constructor(private researchService: ResearchService) { }

    ngOnInit(): void {
        this.teacherId = localStorage.getItem('teacherId') || "";
        this.queryResearchList();
    }

    // 查询研究列表
    queryResearchList() {
        let queryResearchListForm: QueryResearchListForm = new QueryResearchListForm(
            this.teacherId,
            this.researchName
        )
        this.researchService.queryResearchList(queryResearchListForm).subscribe(response => {
            console.log(response);
            if(response.code == 200) {
                this.researchList = response.body;
            }
        })
    }

}
