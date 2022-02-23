import {Component} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {filter, Observable} from 'rxjs';
import {StorageUtil} from "./util/storage.util";


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

    showNavbar: boolean = true;
    userName: string = "";

    constructor(
        private router: Router,
        private storageUtil: StorageUtil
    ) {
        // 监听路由变化
        (this.router.events.pipe(filter(event => event instanceof NavigationEnd)) as Observable<NavigationEnd>).subscribe(router => {
            console.log(router);
            if (router.url == "/user/login" || router.url == "/user/register") {
                this.showNavbar = false;
            } else {
                this.showNavbar = true;
                this.userName = storageUtil.get("auth").teacherName;
            }
        })
    }

    // 用户登出
    logout() {
        this.storageUtil.remove("auth");
        this.router.navigateByUrl("/user/login");
    }
}
