import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

// Task模块组件
import {TaskCompleteComponent} from "../../component/task/task-complete/task-complete.component";
import {TaskDetailComponent} from 'src/app/component/task/task-detail/task-detail.component';
import {TaskFormComponent} from 'src/app/component/task/task-form/task-form.component';
import {TaskListComponent} from 'src/app/component/task/task-list/task-list.component';
import {TaskMarkComponent} from "../../component/task/task-mark/task-mark.component";
import {TaskReleaseComponent} from "../../component/task/task-release/task-release.component";

// Task模块路由
import {TaskRoutingModule} from './task-routing.module';

// 通用
import {NzButtonModule} from 'ng-zorro-antd/button';
import {NzIconModule} from 'ng-zorro-antd/icon';
import {NzTypographyModule} from 'ng-zorro-antd/typography';
// 布局
import {NzDividerModule} from 'ng-zorro-antd/divider';
import {NzGridModule} from 'ng-zorro-antd/grid';
// 导航
import {NzPageHeaderModule} from 'ng-zorro-antd/page-header';
import {NzPaginationModule} from 'ng-zorro-antd/pagination';

// 数据录入
import {NzCheckboxModule} from "ng-zorro-antd/checkbox";
import {NzDatePickerModule} from 'ng-zorro-antd/date-picker';
import {NzFormModule} from 'ng-zorro-antd/form';
import {NzInputModule} from 'ng-zorro-antd/input';
import {NzSelectModule} from 'ng-zorro-antd/select';
// 数据展示
import {NzBadgeModule} from 'ng-zorro-antd/badge';
import {NzDescriptionsModule} from 'ng-zorro-antd/descriptions';
import {NzTableModule} from 'ng-zorro-antd/table';
// 反馈
import {NzDrawerModule} from 'ng-zorro-antd/drawer';
import {NzMessageModule} from 'ng-zorro-antd/message';
import {NzModalModule} from "ng-zorro-antd/modal";
import {NzPopconfirmModule} from 'ng-zorro-antd/popconfirm';

@NgModule({
    declarations: [
        TaskCompleteComponent,
        TaskDetailComponent,
        TaskFormComponent,
        TaskListComponent,
        TaskMarkComponent,
        TaskReleaseComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        TaskRoutingModule,
        NzButtonModule,
        NzIconModule,
        NzTypographyModule,
        NzDividerModule,
        NzGridModule,
        NzPageHeaderModule,
        NzPaginationModule,
        NzCheckboxModule,
        NzDatePickerModule,
        NzFormModule,
        NzInputModule,
        NzSelectModule,
        NzBadgeModule,
        NzDescriptionsModule,
        NzTableModule,
        NzDrawerModule,
        NzMessageModule,
        NzModalModule,
        NzPopconfirmModule
    ],
    exports: [
        TaskFormComponent,
        TaskDetailComponent,
        TaskReleaseComponent
    ]
})
export class TaskModule {
}
