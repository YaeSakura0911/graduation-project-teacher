import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentFormComponent } from 'src/app/component/student/student-form/student-form.component';
import { StudentListComponent } from 'src/app/component/student/student-list/student-list.component';

import { StudentRoutingModule } from './student-routing.module';

// 通用
import { NzButtonModule } from 'ng-zorro-antd/button';
// 布局
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzDividerModule } from 'ng-zorro-antd/divider';
// 数据录入
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';
// 数据展示
import { NzTableModule } from 'ng-zorro-antd/table';
// 反馈
import { NzDrawerModule } from 'ng-zorro-antd/drawer';

@NgModule({
    declarations: [
        StudentFormComponent,
        StudentListComponent
    ],
    imports: [
        CommonModule,
        StudentRoutingModule,
        NzButtonModule,
        NzGridModule,
        NzDividerModule,
        NzCheckboxModule,
        NzDatePickerModule,
        NzFormModule,
        NzInputModule,
        NzSelectModule,
        NzTableModule,
        NzDrawerModule
    ],
    exports: [
        StudentFormComponent
    ]
})

export class StudentModule { }
