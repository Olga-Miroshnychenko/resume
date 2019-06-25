import { Injectable } from '@angular/core';
import { JwtHelperService } from "@auth0/angular-jwt";

@Injectable({
  providedIn: 'root'
})
export class GlobalAuthService {
  private jwtHelper: JwtHelperService = new JwtHelperService();
  constructor() { }
  public static get token() {
    return localStorage.getItem('5720386695.aa219f5.5c5bb6dacf8a4df2a6b7c34561e815e2');
  }
}
