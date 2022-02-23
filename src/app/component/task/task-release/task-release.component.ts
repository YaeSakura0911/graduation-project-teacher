import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Student} from "../../../entity/student.entity";
import {FormBuilder, Validators} from "@angular/forms";
import {NzMessageService} from "ng-zorro-antd/message";
import {QueryStudentListForm} from "../../../form/query-student-list-form";
import {StudentService} from "../../../service/student.service";
import {StorageUtil} from "../../../util/storage.util";
import {TaskService} from "../../../service/task.service";

@Component({
    selector: 'app-task-release',
    templateUrl: './task-release.component.html',
    styleUrls: ['./task-release.component.scss']
})
export class TaskReleaseComponent implements OnInit {

    taskId: number = 0;
    teacherId: number = 0;
    researchId: number = 0;
    modalVisible: boolean = false;
    studentList: Student[] = [];

    @Output()
    refreshPage = new EventEmitter<any>();

    releaseTaskForm = this.formBuilder.group({
        taskId: [this.taskId],
        taskState: [2],
        endTime: [null, Validators.required],
        studentIdList: [null, Validators.required],
    });

    constructor(
        private formBuilder: FormBuilder,
        private messageService: NzMessageService,
        private storageUtil: StorageUtil,
        private studentService: StudentService,
        private taskService: TaskService
    ) {
    }

    /**
     * 页面初始化
     */
    ngOnInit(): void {
        this.teacherId = this.storageUtil.get("auth").teacherId;
    }

    checkedChange(event: any): void {
        console.log(event)
        this.releaseTaskForm.patchValue({studentIdList: event});
    }

    queryStudentList(): void {
        let form = new QueryStudentListForm(
            this.teacherId,
            "",
            this.researchId,
            null,
            0,
            0
        );
        this.studentService.queryStudentList(form).subscribe(response => {
            console.log("queryStudentList()", response);
            if (response.code == 200) {
                this.studentList = response.body.studentList;
            }
        })
    }

    /**
     * 发布任务
     */
    updateTask(): void {
        console.log(this.releaseTaskForm.value);
        if (this.releaseTaskForm.valid) {
            // 发送请求
            this.taskService.updateTask(this.releaseTaskForm.value).subscribe(response => {
                console.log("updateTask()", response);
                if (response.code == 200 && response.body == true) {
                    this.messageService.success("发布任务成功！");
                }
                else {
                    this.messageService.error("发布任务失败！");
                }
                this.refreshPage.emit();
                this.closeModal();
            })
        }
        else {
            this.messageService.error("带*为必填项");
        }
    }

    openModal(taskId: number, researchId: number): void {
        this.modalVisible = true;
        this.releaseTaskForm.patchValue({taskId: taskId});
        this.researchId = researchId;
        this.queryStudentList();
    }

    closeModal(): void {
        this.modalVisible = false;
    }

}
