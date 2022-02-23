import {Component, OnInit, ViewChild} from '@angular/core';
import {ResearchService} from "../../../service/research.service";
import {QueryResearchListForm} from "../../../form/query-research-list-form";
import {StorageUtil} from "../../../util/storage.util";
import {Research} from "../../../entity/research.entity";
import {FileFormComponent} from "../file-form/file-form.component";
import {QueryFileListForm} from "../../../form/query-file-list-form";
import {FileService} from "../../../service/file.service";
import {FileEntity} from "../../../entity/file.entity";
import {NzMessageService} from "ng-zorro-antd/message";
import {FormBuilder, Validators} from "@angular/forms";

@Component({
    selector: 'app-file-list',
    templateUrl: './file-list.component.html',
    styleUrls: ['./file-list.component.scss']
})
export class FileListComponent implements OnInit {

    teacherId: number = 0;
    researchId: number = 0;
    fileName: string = "";
    pageIndex: number = 1;
    pageSize: number = 10;
    total!: number;

    researchList: Research[] = [];
    fileList: FileEntity[] = [];


    @ViewChild('fileFormComponent')
    fileFormComponent!: FileFormComponent;

    constructor(
        private fileService: FileService,
        private messageService: NzMessageService,
        private researchService: ResearchService,
        private storageUtil: StorageUtil
    ) {
    }

    ngOnInit(): void {
        this.teacherId = this.storageUtil.get("auth").teacherId;
        this.queryResearchList();
        this.queryFileList();
    }

    deleteFile(uuid: string, fileName: string): void {
        this.fileService.deleteFile(uuid + "/" + fileName).subscribe(response =>{
            console.log(response);
            if (response.code == 200 && response.body == true) {
                this.messageService.success("删除文件成功！");
            } else {
                this.messageService.error("删除文件失败！");
            }
            this.queryFileList();
        })
    }

    /**
     * 查询文件列表
     */
    queryFileList(): void {
        let form = new QueryFileListForm(
            this.teacherId,
            this.researchId,
            this.fileName,
            this.pageIndex,
            this.pageSize
        );
        this.fileService.queryFileList(form).subscribe(response => {
            console.log("queryFileList()", response);
            if (response.code == 200) {
                this.fileList = response.body.fileList;
                this.total = response.body.total;
            }
        })
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
