import {Component, OnInit} from '@angular/core';

import {NzMessageService} from 'ng-zorro-antd/message';
import {ResearchService} from 'src/app/service/research.service';
import {TaskService} from 'src/app/service/task.service';

import {Research} from 'src/app/entity/research.entity';

import {CreateTaskForm} from 'src/app/form/create-task-form';
import {QueryResearchListForm} from 'src/app/form/query-research-list-form';
import {UpdateTaskForm} from "../../../form/update-task-form";

@Component({
    selector: 'app-task-form',
    templateUrl: './task-form.component.html',
    styleUrls: ['./task-form.component.scss']
})
export class TaskFormComponent implements OnInit {

    isCreate: boolean = true;
    drawerVisible: boolean = false;
    drawerTitle: string = "";

    teacherId: number = 0;
    researchId: number = 0;
    taskId: number = 0;
    taskName: string = "";
    taskContent: string = "";

    researchList: Research[] = [];

    constructor(
        private messageService: NzMessageService,
        private researchService: ResearchService,
        private taskService: TaskService
    ) {
    }

    // 页面初始化
    ngOnInit(): void {
        this.teacherId = Number(localStorage.getItem('teacherId'));
        this.queryResearchList();
    }

    // 创建研究
    createTask(): void {
        let createTaskForm = new CreateTaskForm(
            this.researchId,
            this.taskName,
            this.taskContent
        );
        // 发起请求
        this.taskService.createTask(createTaskForm).subscribe(response => {
            console.log("createTask()", response);
            if (response.code == 200 && response.body == true) {
                this.messageService.success('创建任务成功!');
            } else {
                this.messageService.error('创建任务失败!');
            }
            this.closeDrawer();
        })
    }

    // 查询研究列表
    queryResearchList(): void {
        let queryResearchListForm = new QueryResearchListForm(
            this.teacherId,
            ""
        );
        this.researchService.queryResearchList(queryResearchListForm).subscribe(response => {
            console.log(response);
            if (response.code == 200) {
                this.researchList = response.body;
            }
        })
    }

    // 查询任务详情
    queryTask(): void {
        // 发起请求
        this.taskService.queryTask(this.taskId).subscribe(response => {
            console.log("queryTask()", response);
            if (response.code == 200) {
                this.taskName = response.body.taskName;
                this.taskContent = response.body.taskContent;
            }
        })
    }

    // 更新任务
    updateTask(): void {
        // 更新任务表单
        let updateTaskForm = new UpdateTaskForm(
            this.taskId,
            this.researchId,
            this.taskName,
            this.taskContent,
            0,
            null
        )
        console.log(updateTaskForm);
        // 发起请求
        this.taskService.updateTask(updateTaskForm).subscribe(response => {
            console.log("updateTask()", response);
            if (response.code == 200 && response.body == true) {
                this.messageService.success("更新任务成功!");
            }
        })
    }

    openDrawer(taskId: number, researchId: number): void {
        this.drawerVisible = true;
        if (taskId == 0 && researchId == 0) {
            this.isCreate = true;
            this.drawerTitle = "创建任务";
        } else {
            this.isCreate = false;
            this.drawerTitle = "更新任务";
            this.taskId = taskId;
            this.researchId = researchId;
            this.queryTask();
        }
    }

    closeDrawer(): void {
        this.drawerVisible = false;
    }

}
