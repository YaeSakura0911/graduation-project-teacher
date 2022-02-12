import {Injectable} from "@angular/core";
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable()
export class ApiInterceptor implements HttpInterceptor {

    API_URL: string = "http://127.0.0.1:8080";

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const request = req.clone({url: this.API_URL + req.url})
        return next.handle(request);
    }
}
