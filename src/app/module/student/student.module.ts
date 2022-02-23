import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {StudentDetailComponent} from 'src/app/component/student/student-detail/student-detail.component';
import {StudentFormComponent} from 'src/app/component/student/student-form/student-form.component';
import {StudentListComponent} from 'src/app/component/student/student-list/student-list.component';

import {StudentRoutingModule} from './student-routing.module';

// 通用
import {NzButtonModule} from 'ng-zorro-antd/button';
import {NzTypographyModule} from 'ng-zorro-antd/typography';
// 布局
import {NzGridModule} from 'ng-zorro-antd/grid';
import {NzDividerModule} from 'ng-zorro-antd/divider';
// 导航
import {NzPaginationModule} from 'ng-zorro-antd/pagination';
// 数据录入
import {NzCheckboxModule} from 'ng-zorro-antd/checkbox';
import {NzDatePickerModule} from 'ng-zorro-antd/date-picker';
import {NzFormModule} from 'ng-zorro-antd/form';
import {NzInputModule} from 'ng-zorro-antd/input';
import {NzSelectModule} from 'ng-zorro-antd/select';
// 数据展示
import {NzDescriptionsModule} from 'ng-zorro-antd/descriptions';
import {NzTableModule} from 'ng-zorro-antd/table';
// 反馈
import {NzDrawerModule} from 'ng-zorro-antd/drawer';
import {NzMessageModule} from 'ng-zorro-antd/message';
import {NzPopconfirmModule} from 'ng-zorro-antd/popconfirm';

@NgModule({
    declarations: [
        StudentDetailComponent,
        StudentFormComponent,
        StudentListComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        StudentRoutingModule,
        NzButtonModule,
        NzTypographyModule,
        NzGridModule,
        NzDividerModule,
        NzPaginationModule,
        NzCheckboxModule,
        NzDatePickerModule,
        NzFormModule,
        NzInputModule,
        NzSelectModule,
        NzDescriptionsModule,
        NzTableModule,
        NzDrawerModule,
        NzMessageModule,
        NzPopconfirmModule
    ],
    exports: [
        StudentDetailComponent,
        StudentFormComponent
    ]
})

export class StudentModule {
}
