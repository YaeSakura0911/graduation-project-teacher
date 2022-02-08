import { Component, OnInit } from '@angular/core';

import { differenceInCalendarDays, getYear } from 'date-fns';

import { NzMessageService } from 'ng-zorro-antd/message';
import { ResearchService } from 'src/app/service/research.service';
import { StudentService } from 'src/app/service/student.service';

import { Research } from 'src/app/entity/research.entity';
import { RegisterStudentForm } from 'src/app/form/register-student-form';
import { UpdateStudentForm } from 'src/app/form/update-student-form';
import { QueryResearchListForm } from 'src/app/form/query-research-list-form';

@Component({
    selector: 'app-student-form',
    templateUrl: './student-form.component.html',
    styleUrls: ['./student-form.component.scss']
})
export class StudentFormComponent implements OnInit {

    isRegister: boolean = true;
    drawerVisible: boolean = false;
    drawerTitle: string = "";
    teacherId: number | string = 0;
    researchId: number = 0;
    studentId: number = 0;
    studentName: string = "";
    studentYear: Date | number = 0;
    studentGender: number = 0;
    researchList: Research[] = [];
    today: Date = new Date();
    disabledDate = (current: Date): boolean => differenceInCalendarDays(current, this.today) > 0;

    constructor(
        private researchService: ResearchService,
        private studentService: StudentService,
        private messageService: NzMessageService
    ) { }

    // 页面初始化
    ngOnInit(): void {
        this.teacherId = localStorage.getItem('teacherId') || "";
        this.queryResearchList(this.teacherId);
    }

    // 查询研究列表
    queryResearchList(teacherId: number | string): void {
        let queryResearchListForm: QueryResearchListForm = new QueryResearchListForm(
            this.teacherId,
            ""
        )
        // 发起请求
        this.researchService.queryResearchList(queryResearchListForm).subscribe(response => {
            console.log(response);
            this.researchList = response.body;
        })
    }

    // 学生注册
    registerStudent(): void {
        // 注册学生表单
        let registerStudentForm: RegisterStudentForm = new RegisterStudentForm(
            this.studentName,
            getYear(this.studentYear),
            this.studentGender,
            this.researchId
        )
        // 发起请求
        this.studentService.registerStudent(registerStudentForm).subscribe(response => {
            console.log(response);
            if(response.body == true) {
                this.messageService.success('学生注册成功');
                this.closeDrawer();
                // TODO: 刷新页面
            }
        })
    }

    // 查询学生信息
    queryStudent(studentId: number): void {
        // 发起请求
        this.studentService.queryStudent(studentId).subscribe(response => {
            console.log(response)
            if(response.code == 200) {
                this.studentName = response.body.studentName;
                this.studentYear = response.body.studentYear;
                this.studentGender = response.body.studentGender;
                this.researchId = response.body.researchId;
            }
        })
    }

    // 修改学生信息
    updateStudent(): void {
        let updateStudentForm: UpdateStudentForm = new UpdateStudentForm(
            this.studentId,
            this.studentGender,
            this.researchId
        )

        console.log(updateStudentForm);

        // 发起请求
        this.studentService.updateStudent(updateStudentForm).subscribe(response => {
            console.log(response);
            if(response.code == 200 && response.body == true) {
                this.messageService.success('更新学生信息成功!');
            }
            else {
                this.messageService.error('更新学生信息失败!');
            }
            this.closeDrawer();
        })
    }

    // 打开抽屉
    openDrawer(studentId: number): void {
        this.drawerVisible = true;
        if(studentId == 0) {
            this.isRegister = true;
            this.drawerTitle = "注册学生";
        }
        else {
            this.isRegister = false;
            this.drawerTitle = "更新学生";
            this.studentId = studentId;
            this.queryStudent(studentId);
        }
    }

    // 关闭抽屉
    closeDrawer(): void {
        this.drawerVisible = false;
        // 清空数据
        this.researchId = 0;
        this.studentName = "";
        this.studentYear = 0;
        this.studentGender = 0;
    }

}
