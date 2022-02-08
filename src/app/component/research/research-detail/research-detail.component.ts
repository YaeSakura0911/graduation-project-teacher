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

import {differenceInCalendarDays, formatDistance, getYear} from 'date-fns';
import {StudentDetailComponent} from '../../student/student-detail/student-detail.component';

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
    studentYear!: Date;
    taskName: string = "";
    taskState: number = -1;

    pageIndex: number = 1;
    pageSize: number = 10;
    total!: number;

    today: Date = new Date();
    disabledDate = (current: Date): boolean => differenceInCalendarDays(current, this.today) > 0;
    deleteResearchModelVisible: boolean = false;
    time: string = formatDistance(new Date(), new Date);
    studentList: Student[] = [];
    taskList: TaskEntity[] = [];

    @ViewChild('taskDrawer')
    taskDrawer: TaskFormComponent | undefined;
    @ViewChild('studentDetailDrawer')
    studentDetailDrawer!: StudentDetailComponent;
    @ViewChild('studentFormDrawer')
    studentFormDrawer: StudentFormComponent | undefined;

    constructor(
        private route: ActivatedRoute,
        private researchService: ResearchService,
        private studentService: StudentService,
        private taskService: TaskService,
        private messageService: NzMessageService
    ) {
    }

    // 初始化页面
    ngOnInit(): void {
        this.teacherId = Number(localStorage.getItem('teacherId'));
        this.researchId = Number(this.route.snapshot.params['researchId']);
        this.queryResearchDetail(this.researchId);
    }

    // 标签页发生改变
    tabChange(index: number): void {
        // 重置分页
        this.pageIndex = 1;
        this.pageSize = 10;
        this.total = 0;
        if (index == 1) {
            // 任务
            this.queryResearchTask();
        } else if (index == 2) {
            // 学生
            this.queryResearchStudent();
        }
    }

    // 分页索引发生改变
    pageIndexChange(tabIndex: number): void {
        if (tabIndex == 0) {
            // 任务分页
            this.queryResearchTask();
        } else if (tabIndex == 1) {
            // 学生分页
            this.queryResearchStudent();
        }
    }

    // 分页大小发生改变
    pageSizeChange(tabIndex: number): void {
        // 任务分页
        if (tabIndex == 0) {
            this.queryResearchTask();
        }
        // 学生分页
        else if (tabIndex == 1) {
            this.queryResearchStudent();
        }
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

    // 查询研究详情
    queryResearchDetail(researchId: number): void {
        // 发送请求
        this.researchService.queryResearchDetail(researchId).subscribe(response => {
            this.researchName = response.body.researchName;
            this.researchDescription = response.body.researchDescription;
        })
    }

    // 查询任务列表
    queryResearchTask(): void {
        let queryTaskListForm: QueryTaskListForm = new QueryTaskListForm(
            this.teacherId,
            this.researchId,
            this.taskName,
            this.taskState,
            this.pageIndex,
            this.pageSize
        )
        // 发送请求
    }

    // 查询学生列表
    queryResearchStudent(): void {
        let queryStudentListForm: QueryStudentListForm = new QueryStudentListForm(
            this.teacherId,
            this.studentName,
            this.researchId,
            getYear(this.studentYear),
            this.pageIndex,
            this.pageSize,
            this.total
        );

        this.studentService.queryStudentList(queryStudentListForm).subscribe(response => {
            console.log(response);
            if (response.code == 200) {
                this.studentList = response.body.studentList;
                this.pageIndex = response.body.pageIndex;
                this.pageSize = response.body.pageSize;
                this.total = response.body.total;
            }
        })
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

    openStudentDetailDrawer(studentId: number): void {
        this.studentDetailDrawer.openDrawer(studentId);
    }

    openStudentFormDrawer(studentId: number): void {
        this.studentFormDrawer?.openDrawer(studentId);
    }
}
