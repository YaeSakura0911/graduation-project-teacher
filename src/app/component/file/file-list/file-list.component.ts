import {Component, OnInit, ViewChild} from '@angular/core';
import {ResearchService} from "../../../service/research.service";
import {QueryResearchListForm} from "../../../form/query-research-list-form";
import {StorageUtil} from "../../../util/storage.util";
import {Research} from "../../../entity/research.entity";
import {FileFormComponent} from "../file-form/file-form.component";
import {NzUploadFile} from "ng-zorro-antd/upload";

@Component({
    selector: 'app-file-list',
    templateUrl: './file-list.component.html',
    styleUrls: ['./file-list.component.scss']
})
export class FileListComponent implements OnInit {

    teacherId: number = 0;
    researchId: number = 0;

    researchList: Research[] = [];

    @ViewChild('fileFormComponent')
    fileFormComponent!: FileFormComponent;

    constructor(
        private researchService: ResearchService,
        private storageUtil: StorageUtil
    ) {
    }

    ngOnInit(): void {
        this.teacherId = this.storageUtil.get("auth").teacherId;
        this.queryResearchList();
    }

    openFormDrawer(): void {
        this.fileFormComponent.openDrawer();
    }

    queryResearchList(): void {
        let form: QueryResearchListForm = new QueryResearchListForm(
            this.teacherId,
            ""
        )
        console.log("QueryResearchListForm", form);
        this.researchService.queryResearchList(form).subscribe(response => {
            console.log("queryResearchList()", response);
            if (response.code == 200) {
                this.researchList = response.body;
            }
        })
    }

}
