import {Component, OnInit, ViewChild} from "@angular/core";
import {NoticeFormComponent} from "../notice-form/notice-form.component";
import {NoticeService} from "../../../service/notice.service";
import {QueryNoticeListForm} from "../../../form/query-notice-list.form";
import {StorageUtil} from "../../../util/storage.util";
import {NoticeEntity} from "../../../entity/notice.entity";
import {NzMessageService} from "ng-zorro-antd/message";
import {NoticeDetailComponent} from "../notice-detail/notice-detail.component";
import {UpdateNoticeForm} from "../../../form/update-notice.form";

@Component({
    selector: 'app-notice-list',
    templateUrl: './notice-list.component.html',
    styleUrls: ['./notice-list.component.scss']
})
export class NoticeListComponent implements OnInit{

    teacherId: number = 0;
    noticeTitle: string = "";
    noticePriority: number = 0;
    releaseFlag: number = 0;
    pageIndex: number = 1;
    pageSize: number = 10;
    total!: number;

    noticeList: NoticeEntity[] = [];

    @ViewChild("noticeDetailDrawer")
    noticeDetailDrawer!: NoticeDetailComponent;
    @ViewChild("noticeFormDrawer")
    noticeFormDrawer!: NoticeFormComponent;

    constructor(
        private messageService: NzMessageService,
        private noticeService: NoticeService,
        private storageUtil: StorageUtil) {
    }

    ngOnInit(): void {
        this.teacherId = this.storageUtil.get("auth").teacherId;
        this.queryNoticeList();
    }

    /**
     * 删除通知
     * @param noticeId
     */
    deleteNotice(noticeId: number) {
        this.noticeService.deleteNotice(noticeId).subscribe(response => {
            console.log("deleteNotice()", noticeId);
            if (response.code == 200 && response.body == true) {
                this.messageService.success("删除通知成功！");
            } else {
                this.messageService.error("删除通知失败！");
            }
            this.queryNoticeList();
        })
    }

    openNoticeDetailDrawer(noticeId: number) {
        this.noticeDetailDrawer.openDrawer(noticeId);
    }

    openNoticeFormDrawer(noticeId: number) {
        this.noticeFormDrawer.openDrawer(noticeId);
    }

    /**
     * 查询通知列表
     */
    queryNoticeList(): void {
        let form = new QueryNoticeListForm(
            this.teacherId,
            this.noticeTitle,
            this.noticePriority,
            this.releaseFlag,
            this.pageIndex,
            this.pageSize
        );
        this.noticeService.queryNoticeList(form).subscribe(response => {
            console.log("queryNoticeList()", response)
            if (response.code == 200) {
                this.noticeList = response.body.noticeList;
                this.total = response.body.total;
            }
        })
    }

    /**
     * 更新通知
     */
    updateNotice(noticeId: number): void {
        let form = new UpdateNoticeForm(
            this.teacherId,
            noticeId,
            "",
            0,
            "",
            1
        )
        this.noticeService.updateNotice(form).subscribe(response => {
            if (response.code == 200 && response.body == true) {
                this.messageService.success("发布通知成功！");
            } else {
                this.messageService.error("发布通知失败！");
            }
            this.queryNoticeList();
        })
    }
}
