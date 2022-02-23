import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

// 通用
import {NzButtonModule} from 'ng-zorro-antd/button';
import {NzIconModule} from 'ng-zorro-antd/icon';
import {NzTypographyModule} from 'ng-zorro-antd/typography';
// 布局
import {NzDividerModule} from 'ng-zorro-antd/divider';
import {NzLayoutModule} from 'ng-zorro-antd/layout';
// 数据录入
import {NzDatePickerModule} from 'ng-zorro-antd/date-picker';
import {NzFormModule} from 'ng-zorro-antd/form';
import {NzInputModule} from 'ng-zorro-antd/input';
import {NzSelectModule} from 'ng-zorro-antd/select';
// 反馈
import {NzMessageModule} from 'ng-zorro-antd/message';

import {TeacherInfoComponent} from 'src/app/component/teacher/teacher-info/teacher-info.component';
import {TeacherLoginComponent} from 'src/app/component/teacher/teacher-login/teacher-login.component';
import {TeacherRegisterComponent} from 'src/app/component/teacher/teacher-register/teacher-register.component';

import {TeacherRoutingModule} from './teacher.routing.module';

@NgModule({
    declarations: [
        TeacherInfoComponent,
        TeacherLoginComponent,
        TeacherRegisterComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        TeacherRoutingModule,
        NzButtonModule,
        NzIconModule,
        NzTypographyModule,
        NzDividerModule,
        NzLayoutModule,
        NzDatePickerModule,
        NzFormModule,
        NzInputModule,
        NzSelectModule,
        NzMessageModule
    ]
})
export class TeacherModule {
}
