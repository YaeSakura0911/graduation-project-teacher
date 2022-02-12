import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

import {QueryStudentListForm} from "../form/query-student-list-form";
import {RegisterStudentForm} from '../form/register-student-form';
import {UpdateStudentForm} from '../form/update-student-form';

@Injectable({providedIn: 'root'})
export class StudentService {

    constructor(private http: HttpClient) {
    }

    /**
     * 删除学生
     * @param studentId
     */
    deleteStudent(studentId: number): Observable<any> {
        return this.http.delete("/student?studentId=" + studentId);
    }

    /**
     * 查询学生
     * @param studentId
     */
    queryStudent(studentId: number): Observable<any> {
        return this.http.get("/student?studentId=" + studentId);
    }

    /**
     * 查询学生列表
     * @param form
     */
    queryStudentList(form: QueryStudentListForm): Observable<any> {
        return this.http.post("/student/list", form);
    }

    /**
     * 注册学生
     * @param form
     */
    registerStudent(form: RegisterStudentForm): Observable<any> {
        return this.http.post("/student/register", form);
    }

    /**
     * 更新学生
     * @param form
     */
    updateStudent(form: UpdateStudentForm): Observable<any> {
        return this.http.put("/student", form);
    }
}
