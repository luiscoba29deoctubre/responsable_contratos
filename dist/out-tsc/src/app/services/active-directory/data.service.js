var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { MsalUserService } from "./msaluser.service";
import { environment } from "../../../environments/environment";
let DataService = class DataService {
    constructor(http, msalService) {
        this.http = http;
        this.msalService = msalService;
        this.url = environment.baseUrl;
        this.httpOptions = {
            headers: new HttpHeaders({
                "Content-Type": "application/json",
            }),
        };
    }
    getEmployees() {
        this.httpOptions = {
            headers: new HttpHeaders({
                "Content-Type": "application/json",
                Authorization: "Bearer " + this.msalService.GetAccessToken(),
            }),
        };
        console.log(this.msalService.clientApplication.getAllUsers());
        return this.http.get(this.url, this.httpOptions).pipe((response) => {
            return response;
        });
    }
    getName() {
        console.log(this.msalService.clientApplication.getUser());
        return this.msalService.clientApplication.getUser().name;
    }
    getEmail() {
        return this.msalService.clientApplication.getUser().displayableId;
    }
    logout() {
        this.msalService.logout();
    }
};
DataService = __decorate([
    Injectable({
        providedIn: "root",
    }),
    __metadata("design:paramtypes", [HttpClient, MsalUserService])
], DataService);
export { DataService };
//# sourceMappingURL=data.service.js.map