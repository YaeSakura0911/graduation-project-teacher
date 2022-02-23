import {Component, EventEmitter, OnInit, Output} from '@angular/core';

import {NzMessageService} from 'ng-zorro-antd/message';
import {ResearchService} from 'src/app/service/research.service';
import {TaskService} from 'src/app/service/task.service';

import {Research} from 'src/app/entity/research.entity';

import {QueryResearchListForm} from 'src/app/form/query-research-list-form';
import {StorageUtil} from "../../../util/storage.util";
import {FormBuilder, Validators} from "@angular/forms";

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

    // createTaskForm = this.formBuilder.group({
    //     taskName: [null, [
    //         Validators.required,
    //         Validators.maxLength(50)
    //     ]],
    //     researchId: [null, Validators.required],
    //     taskContent: [null, [
    //         Validators.required,
    //         Validators.maxLength(255)
    //     ]],
    // })

    shareTaskForm = this.formBuilder.group({
        taskId: [],
        taskName: [null, [
            Validators.required,
            Validators.maxLength(50)
        ]],
        researchId: [null, Validators.required],
        taskContent: [null, [
            Validators.required,
            Validators.maxLength(255)
        ]]
    })
    @Output()
    refreshPage = new EventEmitter<any>();

    constructor(
        private formBuilder: FormBuilder,
        private messageService: NzMessageService,
        private researchService: ResearchService,
        private storageUtil: StorageUtil,
        private taskService: TaskService,
    ) {
    }

    /**
     * 页面初始化
     */
    ngOnInit(): void {
        this.teacherId = this.storageUtil.get("auth").teacherId;
        this.queryResearchList();
    }

    /**
     * 创建研究
     */
    createTask(): void {
        // 发起请求
        this.taskService.createTask(this.shareTaskForm.value).subscribe(response => {
            console.log("createTask()", response);
            if (response.code == 200 && response.body == true) {
                this.messageService.success('创建任务成功!');
            } else {
                this.messageService.error('创建任务失败!');
            }
            this.closeDrawer();
            this.refreshPage.emit();
        })
    }

    /**
     * 查询研究列表
     */
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

    /**
     * 查询任务详情
     */
    queryTask(): void {
        // 发起请求
        this.taskService.queryTask(this.shareTaskForm.value.taskId).subscribe(response => {
            console.log("queryTask()", response);
            if (response.code == 200) {
                this.shareTaskForm.patchValue({
                    taskName: response.body.taskName,
                    taskContent: response.body.taskContent
                })
            }
        })
    }

    /**
     * 更新任务详情
     */
    updateTask(): void {
        // 发起请求
        this.taskService.updateTask(this.shareTaskForm.value).subscribe(response => {
            console.log("updateTask()", response);
            if (response.code == 200 && response.body == true) {
                this.messageService.success("更新任务成功!");
            } else {
                this.messageService.error("更新任务失败!");
            }
            this.closeDrawer();
            this.refreshPage.emit();
        });
    }

    /**
     * 打开抽屉
     * @param taskId
     * @param researchId
     */
    openDrawer(taskId: number, researchId: number): void {
        this.drawerVisible = true;
        if (taskId == 0) {
            this.isCreate = true;
            this.drawerTitle = "创建任务";
            this.shareTaskForm.patchValue({
                researchId: researchId
            });
        } else {
            this.isCreate = false;
            this.drawerTitle = "编辑任务";
            this.shareTaskForm.patchValue({
                taskId: taskId,
                researchId: researchId
            });
            this.queryTask();
        }
    }

    /**
     * 关闭抽屉
     */
    closeDrawer(): void {
        this.drawerVisible = false;
        this.shareTaskForm.reset(); // 重置表单
    }
}
