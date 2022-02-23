import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {QueryFileListForm} from "../form/query-file-list-form";

@Injectable({providedIn: 'root'})
export class FileService {

    constructor(private http: HttpClient) {
    }

    deleteFile(fileName: string): Observable<any> {
        return this.http.delete("/file?fileName=" + fileName);
    }

    queryFileList(form: QueryFileListForm): Observable<any> {
        return this.http.post("/file/list", form);
    }

    uploadFile(formData: FormData): Observable<any> {
        return this.http.post("/file", formData);
    }
}
