import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {CreateTaskForm} from "../form/create-task-form";
import {QueryCompleteListForm} from "../form/query-complete-list-form";
import {QueryTaskListForm} from "../form/query-task-list-form";
import {UpdateCompleteForm} from "../form/update-complete-form";
import {UpdateTaskForm} from "../form/update-task-form";

@Injectable({providedIn: 'root'})
export class TaskService {

    constructor(private http: HttpClient) {
    }

    /**
     * 创建任务
     * @param form 创建任务表单
     */
    createTask(form: CreateTaskForm): Observable<any> {
        return this.http.post("/task", form);
    }

    /**
     * 删除任务
     * @param taskId 任务ID
     */
    deleteTask(taskId: number): Observable<any> {
        return this.http.delete("/task?taskId=" + taskId);
    }

    /**
     * 查询完成情况
     * @param completeId 完成情况ID
     */
    queryComplete(completeId: number): Observable<any> {
        return this.http.get("/task/complete?completeId=" + completeId);
    }

    /**
     * 查询完成情况列表
     * @param form 查询完成情况表单
     */
    queryCompleteList(form: QueryCompleteListForm): Observable<any> {
        return this.http.post("/task/complete/list", form);
    }

    /**
     * 查询任务
     * @param taskId 任务ID
     */
    queryTask(taskId: number): Observable<any> {
        return this.http.get("/task?taskId=" + taskId);
    }

    /**
     * 查询任务列表
     * @param form 查询任务列表表单
     */
    queryTaskList(form: QueryTaskListForm): Observable<any> {
        return this.http.post("/task/list", form);
    }

    /**
     * 更新完成情况
     * @param form 更新完成情况表单
     */
    updateComplete(form: UpdateCompleteForm): Observable<any> {
        return this.http.put("/task/complete", form);
    }

    /**
     * 更新任务
     * @param form 更新任务表单
     */
    updateTask(form: UpdateTaskForm): Observable<any> {
        return this.http.put("/task", form);
    }
}
