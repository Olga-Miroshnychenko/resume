import {HttpHandler, HttpInterceptor, HttpRequest, HttpEvent} from "@angular/common/http";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {map} from "rxjs/operators";
import { GlobalAuthService } from "../common/global-auth.service";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private globalAuth: GlobalAuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    req = req.clone({
      setHeaders: {
        // 'x-access-token': `5720386695.1677ed0.4c31a6986adc4c408ec332c35bbc72a3`,
        // 'Access-Control-Allow-Credentials': 'true',
        // 'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
        // 'Access-Control-Allow-Methods': 'GET',
      }
    });
    return next.handle(req).pipe(
      map((event: HttpEvent<any>) => {
        return event;

      })
    );
  }
}
