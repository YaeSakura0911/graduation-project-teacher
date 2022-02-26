import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {CreateNoticeForm} from "../form/create-notice.form";
import {UpdateNoticeForm} from "../form/update-notice.form";

@Injectable({providedIn: 'root'})
export class NoticeService {

    constructor(private http: HttpClient) {
    }

    /**
     * 创建通知
     * @param form
     */
    createNotice(form: CreateNoticeForm): Observable<any> {
        return this.http.post("/notice", form);
    }

    /**
     * 更新通知详情
     * @param form
     */
    updateNotice(form: UpdateNoticeForm): Observable<any> {
        return this.http.put("/notice", form);
    }

    /**
     * 删除通知
     */
    deleteNotice(noticeId: number): Observable<any> {
        return this.http.delete("/notice?noticeId=" + noticeId);
    }

    /**
     * 查询通知
     */
    queryNotice(noticeId: number): Observable<any> {
        return this.http.get("/notice?noticeId=" + noticeId);
    }

    /**
     * 查询通知列表
     */
    queryNoticeList(form: Object): Observable<any> {
        return this.http.post("/notice/list", form);
    }
}
