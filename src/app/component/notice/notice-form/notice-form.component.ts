import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {NoticeService} from "../../../service/notice.service";
import {ResearchService} from "../../../service/research.service";
import {StorageUtil} from "../../../util/storage.util";
import {Research} from "../../../entity/research.entity";
import {NzMessageService} from "ng-zorro-antd/message";

@Component({
    selector: 'app-notice-form',
    templateUrl: './notice-form.component.html',
    styleUrls: ['./notice-form.component.scss']
})
export class NoticeFormComponent implements OnInit {

    isCreate: boolean = true;
    drawerVisible: boolean = false;
    drawerTitle: string = "";
    teacherId: number = 0;
    researchList: Research[] = [];

    @Output()
    refreshPage = new EventEmitter<any>();

    shareNoticeForm = this.formBuilder.group({
        noticeId: [null],
        teacherId: [null],
        noticeTitle: [null, [
            Validators.required,
            Validators.maxLength(50)
        ]],
        noticePriority: [null, Validators.required],
        noticeContent: [null, [
            Validators.required,
            Validators.maxLength(255)]
        ]
    })

    constructor(
        private formBuilder: FormBuilder,
        private messageService: NzMessageService,
        private noticeService: NoticeService,
        private researchService: ResearchService,
        private storageUtil: StorageUtil
    ) {
    }

    /**
     * 页面初始化
     */
    ngOnInit(): void {
        this.teacherId = this.storageUtil.get("auth").teacherId;
    }

    closeDrawer(): void {
        this.drawerVisible = false;
        this.shareNoticeForm.reset();
    }

    /**
     * 创建通知
     */
    createNotice(): void {
        this.shareNoticeForm.patchValue({
            teacherId: this.teacherId
        })
        this.noticeService.createNotice(this.shareNoticeForm.value).subscribe(response => {
            if (response.code == 200 && response.body == true) {
                this.messageService.success("创建通知成功！");
            } else {
                this.messageService.error("创建通知失败！");
            }
            this.refreshPage.emit();
            this.closeDrawer();
        })
    }

    openDrawer(noticeId: number): void {
        this.drawerVisible = true;
        if (noticeId == 0) {
            this.isCreate = true;
            this.drawerTitle = "创建通知"
        } else {
            this.isCreate = false;
            this.drawerTitle = "编辑通知";
            this.shareNoticeForm.patchValue({noticeId: noticeId});
            this.queryNotice();
        }
    }

    /**
     * 查询通知详情
     */
    queryNotice(): void {
        this.noticeService.queryNotice(this.shareNoticeForm.value.noticeId).subscribe(response => {
            console.log(response);
            if (response.code == 200) {
                this.shareNoticeForm.patchValue({
                    noticeTitle: response.body.noticeTitle,
                    noticePriority: response.body.noticePriority,
                    noticeContent: response.body.noticeContent
                })
            }
        })
    }

    /**
     * 编辑通知
     */
    updateNotice(): void {
        this.noticeService.updateNotice(this.shareNoticeForm.value).subscribe(response => {
            console.log(response);
            if (response.code == 200 && response.body == true) {
                this.messageService.success("编辑通知成功！");
            } else {
                this.messageService.error("编辑通知失败！");
            }
            this.refreshPage.emit();
            this.closeDrawer();
        })
    }
}
