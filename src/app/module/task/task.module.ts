import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Task模块组件
import { TaskDetailComponent } from 'src/app/component/task/task-detail/task-detail.component';
import { TaskFormComponent } from 'src/app/component/task/task-form/task-form.component';
import { TaskListComponent } from 'src/app/component/task/task-list/task-list.component';

// Task模块路由
import { TaskRoutingModule } from './task-routing.module';

// 通用
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
// 布局
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzGridModule } from 'ng-zorro-antd/grid';
// 数据录入
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';
// 数据展示
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzTableModule } from 'ng-zorro-antd/table';
// 反馈
import { NzDrawerModule } from 'ng-zorro-antd/drawer';


@NgModule({
    declarations: [
        TaskDetailComponent,
        TaskFormComponent,
        TaskListComponent,
    ],
    imports: [
        CommonModule,
        TaskRoutingModule,
        NzButtonModule,
        NzIconModule,
        NzTypographyModule,
        NzDividerModule,
        NzGridModule,
        NzFormModule,
        NzInputModule,
        NzSelectModule,
        NzBadgeModule,
        NzTableModule,
        NzDrawerModule
    ],
    exports: [
        TaskFormComponent
    ]
})
export class TaskModule { }
