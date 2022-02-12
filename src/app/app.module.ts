import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {registerLocaleData} from '@angular/common';
import zh from '@angular/common/locales/zh';

import {AppComponent} from './app.component';

import {AppRoutingModule} from './app-routing.module';

import {NZ_I18N, zh_CN} from 'ng-zorro-antd/i18n';

// 布局
import {NzGridModule} from 'ng-zorro-antd/grid';
import {NzLayoutModule} from 'ng-zorro-antd/layout';
// 导航
import {NzBreadCrumbModule} from 'ng-zorro-antd/breadcrumb';
import {NzDropDownModule} from 'ng-zorro-antd/dropdown';
import {NzMenuModule} from 'ng-zorro-antd/menu';
// 数据展示
import {NzAvatarModule} from 'ng-zorro-antd/avatar';
import {ApiInterceptor} from "./interceptor/api.interceptor";

registerLocaleData(zh);

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
        BrowserAnimationsModule,
        NzGridModule,
        NzLayoutModule,
        NzBreadCrumbModule,
        NzDropDownModule,
        NzMenuModule,
        NzAvatarModule
    ],
    providers: [
        {provide: NZ_I18N, useValue: zh_CN},
        {provide: HTTP_INTERCEPTORS, useClass: ApiInterceptor, multi: true}
    ],
    bootstrap: [AppComponent]
})

export class AppModule {
}
