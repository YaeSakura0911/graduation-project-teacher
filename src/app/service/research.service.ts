import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable} from "rxjs";

import { QueryResearchListForm } from "../form/query-research-list-form";
import { QueryStudentListForm } from "../form/query-student-list-form";
import { UpdateResearchForm } from "../form/update-research-form";

@Injectable({ providedIn: 'root' })
export class ResearchService {

    API_URL = "http://127.0.0.1:8080";

    constructor(private httpClient: HttpClient) { }

    // 创建研究
    createResearch(createResearchForm: Object): Observable<any> {
        return this.httpClient.post<any>(this.API_URL + "/research", createResearchForm);
    }

    // 删除研究
    deleteResearch(researchId: number): Observable<any> {
        return this.httpClient.delete<any>(this.API_URL + "/research?researchId=" + researchId);
    }

    // 更新研究信息
    updateResearch(updateResearchForm: UpdateResearchForm): Observable<any> {
        return this.httpClient.put<any>(this.API_URL + "/research", updateResearchForm);
    }

    // 查询研究详情
    queryResearchDetail(researchId: number): Observable<any> {
        return this.httpClient.get<any>(this.API_URL + "/research?researchId=" + researchId);
    }

    // 查询研究列表
    queryResearchList(queryResearchListForm: QueryResearchListForm): Observable<any> {
        return this.httpClient.post<any>(this.API_URL + "/research/list", queryResearchListForm);
    }

    // 查询研究学生
    queryResearchStudent(queryStudentListForm: QueryStudentListForm): Observable<any> {
        return this.httpClient.post<any>(this.API_URL + "/research/student", queryStudentListForm);
    }

    // // 查询研究任务
    // queryResearchTask(researchId: number): Observable<any> {
    //     return this.httpClient.get<any>(this.API_URL + "/research/task?researchId=" + researchId);
    // }
}
