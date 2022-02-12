import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({providedIn: 'root'})
export class TeacherService {

    constructor(private httpClient: HttpClient) {
    }

    // 教师注册
    registerTeacher(registerTeacherForm: Object): Observable<any> {
        return this.httpClient.post<any>("/teacher/register", registerTeacherForm);
    }

    // 教师登录
    loginTeacher(loginTeacherForm: Object): Observable<any> {
        return this.httpClient.post<any>("/teacher/login", loginTeacherForm);
    }

    // 查询用户信息
    queryTeacher(teacherId: string | number): Observable<any> {
        return this.httpClient.get<any>("/teacher?teacherId=" + teacherId);
    }

    // 更新用户信息
    updateTeacher(updateTeacherForm: any): Observable<any> {
        return this.httpClient.put<any>("/teacher", updateTeacherForm);
    }
}
