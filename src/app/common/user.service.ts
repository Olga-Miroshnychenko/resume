import { Injectable } from '@angular/core';
import { environment } from "../../environments/environment";
import { GlobalAuthService } from "./global-auth.service";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";


declare let $: any;


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl: string = environment.apiUrl;

  constructor(
    private http: HttpClient,
    private globalAuth: GlobalAuthService,
  ) {

  }
  getImages(): Observable<any> {
    return this.http.get(`${this.apiUrl}/v1/users/5720386695/media/recent/?access_token=5720386695.aa219f5.5c5bb6dacf8a4df2a6b7c34561e815e2&count=6`);
  }
}


