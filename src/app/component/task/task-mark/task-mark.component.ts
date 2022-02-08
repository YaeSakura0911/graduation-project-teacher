import {Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CompleteService} from "../../../service/complete.service";

@Component({
    selector: 'app-task-mark',
    templateUrl: './task-mark.component.html',
    styleUrls: ['./task-mark.component.scss']
})
export class TaskMarkComponent {

    completeId: number = 0;
    completeContent: string = "";
    fileUrl: string = "";
    studentName: number = 0;
    completeState: number = 0;

    drawerVisible: boolean = false;

    constructor(
        private route: ActivatedRoute,
        private completeService: CompleteService
    ) {
    }

    // 查询完成详情
    queryComplete(): void {
        this.completeService.queryComplete(this.completeId).subscribe(response => {
            console.log("queryComplete()", response);
            if (response.code == 200) {
                this.studentName = response.body.studentName;
                this.completeContent = response.body.completeContent;
                this.completeState = response.body.completeState;
                this.fileUrl = response.body.fileUrl;
            }
        })
    }

    updateComplete(): void {

    }

    openDrawer(completeId: number): void {
        this.drawerVisible = true;
        this.completeId = completeId;
        this.queryComplete();
    }

    closeDrawer(): void {
        this.drawerVisible = false;
    }

}
