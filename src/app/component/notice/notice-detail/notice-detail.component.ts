import {Component} from '@angular/core';
import {NoticeService} from "../../../service/notice.service";

@Component({
    selector: 'app-notice-detail',
    templateUrl: './notice-detail.component.html',
    styleUrls: ['./notice-detail.component.scss']
})
export class NoticeDetailComponent {

    drawerVisible: boolean = false;
    noticeId: number = 0;
    noticeTitle: string = "";
    noticePriority: number = 0;
    releaseFlag: number = 0;
    noticeContent: number = 0;
    releaseDate!: Date;

    constructor(private noticeService: NoticeService) {
    }

    closeDrawer() {
        this.drawerVisible = false;
    }

    openDrawer(noticeId: number) {
        this.drawerVisible = true;
        this.noticeId = noticeId;
        this.queryNotice();
    }

    queryNotice() {
        this.noticeService.queryNotice(this.noticeId).subscribe(response => {
            console.log(response);
            if (response.code == 200) {
                this.noticeTitle = response.body.noticeTitle;
                this.noticePriority = response.body.noticePriority;
                this.releaseFlag = response.body.noticeState;
                this.releaseDate = response.body.releaseDate;
                this.noticeContent = response.body.noticeContent;
                this.releaseFlag = response.body.releaseFlag;
            }
        })
    }
}
