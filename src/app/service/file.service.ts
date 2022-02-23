import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({providedIn: 'root'})
export class FileService {

    constructor(private http: HttpClient) {
    }

    uploadFile(formData: FormData): Observable<any> {
        return this.http.post("/file", formData);
    }
}
