import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {StudentFormComponent} from '../../student/student-form/student-form.component';
import {TaskFormComponent} from '../../task/task-form/task-form.component';

import {NzMessageService} from 'ng-zorro-antd/message';
import {ResearchService} from 'src/app/service/research.service';
import {StudentService} from 'src/app/service/student.service';
import {TaskService} from 'src/app/service/task.service';

import {QueryTaskListForm} from 'src/app/form/query-task-list-form';
import {QueryStudentListForm} from 'src/app/form/query-student-list-form';

import {Student} from 'src/app/entity/student.entity';
import {TaskEntity} from 'src/app/entity/task.entity';

import {differenceInCalendarDays, formatDistanceToNow, parseISO} from 'date-fns';
import {StudentDetailComponent} from '../../student/student-detail/student-detail.component';
import {TaskDetailComponent} from "../../task/task-detail/task-detail.component";
import {QueryCompleteListForm} from "../../../form/query-complete-list-form";
import {CompleteEntity} from "../../../entity/complete.entity";
import {StorageUtil} from "../../../util/storage.util";
import {FormBuilder, Validators} from "@angular/forms";
import {TaskReleaseComponent} from "../../task/task-release/task-release.component";

@Component({
    selector: 'app-research-detail',
    templateUrl: './research-detail.component.html',
    styleUrls: ['./research-detail.component.scss']
})
export class ResearchDetailComponent implements OnInit {

    teacherId: number = 0;
    researchId: number = 0;
    studentName: string = "";
    studentYear: Date | null = null;
    taskName: string = "";
    taskState: number = 0;

    taskPageIndex: number = 1;
    taskPageSize: number = 10;
    taskTotal!: number;
    studentPageIndex: number = 1;
    studentPageSize: number = 10;
    studentTotal!: number;

    today: Date = new Date();
    disabledDate = (current: Date): boolean => differenceInCalendarDays(current, this.today) > 0;
    deleteResearchModelVisible: boolean = false;
    studentList: Student[] = [];
    taskList: TaskEntity[] = [];
    completeList: CompleteEntity[] = [];

    updateResearchFrom = this.formBuilder.group({
        researchId: [],
        researchName: [null, [
            Validators.required,
            Validators.maxLength(50)
        ]],
        researchDescription: [null, [
            Validators.required,
            Validators.maxLength(255)
        ]]
    })

    @ViewChild('taskDrawer')
    taskDrawer!: TaskFormComponent;
    @ViewChild('taskDetailDrawer')
    taskDetailDrawer!: TaskDetailComponent;
    @ViewChild('taskReleaseModal')
    taskReleaseModal!: TaskReleaseComponent;
    @ViewChild('studentDetailDrawer')
    studentDetailDrawer!: StudentDetailComponent;
    @ViewChild('studentFormDrawer')
    studentFormDrawer!: StudentFormComponent;

    constructor(
        private formBuilder: FormBuilder,
        private messageService: NzMessageService,
        private route: ActivatedRoute,
        private researchService: ResearchService,
        private storageUtil: StorageUtil,
        private studentService: StudentService,
        private taskService: TaskService
    ) {
        this.route.queryParams.subscribe((res) => {
            this.researchId = Number(res['researchId']);
        })
    }

    dateDistance(updateTime: string) {
        return formatDistanceToNow(parseISO(updateTime));
    }

    // 初始化页面
    ngOnInit(): void {
        this.teacherId = this.storageUtil.get("auth").teacherId;
        this.queryResearch(this.researchId);
        this.queryTaskList();
        this.queryStudentList();
        this.queryCompleteList();
    }

    /**
     * 删除研究
     */
    deleteResearch(): void {
        // 发送请求
        this.researchService.deleteResearch(this.researchId).subscribe(response => {
            console.log(response);
            if (response.code == 200 && response.body == true) {
                this.messageService.success('删除研究成功!');
                history.back();
            } else {
                this.messageService.error('删除研究失败!');
            }
            this.deleteResearchModelVisible = false;
        })
    }

