import {Component, OnInit} from '@angular/core';

import {Research} from 'src/app/entity/research.entity';
import {QueryResearchListForm} from 'src/app/form/query-research-list-form';

import {ResearchService} from 'src/app/service/research.service';
import {StorageUtil} from "../../../util/storage.util";

@Component({
    selector: 'app-research-list',
    templateUrl: './research-list.component.html',
    styleUrls: ['./research-list.component.scss']
})
export class ResearchListComponent implements OnInit {

    teacherId: number = 0;
    researchName: string = "";
    researchList: Array<Research> = [];

    constructor(
        private researchService: ResearchService,
        private storageUtil: StorageUtil) {
    }

    ngOnInit(): void {
        this.teacherId = this.storageUtil.get("auth").teacherId;
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
            if (response.code == 200) {
                this.researchList = response.body;
            }
        })
    }

}
