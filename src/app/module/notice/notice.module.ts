import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import {NoticeDetailComponent} from "../../component/notice/notice-detail/notice-detail.component";
import {NoticeFormComponent} from "../../component/notice/notice-form/notice-form.component";
import {NoticeListComponent} from "../../component/notice/notice-list/notice-list.component";

import {NoticeRoutingModule} from "./notice-routing.module";

// 通用
import {NzButtonModule} from 'ng-zorro-antd/button';
import {NzTypographyModule} from "ng-zorro-antd/typography";
// 布局
import {NzDividerModule} from 'ng-zorro-antd/divider';
import {NzGridModule} from 'ng-zorro-antd/grid'
// 导航
import {NzPaginationModule} from 'ng-zorro-antd/pagination';
// 数据录入
import {NzDatePickerModule} from "ng-zorro-antd/date-picker";
import {NzFormModule} from "ng-zorro-antd/form";
import {NzInputModule} from "ng-zorro-antd/input";
import {NzSelectModule} from 'ng-zorro-antd/select';
// 数据展示
import {NzBadgeModule} from 'ng-zorro-antd/badge';
import {NzDescriptionsModule} from "ng-zorro-antd/descriptions";
import {NzTableModule} from 'ng-zorro-antd/table';
// 反馈
import {NzDrawerModule} from "ng-zorro-antd/drawer";
import {NzMessageModule} from "ng-zorro-antd/message";
import {NzModalModule} from "ng-zorro-antd/modal";
import {NzPopconfirmModule} from "ng-zorro-antd/popconfirm";
import {NzIconModule} from "ng-zorro-antd/icon";

@NgModule({
    declarations: [
        NoticeDetailComponent,
        NoticeFormComponent,
        NoticeListComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        NoticeRoutingModule,
        NzButtonModule,
        NzTypographyModule,
        NzDividerModule,
        NzGridModule,
        NzPaginationModule,
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
        NzPopconfirmModule,
        NzIconModule
    ]
})
export class NoticeModule { }
