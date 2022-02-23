import {Component, OnInit, ViewChild} from '@angular/core';

import {TaskEntity} from 'src/app/entity/task.entity';
import {Research} from 'src/app/entity/research.entity';

import {QueryResearchListForm} from 'src/app/form/query-research-list-form';
import {QueryTaskListForm} from 'src/app/form/query-task-list-form';

import {NzMessageService} from "ng-zorro-antd/message";
import {ResearchService} from 'src/app/service/research.service';
import {TaskService} from 'src/app/service/task.service';

import {TaskFormComponent} from '../task-form/task-form.component';
import {TaskDetailComponent} from "../task-detail/task-detail.component";
import {StorageUtil} from "../../../util/storage.util";
import {StudentService} from "../../../service/student.service";
import {Student} from "../../../entity/student.entity";
import {FormBuilder} from "@angular/forms";
import {TaskReleaseComponent} from "../task-release/task-release.component";

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
    studentList: Student[] = [];
    taskList: TaskEntity[] = [];
    studentIdList: number[] = [];

    // taskReleaseModelVisible: boolean = false;

    @ViewChild('taskDetailDrawer')
    taskDetailDrawer!: TaskDetailComponent;
    @ViewChild('taskFormDrawer')
    taskFormDrawer!: TaskFormComponent;
    @ViewChild('taskReleaseComponent')
    taskReleaseModal!: TaskReleaseComponent;

    // releaseTaskForm = new FormBuilder().group({
    //    endTime: [null, Validators.required],
    //     studentIdList: [null, Validators.required],
    // });

    constructor(
        private formBuilder: FormBuilder,
        private messageService: NzMessageService,
        private researchService: ResearchService,
        private studentService: StudentService,
        private storageUtil: StorageUtil,
        private taskService: TaskService,
    ) {
    }

    // 页面初始化
    ngOnInit(): void {
        this.teacherId = this.storageUtil.get("auth").teacherId;
        this.queryResearchList();
        this.queryTaskList();
    }

    // 复选框改变
    checkedChange(event: any): void {
        this.studentIdList = event;
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

    // 查询学生列表
    // queryStudentList(researchId: number): void {
    //     let form = new QueryStudentListForm(
    //         this.teacherId,
    //         "",
    //         researchId,
    //         null,
    //         0,
    //         0
    //     );
    //     this.studentService.queryStudentList(form).subscribe(response => {
    //         console.log("queryStudentList()", response);
    //         if (response.code == 200) {
    //             this.studentList = response.body.studentList;
    //         }
    //     })
    // }

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
    // updateTask(modelRef: NzModalRef, taskId: number): void {
    //     // 更新任务表单
    //     let form = new UpdateTaskForm(
    //         taskId,
    //         0,
    //         "",
    //         "",
    //         2,
    //         this.endTime,
    //         this.studentIdList
    //     );
    //     console.log(form);
    //     modelRef.destroy();
    //     // 发起请求
    //     this.taskService.updateTask(form).subscribe(response => {
    //         console.log("updateTask()", response);
    //         if (response.code == 200 && response.body == true) {
    //             this.messageService.success("发布任务成功!");
    //         } else {
    //             this.messageService.error("发布任务失败!");
    //         }
    //         this.queryTaskList();
    //     })
    // }

    // 打开表单抽屉
    openTaskFormDrawer(taskId: number, researchId: number): void {
        this.taskFormDrawer?.openDrawer(taskId, researchId);
    }

    // 打开详情抽屉
    openTaskDetailDrawer(taskId: number): void {
        this.taskDetailDrawer.openDrawer(taskId);
    }

    openTaskReleaseModal(taskId: number, researchId: number): void {
        this.taskReleaseModal.openModal(taskId, researchId);
    }

    pageIndexChange(): void {
        this.queryTaskList();
    }

    pageSizeChange(): void {
        this.queryTaskList();
    }
}
