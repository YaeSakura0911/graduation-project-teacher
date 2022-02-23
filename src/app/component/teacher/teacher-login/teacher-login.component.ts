import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

import {NzMessageService} from 'ng-zorro-antd/message';

import {TeacherService} from 'src/app/service/teacher.service';
import {StorageUtil} from "../../../util/storage.util";

@Component({
    selector: 'app-teacher-login',
    templateUrl: './teacher-login.component.html',
    styleUrls: ['./teacher-login.component.scss']
})
export class TeacherLoginComponent {

    loginTeacherForm: FormGroup = this.formBuilder.group({
        teacherNo: [null, Validators.required],
        teacherPassword: [
            null, [
                Validators.required,
                Validators.minLength(6),
                Validators.maxLength(20)
            ]
        ]
    })

    constructor(
        private formBuilder: FormBuilder,
        private teacherService: TeacherService,
        private messageService: NzMessageService,
        private router: Router,
        private storageUtil: StorageUtil
    ) {
    }

    // 教师登录
    loginTeacher(): void {
        console.log("LoginTeacherForm", this.loginTeacherForm.value);
        // 发起登录请求
        this.teacherService.loginTeacher(this.loginTeacherForm.value).subscribe(response => {
            console.log(response)
            if (response.code == 200 && response.body != null) {
                // window.localStorage.setItem('teacherId', response.body.teacherId);
                // window.localStorage.setItem('teacherName', response.body.teacherName);
                this.storageUtil.set("auth", {
                    teacherId: response.body.teacherId,
                    teacherName: response.body.teacherName
                });
                this.messageService.success('登录成功!');
                this.router.navigateByUrl("/research");
            } else {
                this.messageService.error('登录失败!');
            }
        })
    }

}