    /**
     * 删除任务
     * @param taskId 任务ID
     */
    deleteTask(taskId: number): void {
        this.taskService.deleteTask(taskId).subscribe(response => {
            if (response.code == 200 && response.body == true) {
                this.messageService.success('删除任务成功！');
            } else {
                this.messageService.error('删除任务失败！');
            }
            this.queryTaskList();
        })
    }

    /**
     * 删除学生
     * @param studentId 学生ID
     */
    deleteStudent(studentId: number): void {
        this.studentService.deleteStudent(studentId).subscribe(response => {
            if (response.code == 200 && response.body == true) {
                this.messageService.success('删除学生成功!');
            } else {
                this.messageService.error('删除学生失败!');
            }
            this.queryStudentList();
        })
    }

    queryCompleteList(): void {
        let form = new QueryCompleteListForm(
            0,
            this.researchId,
            1,
            10
        );
        console.log("QueryCompleteListForm", form);
        this.taskService.queryCompleteList(form).subscribe(response => {
            console.log("queryCompleteList", response);
            if (response.code == 200) {
                this.completeList = response.body.completeList;
            }
        })
    }

    /**
     * 查询研究详情
     * @param researchId 研究ID
     */
    queryResearch(researchId: number): void {
        // 发送请求
        this.researchService.queryResearch(researchId).subscribe(response => {
            if (response.code == 200) {
                this.updateResearchFrom.patchValue({
                    researchName: response.body.researchName,
                    researchDescription: response.body.researchDescription
                })
            }
        })
    }

    // 查询任务列表
    queryTaskList(): void {
        let form: QueryTaskListForm = new QueryTaskListForm(
            this.teacherId,
            this.researchId,
            this.taskName,
            this.taskState,
            this.taskPageIndex,
            this.taskPageSize
        )
        console.log("QueryTaskListForm", form);
        // 发送请求
        this.taskService.queryTaskList(form).subscribe(response => {
            console.log("queryResearchTask()", response);
            if (response.code == 200) {
                this.taskList = response.body.taskList;
                this.taskTotal = response.body.total;
            }
        })
    }

    // 查询学生列表
    queryStudentList(): void {
        let form: QueryStudentListForm = new QueryStudentListForm(
            this.teacherId,
            this.studentName,
            this.researchId,
            this.studentYear,
            this.studentPageIndex,
            this.studentPageSize
        );
        console.log("QueryStudentListForm", form);
        this.studentService.queryStudentList(form).subscribe(response => {
            console.log("queryResearchStudent()", response);
            if (response.code == 200) {
                this.studentList = response.body.studentList;
                this.studentTotal = response.body.total;
            }
        })
    }

    studentPageIndexChange(): void {
        this.queryStudentList();
    }

    studentPageSizeChange(): void {
        this.queryStudentList();
    }

    // 分页页码发生改变
    taskPageIndexChange(): void {
        this.queryTaskList();
    }

    // 分页大小发生改变
    taskPageSizeChange(): void {
        this.queryTaskList();
    }

    /**
     * 更新研究信息
     */
    updateResearch(): void {
        this.updateResearchFrom.patchValue({researchId: this.researchId});
        this.researchService.updateResearch(this.updateResearchFrom.value).subscribe(response => {
            console.log(response);
            if (response.code == 200 && response.body == true) {
                this.messageService.success('更新研究信息成功!');
            } else {
                this.messageService.error('更新研究信息失败!');
            }
            // 重新查询研究详情
            this.queryResearch(this.researchId);
        })
    }

    toggleDeleteResearchModelVisible(): void {
        this.deleteResearchModelVisible = !this.deleteResearchModelVisible;
    }

    openTaskDrawer(taskId: number, researchId: number): void {
        this.taskDrawer?.openDrawer(taskId, researchId);
    }

    openTaskDetailDrawer(taskId: number): void {
        this.taskDetailDrawer.openDrawer(taskId);
    }

    openTaskReleaseModal(taskId: number, researchId: number): void {
        this.taskReleaseModal.openModal(taskId, researchId);
    }

    openStudentDetailDrawer(studentId: number): void {
        this.studentDetailDrawer.openDrawer(studentId);
    }

    openStudentFormDrawer(studentId: number): void {
        this.studentFormDrawer?.openDrawer(studentId);
    }
}
