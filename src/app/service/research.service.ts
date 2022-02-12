import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {CreateResearchForm} from "../form/create-research-form";
import {QueryResearchListForm} from "../form/query-research-list-form";
import {QueryStudentListForm} from "../form/query-student-list-form";
import {QueryTaskListForm} from "../form/query-task-list-form";
import {UpdateResearchForm} from "../form/update-research-form";

@Injectable({providedIn: 'root'})
export class ResearchService {

    constructor(private http: HttpClient) {
    }

    /**
     * 创建研究
     * @param form
     */
    createResearch(form: CreateResearchForm): Observable<any> {
        return this.http.post("/research", form);
    }

    /**
     * 删除研究
     * @param researchId
     */
    deleteResearch(researchId: number): Observable<any> {
        return this.http.delete("/research?researchId=" + researchId);
    }

    /**
     * 查询研究
     * @param researchId
     */
    queryResearch(researchId: number): Observable<any> {
        return this.http.get("/research?researchId=" + researchId);
    }

    /**
     * 查询研究列表
     * @param form
     */
    queryResearchList(form: QueryResearchListForm): Observable<any> {
        return this.http.post("/research/list", form);
    }

    /**
     * 查询研究学生
     * @param form
     */
    // queryResearchStudent(form: QueryStudentListForm): Observable<any> {
    //     return this.http.post("/research/student", form);
    // }

    queryResearchTask(form: QueryTaskListForm): Observable<any> {
        return this.http.post("/research/task", form);
    }

    /**
     * 更新研究
     * @param form
     */
    updateResearch(form: UpdateResearchForm): Observable<any> {
        return this.http.put("/research", form);
    }
}
