import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {QueryCompleteListForm} from "../form/query-complete-list-form";

@Injectable({providedIn: 'root'})
export class CompleteService {

    API_URL: string = "http://127.0.0.1:8080";

    constructor(private http: HttpClient) {
    }

    // 查询完成详情
    queryComplete(completeId: number): Observable<any> {
        return this.http.get<any>(this.API_URL + "/complete?completeId=" + completeId);
    }

    // 查询完成列表
    queryCompleteList(form: QueryCompleteListForm): Observable<any> {
        return this.http.post<any>(this.API_URL + "/complete/list", form);
    }

}
