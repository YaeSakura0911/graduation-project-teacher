import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter, Observable } from 'rxjs';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

    showNavbar: boolean = true;
    userName: string = "";

    constructor(private router: Router) {
        // 监听路由变化
        (this.router.events.pipe(filter(event => event instanceof NavigationEnd)) as Observable<NavigationEnd>).subscribe(router => {
            console.log(router);
            if(router.url == "/user/login" || router.url == "user/register") {
                this.showNavbar = false;
            }
            else {
                this.showNavbar = true;
                this.userName = window.localStorage.getItem('teacherName') || "";
            }
        })
    }
    
    // 用户登出
    logout() {
        window.localStorage.removeItem('teacherId');
        window.localStorage.removeItem('teacherName');
        this.router.navigateByUrl("/user/login");
    }
}
