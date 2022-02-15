import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {StudentFormComponent} from '../../student/student-form/student-form.component';
import {TaskFormComponent} from '../../task/task-form/task-form.component';

import {NzMessageService} from 'ng-zorro-antd/message';
import {ResearchService} from 'src/app/service/research.service';
import {StudentService} from 'src/app/service/student.service';
import {TaskService} from 'src/app/service/task.service';

import {QueryTaskListForm} from 'src/app/form/query-task-list-form';
import {UpdateResearchForm} from 'src/app/form/update-research-form';
import {QueryStudentListForm} from 'src/app/form/query-student-list-form';

import {Student} from 'src/app/entity/student.entity';
import {TaskEntity} from 'src/app/entity/task.entity';

import {differenceInCalendarDays, formatDistanceToNow, parseISO} from 'date-fns';
import {StudentDetailComponent} from '../../student/student-detail/student-detail.component';
import {TaskDetailComponent} from "../../task/task-detail/task-detail.component";
import {QueryCompleteListForm} from "../../../form/query-complete-list-form";
import {CompleteEntity} from "../../../entity/complete.entity";

@Component({
    selector: 'app-research-detail',
    templateUrl: './research-detail.component.html',
    styleUrls: ['./research-detail.component.scss']
})
export class ResearchDetailComponent implements OnInit {

    teacherId: number = 0;
    researchId: number = 0;
    researchName: string = "";
    researchDescription: string = "";
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
    // time: string = formatDistance(new Date(), new Date);
    studentList: Student[] = [];
    taskList: TaskEntity[] = [];
    completeList: CompleteEntity[] = [];

    @ViewChild('taskDrawer')
    taskDrawer!: TaskFormComponent;
    @ViewChild('taskDetailDrawer')
    taskDetailDrawer!: TaskDetailComponent;
    @ViewChild('studentDetailDrawer')
    studentDetailDrawer!: StudentDetailComponent;
    @ViewChild('studentFormDrawer')
    studentFormDrawer!: StudentFormComponent;

    constructor(
        private route: ActivatedRoute,
        private researchService: ResearchService,
        private studentService: StudentService,
        private taskService: TaskService,
        private messageService: NzMessageService
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
        this.teacherId = Number(localStorage.getItem('teacherId'));
        this.queryResearchDetail(this.researchId);
        this.queryResearchTask();
        this.queryResearchStudent();
        this.queryCompleteList();
    }

    // 删除研究
    deleteResearch(): void {
        // 发送请求
        this.researchService.deleteResearch(this.researchId).subscribe(response => {
            console.log(response);
            if (response.code == 200 && response.body == true) {
                this.messageService.success('删除研究成功!');
            } else {
                this.messageService.error('删除研究失败!');
            }
            this.deleteResearchModelVisible = false;
        })
    }

    // 删除任务
    deleteTask(taskId: number): void {
        this.taskService.deleteTask(taskId).subscribe(response => {
            console.log(response);
            if (response.code == 200 && response.body == true) {
                this.messageService.success('删除任务成功!');
            }
        })
    }

    // 删除学生
    deleteStudent(studentId: number): void {
        this.studentService.deleteStudent(studentId).subscribe(response => {
            console.log(response);
            if (response.code == 200 && response.body == true) {
                this.messageService.success('删除学生成功!');
            }
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

    // 查询研究详情
    queryResearchDetail(researchId: number): void {
        // 发送请求
        this.researchService.queryResearch(researchId).subscribe(response => {
            this.researchName = response.body.researchName;
            this.researchDescription = response.body.researchDescription;
        })
    }

    // 查询任务列表
    queryResearchTask(): void {
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
    queryResearchStudent(): void {
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
        this.queryResearchStudent();
    }

    studentPageSizeChange(): void {
        this.queryResearchStudent();
    }

    // 分页页码发生改变
    taskPageIndexChange(): void {
        this.queryResearchTask();
    }

    // 分页大小发生改变
    taskPageSizeChange(): void {
        this.queryResearchTask();
    }

    // 更新研究信息
    updateResearch(): void {
        let updateResearchFrom: UpdateResearchForm = new UpdateResearchForm(
            this.teacherId,
            this.researchId,
            this.researchName,
            this.researchDescription
        );
        this.researchService.updateResearch(updateResearchFrom).subscribe(response => {
            console.log(response);
            if (response.code == 200 && response.body == true) {
                this.messageService.success('更新研究信息成功!');
            } else {
                this.messageService.error('更新研究信息失败!');
            }
            // 重新查询研究详情
            this.queryResearchDetail(this.researchId);
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

    openStudentDetailDrawer(studentId: number): void {
        this.studentDetailDrawer.openDrawer(studentId);
    }

    openStudentFormDrawer(studentId: number): void {
        this.studentFormDrawer?.openDrawer(studentId);
    }
}
