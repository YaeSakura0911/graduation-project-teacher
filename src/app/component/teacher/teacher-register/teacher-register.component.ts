import {Component} from '@angular/core';
import {FormBuilder, FormControl, Validator, Validators} from '@angular/forms';
import {Router} from '@angular/router';

import {differenceInCalendarDays, getYear} from 'date-fns';

import {NzMessageService} from 'ng-zorro-antd/message';
import {TeacherService} from 'src/app/service/teacher.service';

@Component({
    selector: 'app-teacher-register',
    templateUrl: './teacher-register.component.html',
    styleUrls: ['./teacher-register.component.scss']
})
export class TeacherRegisterComponent {

    today: Date = new Date();
    disabledDate = (current: Date): boolean => differenceInCalendarDays(current, this.today) > 0;
    confirmValidator = (control: FormControl): { [s: string]: boolean } => {
        if (!control.value) {
            return {error: true, required: true};
        } else if (control.value !== this.registerTeacherForm.controls['teacherPassword'].value) {
            return {confirm: true, error: true};
        }
        return {};
    }
    registerTeacherForm = this.formBuilder.group({
        teacherName: [
            null, [
                Validators.required,
                Validators.pattern("^[\\u4e00-\\u9fa5]+(·[\\u4e00-\\u9fa5]+)*$")
            ]
        ],
        teacherGender: [0],
        teacherYear: [null, Validators.required],
        teacherTelephone: [
            null, [
                Validators.minLength(11),
                Validators.maxLength(11)
            ]
        ],
        teacherEmail: [null, Validators.email],
        teacherPassword: [
            null, [
                Validators.required,
                Validators.minLength(6),
                Validators.maxLength(20)
            ]
        ],
        confirmPassword: [
            null, [
                Validators.required,
                this.confirmValidator
            ]
        ]
    })

    constructor(
        private formBuilder: FormBuilder,
        private teacherService: TeacherService,
        private messageService: NzMessageService,
        private router: Router
    ) {
    }

    // 教师注册
    registerTeacher(): void {
        this.registerTeacherForm.patchValue(
            {teacherYear: getYear(this.registerTeacherForm.value['teacherYear']).toString()}
        );
        console.log("RegisterTeacherForm", this.registerTeacherForm.value);
        // 发起注册请求
        this.teacherService.registerTeacher(this.registerTeacherForm.value).subscribe(response => {
            console.log("registerTeacher()", response);
            if (response.body == true) {
                this.messageService.create('success', '注册成功!');
                // 跳转去登录页面
                this.router.navigateByUrl("/user/login");
            } else {
                this.messageService.create('error', '注册失败!');
            }
            this.registerTeacherForm.reset();
        });
    }

}
