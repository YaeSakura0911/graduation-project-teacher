import {Component, EventEmitter, OnInit, Output} from '@angular/core';

import {differenceInCalendarDays, getYear} from 'date-fns';

import {NzMessageService} from 'ng-zorro-antd/message';
import {ResearchService} from 'src/app/service/research.service';
import {StudentService} from 'src/app/service/student.service';

import {Research} from 'src/app/entity/research.entity';
import {UpdateStudentForm} from 'src/app/form/update-student-form';
import {QueryResearchListForm} from 'src/app/form/query-research-list-form';
import {FormBuilder, Validators} from "@angular/forms";
import {StorageUtil} from "../../../util/storage.util";

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
    studentYear: Date | null = null;
    studentGender: number = 0;
    researchList: Research[] = [];
    today: Date = new Date();
    disabledDate = (current: Date): boolean => differenceInCalendarDays(current, this.today) > 0;

    @Output()
    refreshPage = new EventEmitter<any>();

    shareStudentForm = this.formBuilder.group({
        studentId: [null],
        studentName: [null, [
            Validators.required,
            Validators.pattern("^[\u4e00-\u9fa5]+(·[\u4e00-\u9fa5]+)*$"),
            Validators.maxLength(10)
        ]],
        studentYear: [null, Validators.required],
        studentGender: [null, Validators.required],
        researchId: [null, Validators.required],
    })

    constructor(
        private formBuilder: FormBuilder,
        private messageService: NzMessageService,
        private researchService: ResearchService,
        private studentService: StudentService,
        private storageUtil: StorageUtil
    ) {
    }

    // 页面初始化
    ngOnInit(): void {
        this.teacherId = this.storageUtil.get("auth").teacherId;
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

    /**
     * 学生注册
     */
    registerStudent(): void {
        this.shareStudentForm.patchValue(
            {studentYear: getYear(this.shareStudentForm.value['studentYear']).toString()}
        );
        // 发起请求
        this.studentService.registerStudent(this.shareStudentForm.value).subscribe(response => {
            console.log("registerStudent()", response);
            if (response.code == 200 && response.body == true) {
                this.messageService.success('学生注册成功');
            }
            else {
                this.messageService.error("学生注册失败！");
            }
            this.refreshPage.emit();
            this.closeDrawer();
        })
    }

    // 查询学生信息
    queryStudent(studentId: number): void {
        // 发起请求
        this.studentService.queryStudent(studentId).subscribe(response => {
            console.log(response)
            if (response.code == 200) {
                this.shareStudentForm.patchValue({
                    studentName: response.body.studentName,
                    studentYear: response.body.studentYear,
                    studentGender: response.body.studentGender,
                    researchId: response.body.researchId
                })
            }
        })
    }

    /**
     * 修改学生信息
     */
    updateStudent(): void {
        // 发起请求
        this.studentService.updateStudent(this.shareStudentForm.value).subscribe(response => {
            console.log(response);
            if (response.code == 200 && response.body == true) {
                this.messageService.success('更新学生信息成功!');
            } else {
                this.messageService.error('更新学生信息失败!');
            }
            this.refreshPage.emit();
            this.closeDrawer();
        })
    }

    // 打开抽屉
    openDrawer(studentId: number): void {
        this.drawerVisible = true;
        if (studentId == 0) {
            this.isRegister = true;
            this.shareStudentForm.controls['studentName'].enable();
            this.shareStudentForm.controls['studentYear'].enable();
            this.drawerTitle = "注册学生";
        } else {
            this.isRegister = false;
            this.shareStudentForm.controls['studentName'].disable();
            this.shareStudentForm.controls['studentYear'].disable();
            this.drawerTitle = "更新学生";
            this.shareStudentForm.patchValue({studentId: studentId});
            this.queryStudent(studentId);
        }
    }

    // 关闭抽屉
    closeDrawer(): void {
        this.drawerVisible = false;
        // 清空数据
        this.shareStudentForm.reset();
    }

}
