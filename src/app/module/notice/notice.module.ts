import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";

import {NoticeListComponent} from "../../component/notice/notice-list/notice-list.component";

import {NoticeRoutingModule} from "./notice-routing.module";

// 通用
import {NzButtonModule} from 'ng-zorro-antd/button';
// 布局
import {NzDividerModule} from 'ng-zorro-antd/divider';
import {NzGridModule} from 'ng-zorro-antd/grid'
// 导航
import {NzPaginationModule} from 'ng-zorro-antd/pagination';
// 数据录入
import {NzInputModule} from "ng-zorro-antd/input";
import {NzSelectModule} from 'ng-zorro-antd/select';
// 数据展示
import {NzBadgeModule} from 'ng-zorro-antd/badge';
import {NzTableModule} from 'ng-zorro-antd/table';

@NgModule({
    declarations: [
        NoticeListComponent
    ],
    imports: [
        CommonModule,
        NoticeRoutingModule,
        NzButtonModule,
        NzDividerModule,
        NzGridModule,
        NzPaginationModule,
        NzInputModule,
        NzSelectModule,
        NzBadgeModule,
        NzTableModule
    ]
})
export class NoticeModule { }
