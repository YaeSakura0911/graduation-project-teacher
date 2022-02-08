import { Component, OnInit } from '@angular/core';

import { NzMessageService } from 'ng-zorro-antd/message';
import { UpdateTeacherForm } from 'src/app/form/update-teacher-form';
import { TeacherService } from 'src/app/service/teacher.service';

@Component({
    selector: 'app-teacher-info',
    templateUrl: './teacher-info.component.html',
    styleUrls: ['./teacher-info.component.scss']
})
export class TeacherInfoComponent implements OnInit {

    teacherId: string | number = 0;
    teacherTelephone: string = "";
    teacherEmail: string = "";
    teacherGender: number = 0;

    constructor(
        private teacherService: TeacherService,
        private messageService: NzMessageService
    ) { }

    // 页面初始化
    ngOnInit(): void {
        this.teacherId = localStorage.getItem('teacherId') || 0;
        this.queryTeacher(this.teacherId);
    }

    // 查询教师信息
    queryTeacher(teacherId: string | number): void {
        this.teacherService.queryTeacher(teacherId).subscribe(response => {
            console.log(response)
            if (response.code == 200) {
                this.teacherTelephone = response.body.teacherTelephone;
                this.teacherEmail = response.body.teacherEmail;
                this.teacherGender = response.body.teacherGender;
            }
        });
    }

    // 更新教师信息
    updateTeacher(): void {
        let updateTeacherForm: UpdateTeacherForm = new UpdateTeacherForm(
            this.teacherId,
            this.teacherTelephone,
            this.teacherEmail,
            this.teacherGender
        )
        // 发起请求
        this.teacherService.updateTeacher(updateTeacherForm).subscribe(response => {
            if (response.body == true) {
                this.messageService.success('更改个人信息成功!');
            }
            else {
                this.messageService.error('修改个人信息失败!');
            }
            this.queryTeacher(this.teacherId);
        })
    }

}
