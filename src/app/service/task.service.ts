import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {CreateTaskForm} from "../form/create-task-form";
import {QueryTaskListForm} from "../form/query-task-list-form";
import {UpdateTaskForm} from "../form/update-task-form";

@Injectable({providedIn: 'root'})
export class TaskService {

    API_URL: string = "http://127.0.0.1:8080";

    constructor(private http: HttpClient) {
    }

    // 创建任务
    createTask(createTaskForm: CreateTaskForm): Observable<any> {
        return this.http.post<any>(this.API_URL + "/task", createTaskForm);
    }

    // 删除任务
    deleteTask(taskId: number): Observable<any> {
        return this.http.delete<any>(this.API_URL + "/task?taskId=" + taskId);
    }

    // 更新任务
    updateTask(updateTaskForm: UpdateTaskForm): Observable<any> {
        return this.http.put<any>(this.API_URL + "/task", updateTaskForm);
    }

    // 查询任务详情
    queryTask(taskId: number): Observable<any> {
        return this.http.get<any>(this.API_URL + "/task?taskId=" + taskId);
    }

    // 查询任务列表
    queryTaskList(queryTaskListForm: QueryTaskListForm): Observable<any> {
        return this.http.post<any>(this.API_URL + "/task/list", queryTaskListForm);
    }
}
