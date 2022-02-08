import {Component, OnInit} from '@angular/core';
import {TaskService} from "../../../service/task.service";
import {ActivatedRoute} from "@angular/router";

@Component({
    selector: 'app-task-detail',
    templateUrl: './task-detail.component.html',
    styleUrls: ['./task-detail.component.scss']
})
export class TaskDetailComponent implements OnInit {

    teacherId: number = 0;
    taskId: number = 0;
    taskName: string = "";
    researchName: string = "";
    taskState: number = -1;
    endTime!: Date;
    taskContent: string = "";

    drawerVisible: boolean = false;

    constructor(
        private route: ActivatedRoute,
        private taskService: TaskService) {
    }

    ngOnInit(): void {
        this.teacherId = Number(localStorage.getItem('teacherId'));
        // this.taskId = Number(this.route.snapshot.params['taskId']);
    }

    // 查询任务详情
    queryTask(): void {
        this.taskService.queryTask(this.taskId).subscribe(response => {
            console.log("queryTask()", response);
            if (response.code == 200) {
                this.taskName = response.body.taskName;
                this.researchName = response.body.researchName;
                this.taskState = response.body.taskState;
                this.endTime = response.body.endTime;
                this.taskContent = response.body.taskContent;
            }
        })
    }

    openDrawer(taskId: number): void {
        this.drawerVisible = true;
        this.taskId = taskId;
        this.queryTask();
    }

    closeDrawer(): void {
        this.drawerVisible = false;
    }
}
