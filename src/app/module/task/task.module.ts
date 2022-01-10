import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// 通用
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
// 布局
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzGridModule } from 'ng-zorro-antd/grid';
// 数据展示
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzTableModule } from 'ng-zorro-antd/table';

import { TaskDetailComponent } from 'src/app/component/task/task-detail/task-detail.component';

import { TaskRoutingModule } from './task-routing.module';


@NgModule({
    declarations: [
        TaskDetailComponent
    ],
    imports: [
        CommonModule,
        TaskRoutingModule,
        NzIconModule,
        NzTypographyModule,
        NzDividerModule,
        NzGridModule,
        NzBadgeModule,
        NzTableModule
    ]
})
export class TaskModule { }
