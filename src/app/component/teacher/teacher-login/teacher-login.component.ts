import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { NzMessageService } from 'ng-zorro-antd/message';

import { TeacherService } from 'src/app/service/teacher.service';

@Component({
    selector: 'app-teacher-login',
    templateUrl: './teacher-login.component.html',
    styleUrls: ['./teacher-login.component.scss']
})
export class TeacherLoginComponent {

    loginTeacherForm: FormGroup = this.formBuilder.group({
        teacherNo: [null, Validators.required],
        teacherPassword: [null, Validators.required]
    })

    constructor(
        private formBuilder: FormBuilder,
        private teacherService: TeacherService,
        private messageService: NzMessageService,
        private router: Router
    ) { }

    // 教师登录
    loginTeacher(): void {
        if (this.loginTeacherForm.valid) {
            // 发起登录请求
            this.teacherService.loginTeacher(this.loginTeacherForm.value).subscribe(response => {
                console.log(response)
                if (response.body != null) {
                    window.localStorage.setItem('teacherId', response.body.teacherId);
                    window.localStorage.setItem('teacherName', response.body.teacherName);
                    this.messageService.success('登录成功!');
                    this.router.navigateByUrl("/research");
                }
                else {
                    this.messageService.error('登录失败!');
                }
            })
        }
    }

}
