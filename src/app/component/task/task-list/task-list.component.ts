import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';

import {TaskEntity} from 'src/app/entity/task.entity';
import {Research} from 'src/app/entity/research.entity';

import {QueryResearchListForm} from 'src/app/form/query-research-list-form';
import {QueryTaskListForm} from 'src/app/form/query-task-list-form';

import {NzMessageService} from "ng-zorro-antd/message";
import {ResearchService} from 'src/app/service/research.service';
import {TaskService} from 'src/app/service/task.service';

import {TaskFormComponent} from '../task-form/task-form.component';
import {TaskDetailComponent} from "../task-detail/task-detail.component";
import {UpdateTaskForm} from "../../../form/update-task-form";

@Component({
    selector: 'app-task-list',
    templateUrl: './task-list.component.html',
    styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

    teacherId: number = 0;
    researchId: number = 0;
    taskName: string = "";
    taskState: number = 0;
    endTime!: Date;

    pageIndex: number = 1;
    pageSize: number = 10;
    total!: number;

    researchList: Research[] = [];
    taskList: TaskEntity[] = [];

    taskReleaseModelVisible: boolean = false;

    @ViewChild('taskDetailDrawer')
    taskDetailDrawer!: TaskDetailComponent;
    @ViewChild('taskFormDrawer')
    taskFormDrawer!: TaskFormComponent;

    constructor(
        private researchService: ResearchService,
        private taskService: TaskService,
        private messageService: NzMessageService,
        private modalService: NzModalService
    ) {
    }

    // 页面初始化
    ngOnInit(): void {
        this.teacherId = Number(localStorage.getItem('teacherId'));
        this.queryResearchList();
        this.queryTaskList();
    }

    createTplModal(tplTitle: TemplateRef<{}>, tplContent: TemplateRef<{}>, tplFooter: TemplateRef<{}>, taskId: number): void {
        this.modalService.create({
            nzTitle: tplTitle,
            nzContent: tplContent,
            nzFooter: tplFooter,
            nzMaskClosable: false,
            nzClosable: false,
            nzComponentParams: {
                value: taskId
            },
        });
    }

    // 删除任务
    deleteTask(taskId: number): void {
        this.taskService.deleteTask(taskId).subscribe(response => {
            console.log("deleteTask", response);
            if (response.code == 200 && response.body == true) {
                this.messageService.success("删除任务成功!");
                this.queryTaskList();
            }
        })
    }

    // 查询研究列表
    queryResearchList(): void {
        // 查询研究列表表单
        let queryResearchListForm = new QueryResearchListForm(
            this.teacherId,
            ""
        );
        // 发起请求
        this.researchService.queryResearchList(queryResearchListForm).subscribe(response => {
            console.log("queryResearchList()", response);
            if (response.code == 200) {
                this.researchList = response.body;
            }
        })
    }

    // 查询任务列表
    queryTaskList(): void {
        // 查询任务列表表单
        let queryTaskListForm = new QueryTaskListForm(
            this.teacherId,
            this.researchId,
            this.taskName,
            this.taskState,
            this.pageIndex,
            this.pageSize
        );
        console.log("queryTaskListForm", queryTaskListForm);
        // 发起请求
        this.taskService.queryTaskList(queryTaskListForm).subscribe(response => {
            console.log("queryTaskList()", response);
            if (response.code == 200) {
                this.taskList = response.body.taskList;
                this.total = response.body.total;
            }
        })
    }

    // 更新任务
    updateTask(modelRef: NzModalRef, taskId: number): void {
        // 更新任务表单
        let updateTaskForm = new UpdateTaskForm(
            taskId,
            0,
            "",
            "",
            2,
            this.endTime
        )
        console.log(updateTaskForm);
        modelRef.destroy();
        // 发起请求
        this.taskService.updateTask(updateTaskForm).subscribe(response => {
            console.log("updateTask()", response);
            if (response.code == 200 && response.body == true) {
                this.messageService.success("发布任务成功!");
            }
            else {
                this.messageService.error("发布任务失败!");
            }
            this.queryTaskList();
        })
    }

    // 打开表单抽屉
    openTaskFormDrawer(taskId: number, researchId: number): void {
        this.taskFormDrawer?.openDrawer(taskId, researchId);
    }

    // 打开详情抽屉
    openTaskDetailDrawer(taskId: number): void {
        this.taskDetailDrawer.openDrawer(taskId);
    }

    pageIndexChange(): void {
        this.queryTaskList();
    }

    pageSizeChange(): void {
        this.queryTaskList();
    }

    taskReleaseModelVisibleToggle(): void {
        this.taskReleaseModelVisible = !this.taskReleaseModelVisible;
    }

}
