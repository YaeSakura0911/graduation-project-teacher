import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {StorageUtil} from "../util/storage.util";

@Injectable({providedIn: "root"})
export class AuthGuard implements CanActivate {

    constructor(
        private router: Router,
        private storageUtil: StorageUtil) {
    }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        // 读取权限信息
        if (this.storageUtil.get("auth") == null) {
            this.router.navigateByUrl("/user/login");
        }
        // 刷新保存时间
        this.storageUtil.refreshTime("auth");
        return true;
    }

}
