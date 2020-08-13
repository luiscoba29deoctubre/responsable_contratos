import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { MsalUserService } from "./msaluser.service";
import { Employee } from "./employee";
import { environment } from "../../../environments/environment";

@Injectable({
  providedIn: "root",
})
export class DataService {
  private url = environment.baseUrl;

  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
    }),
  };

  constructor(private http: HttpClient, private msalService: MsalUserService) {}

  getEmployees(): Observable<Employee[]> {
    this.httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: "Bearer " + this.msalService.GetAccessToken(),
      }),
    };
    console.log(this.msalService.clientApplication.getAllUsers());

    return this.http.get(this.url, this.httpOptions).pipe((response: any) => {
      return response;
    });
  }

  getName() {
    return this.msalService.clientApplication.getUser().name;
  }

  getEmail() {
    return this.msalService.clientApplication.getUser().displayableId;
  }

  public getCurrentUserInfo() {
    this.msalService.getCurrentUserInfo();
  }

  logout() {
    this.msalService.logout();
  }
}
