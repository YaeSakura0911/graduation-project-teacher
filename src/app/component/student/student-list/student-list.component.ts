import { Component, OnInit, ViewChild } from '@angular/core';

import { Student } from 'src/app/entity/student.entity';
import { Research } from 'src/app/entity/research.entity';

import { QueryStudentListForm } from 'src/app/form/query-student-list-form';

import { StudentService } from 'src/app/service/student.service';
import { ResearchService } from 'src/app/service/research.service';
import { NzMessageService } from 'ng-zorro-antd/message';

import { StudentFormComponent } from '../student-form/student-form.component';

import { differenceInCalendarDays, getYear } from 'date-fns';
import { StudentDetailComponent } from '../student-detail/student-detail.component';
import { QueryResearchListForm } from 'src/app/form/query-research-list-form';

@Component({
    selector: 'app-student-list',
    templateUrl: './student-list.component.html',
    styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {

    teacherId: number = 0;
    researchId: number = 0;
    studentName: string = "";
    studentYear: Date | null = null;
    studentList: Student[] = [];
    researchList: Research[] = [];

    pageIndex: number = 1;
    pageSize: number = 10;
    total!: number;

    today: Date = new Date();
    disabledDate = (current: Date):boolean => differenceInCalendarDays(current, this.today) > 0;

    @ViewChild('studentFormDrawer')
    studentFormDrawer!: StudentFormComponent;
    @ViewChild('studentDetailDrawer')
    studentDetailDrawer!: StudentDetailComponent;

    constructor(
        private studentService: StudentService,
        private researchService: ResearchService,
        private messageService: NzMessageService
    ) { }

    // 初始化页面
    ngOnInit(): void {
        this.teacherId = Number(localStorage.getItem('teacherId'));
        this.queryStudentList();
        this.queryResearchList();
    }

    // 查询学生列表
    queryStudentList(): void {
        // 查询学生列表表单
        let form: QueryStudentListForm = new QueryStudentListForm(
            this.teacherId,
            this.studentName,
            this.researchId,
            this.studentYear,
            this.pageIndex,
            this.pageSize
        )
        console.log("QueryStudentListForm", form);
        // 发起请求
        this.studentService.queryStudentList(form).subscribe(response => {
            console.log(response);
            if(response.code == 200) {
                this.studentList = response.body.studentList;
                this.total = response.body.total;
            }
        })
    }

    // 查询研究列表
    queryResearchList(): void {
        let queryResearchListForm: QueryResearchListForm = new QueryResearchListForm(
            this.teacherId,
            ""
        )
        // 查询研究列表
        this.researchService.queryResearchList(queryResearchListForm).subscribe(response => {
            console.log(response);
            if(response.code == 200) {
                this.researchList = response.body;
            }
        })
    }

    // 查询学生详情
    queryStudent(studentId: number): void {
        this.studentService.deleteStudent(studentId).subscribe(response => {
            console.log(response);
            if(response.code == 200) {

            }
        })
    }

    // 删除学生
    deleteStudent(studentId: number): void {
        // 发起请求
        this.studentService.deleteStudent(studentId).subscribe(response => {
            console.log(response);
            if(response.code == 200 && response.body == true) {
                this.messageService.success('删除学生成功!');
                this.queryStudentList();
            }
        })
    }

    pageIndexChange(): void {
        this.queryStudentList()
    }

    pageSizeChange(): void {
        this.queryStudentList()
    }

    // 打开表单抽屉
    openFormDrawer(studentId: number): void {
        this.studentFormDrawer?.openDrawer(studentId);
    }

    // 打开详情抽屉
    openDetailDrawer(studentId: number): void {
        this.studentDetailDrawer?.openDrawer(studentId);
    }

}
