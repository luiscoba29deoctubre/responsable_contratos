import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import {BehaviorSubject, Observable,  throwError} from 'rxjs';

import { UserResponse, User } from "../models/user.interface";
import { ApiEndpoints } from "./api.endpoints";
import { map } from "rxjs/internal/operators/map";
import { catchError } from "rxjs/internal/operators";
import { JwtHelperService } from "@auth0/angular-jwt";

const helper = new JwtHelperService();
@Injectable({
  providedIn: "root",
})
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient, private endpoints: ApiEndpoints) {}

  get isLogged(): Observable<boolean> {
    return this.loggedIn.asObservable();
  }

  public login(authData: User): Observable<UserResponse> {
    return this.http
      .post<UserResponse>(this.endpoints.url_api_auth_login, authData)
      .pipe(
        map((res: UserResponse) => {
          console.log("resss ", res);
          this.saveToken(res.token);
          this.loggedIn.next(true);
          return res;
        }),
        catchError((err) => this.handlerError(err))
      );
  }
  logout(): void {
    localStorage.removeItem("token");
    this.loggedIn.next(false);
  }
  private checkToken(): void {
    const userToken = localStorage.getItem("token");
    const isExpired = helper.isTokenExpired(userToken);
    console.log("isExpiredddddd", isExpired);
    isExpired ? this.logout() : this.loggedIn.next(true);
  }

  private saveToken(token: string): void {
    localStorage.setItem("token", token);
  }
  private handlerError(err): Observable<never> {
    let errorMessage = "An error occured retrieving data";
    if (err) {
      errorMessage = `Error:code ${err.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
