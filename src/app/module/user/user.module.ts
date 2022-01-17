import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// 通用
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
// 布局
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
// 数据录入
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';

import { UserInfoComponent } from 'src/app/component/user/user-info/user-info.component';
import { UserLoginComponent } from 'src/app/component/user/user-login/user-login.component';
import { UserSignupComponent } from 'src/app/component/user/user-signup/user-signup.component';

import { UserRoutingModule } from './user.routing.module';

@NgModule({
    declarations: [
        UserInfoComponent,
        UserLoginComponent,
        UserSignupComponent
    ],
    imports: [
        CommonModule,
        UserRoutingModule,
        NzButtonModule,
        NzIconModule,
        NzTypographyModule,
        NzDividerModule,
        NzLayoutModule,
        NzDatePickerModule,
        NzFormModule,
        NzInputModule,
        NzSelectModule
    ]
})
export class UserModule { }
