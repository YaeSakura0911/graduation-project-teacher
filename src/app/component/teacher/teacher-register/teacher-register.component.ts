import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { differenceInCalendarDays, getYear } from 'date-fns';

import { NzMessageService } from 'ng-zorro-antd/message';
import { TeacherService } from 'src/app/service/teacher.service';

@Component({
    selector: 'app-teacher-register',
    templateUrl: './teacher-register.component.html',
    styleUrls: ['./teacher-register.component.scss']
})
export class TeacherRegisterComponent implements OnInit {

    today: Date = new Date();
    disabledDate = (current: Date): boolean => differenceInCalendarDays(current, this.today) > 0;
    registerForm: FormGroup = this.formBuilder.group({
        teacherName: [null, Validators.required],
        teacherGender: [null, Validators.required],
        teacherYear: [null, Validators.required],
        teacherTelephone: [null],
        teacherEmail: [null, Validators.email],
        teacherPassword: [null, Validators.required],
        checkPassword: [null, Validators.required]
    })

    constructor(
        private formBuilder: FormBuilder,
        private teacherService: TeacherService,
        private messageService: NzMessageService,
        private router: Router
    ) { }

    ngOnInit(): void { }

    // 教师注册
    registerTeacher(): void {
        if (this.registerForm.valid) {
            this.registerForm.patchValue({ teacherYear: getYear(this.registerForm.value['teacherYear']).toString() })
            // 发起注册请求
            console.log(this.registerForm.value);
            this.teacherService.registerTeacher(this.registerForm.value).subscribe(response => {
                console.log(response)
                if(response.body == true) {
                    this.messageService.create('success', '注册成功!');
                    // 跳转去登录页面
                    this.router.navigateByUrl("/user/login");
                }
                else {
                    this.messageService.create('error', '注册失败!');
                }
            })
        }
        else {
            Object.values(this.registerForm.controls).forEach(control => {
                if (control.invalid) {
                    control.markAsDirty();
                    control.updateValueAndValidity();
                }
            })
        }
    }

}
