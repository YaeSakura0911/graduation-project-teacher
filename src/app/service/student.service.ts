import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RegisterStudentForm } from '../form/register-student-form';
import { UpdateStudentForm } from '../form/update-student-form';

@Injectable({
    providedIn: 'root'
})
export class StudentService {

    API_URL: string = "http://127.0.0.1:8080";

    constructor(private http: HttpClient) { }

    // 学生注册
    registerStudent(registerStudentForm: RegisterStudentForm): Observable<any> {
        return this.http.post<any>(this.API_URL + "/student/register", registerStudentForm);
    }

    // 学生删除
    deleteStudent(studentId: number): Observable<any> {
        return this.http.delete<any>(this.API_URL + "/student?studentId=" + studentId);
    }

    // 修改学生信息
    updateStudent(updateStudentForm: UpdateStudentForm): Observable<any> {
        return this.http.put<any>(this.API_URL + "/student", updateStudentForm);
    }

    // 学生登录
    loginStudent() {

    }

    // 查询学生列表
    queryStudentList(queryStudentListForm: object): Observable<any> {
        return this.http.post<any>(this.API_URL + "/student/list", queryStudentListForm);
    }

    // 查询学生详情
    queryStudent(studentId: number): Observable<any> {
        return this.http.get<any>(this.API_URL + "/student?studentId=" + studentId);
    }
}
