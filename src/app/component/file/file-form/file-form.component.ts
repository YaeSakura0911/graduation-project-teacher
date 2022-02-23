import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {NzUploadFile} from "ng-zorro-antd/upload";
import {NzMessageService} from "ng-zorro-antd/message";
import {FileService} from "../../../service/file.service";
import {StorageUtil} from "../../../util/storage.util";
import {ResearchService} from "../../../service/research.service";
import {QueryResearchListForm} from "../../../form/query-research-list-form";
import {Research} from "../../../entity/research.entity";
import {UploadFileForm} from "../../../form/upload-file-form";
import {FormBuilder, Validators} from "@angular/forms";

@Component({
    selector: 'app-file-form',
    templateUrl: './file-form.component.html',
    styleUrls: ['./file-form.component.scss']
})
export class FileFormComponent implements OnInit {

    teacherId: number = 0;
    researchId: number = 0;
    drawerVisible: boolean = false;

    fileList: NzUploadFile[] = [];
    researchList: Research[] = [];

    uploadFileForm = this.formBuilder.group({
        researchId: [null, Validators.required]
    })

    @Output()
    refreshPage = new EventEmitter<any>();

    constructor(
        private fileService: FileService,
        private formBuilder: FormBuilder,
        private messageService: NzMessageService,
        private researchService: ResearchService,
        private storageUtil: StorageUtil
    ) {
    }

    /**
     * 页面初始化
     */
    ngOnInit(): void {
        this.teacherId = this.storageUtil.get("auth").teacherId;
        this.queryResearchList();
    }

    beforeUpload = (file: NzUploadFile): boolean => {
        const fileType = file.type;
        const fileSize = file.size;
        const type = [
            'application/msword',
            'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
            'application/vnd.ms-excel',
            'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
            'application/vnd.ms-powerpoint',
            'application/vnd.openxmlformats-officedocument.presentationml.presentation',
            'application/pdf',
            'application/zip',
            'application/x-zip',
            'application/x-zip-compressed',
            'image/jpg',
            'image/jpeg',
            'image/png'
        ]
        if (fileType == undefined || type.indexOf(fileType) < 0) {
            this.messageService.error("不支持的文件格式");
            return false;
        }
        if (fileSize == undefined || fileSize / 1024 / 1024 > 10) {
            this.messageService.error("文件大小不能超过10Mb");
            return false;
        }
        this.fileList = this.fileList.concat(file);
        return false;
    };

    /**
     * 查询研究列表
     */
    queryResearchList(): void {
        let form: QueryResearchListForm = new QueryResearchListForm(
            this.teacherId,
            ""
        )
        this.researchService.queryResearchList(form).subscribe(response => {
            console.log("queryResearchList()", response);
            if (response.code == 200) {
                this.researchList = response.body;
            }
        })
    }

    /**
     * 上传文件
     */
    uploadFile(): void {
        if (this.fileList.length < 1) {
            this.messageService.error("没有要上传的文件！");
        } else if (this.fileList.length > 1) {
            this.messageService.error("一次只能上传一个文件！");
        } else {
            const formData = new FormData();
            this.fileList.forEach((file: any) => {
                formData.append('file', file);
            })
            formData.append("form", JSON.stringify(this.uploadFileForm.value));
            this.fileService.uploadFile(formData).subscribe(response => {
                console.log("uploadFile()", response);
                if (response.code == 200) {
                    this.messageService.success("上传文件成功！");
                } else {
                    this.messageService.error("上传文件失败！");
                }
                this.uploadFileForm.reset();
                this.fileList = [];
                this.refreshPage.emit();
                this.closeDrawer();
            })
        }
    }

    /**
     * 打开抽屉
     */
    openDrawer(): void {
        this.drawerVisible = true;
    }

    /**
     * 关闭抽屉
     */
    closeDrawer(): void {
        this.drawerVisible = false;
    }

}
