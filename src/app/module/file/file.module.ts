import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import {FileFormComponent} from "../../component/file/file-form/file-form.component";
import {FileListComponent} from "../../component/file/file-list/file-list.component";

import {FileRoutingModule} from './file-routing.module';

// 通用
import {NzButtonModule} from 'ng-zorro-antd/button';
import {NzIconModule} from "ng-zorro-antd/icon";
import {NzTypographyModule} from 'ng-zorro-antd/typography';
// 布局
import {NzGridModule} from 'ng-zorro-antd/grid';
import {NzDividerModule} from 'ng-zorro-antd/divider';
// 导航
import {NzPaginationModule} from "ng-zorro-antd/pagination";
// 数据录入
import {NzFormModule} from "ng-zorro-antd/form";
import {NzInputModule} from "ng-zorro-antd/input";
import {NzSelectModule} from "ng-zorro-antd/select";
import {NzUploadModule} from 'ng-zorro-antd/upload';
// 数据展示
import {NzTableModule} from "ng-zorro-antd/table";
// 反馈
import {NzDrawerModule} from 'ng-zorro-antd/drawer';
import {NzMessageModule} from "ng-zorro-antd/message";


@NgModule({
    declarations: [
        FileFormComponent,
        FileListComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        FileRoutingModule,
        NzButtonModule,
        NzIconModule,
        NzTypographyModule,
        NzGridModule,
        NzDividerModule,
        NzPaginationModule,
        NzFormModule,
        NzInputModule,
        NzSelectModule,
        NzUploadModule,
        NzTableModule,
        NzDrawerModule,
        NzMessageModule,
        ReactiveFormsModule
    ]
})
export class FileModule {
}
