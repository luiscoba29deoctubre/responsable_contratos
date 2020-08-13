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
let ApiService = class ApiService {
    constructor(http) {
        this.http = http;
        this.ChuckUrl = "https://192.168.29.4:4431/bus29/ServiciosSeguridades"; // URL to web api
        this.data = {
            ServiciosSeguridades: {
                ValidarUsuario: {
                    meConsulta: {
                        LoginUsuario: "fguaman",
                    },
                },
            },
        };
    }
    // ----------------------------------------------------------------
    getFrase() {
        return this.http.get(this.ChuckUrl);
    }
    getCountry() {
        const httpOptions = {
            headers: new HttpHeaders({
                "Content-Type": "application/json",
                aplicacioncliente: "Canal29",
                nombreservicio: "ServiciosSeguridades",
                aplicacionservidor: "Denarius",
                nombreClase: "ValidarUsuario",
                rejectUnauthorized: "false",
            }),
            body: this.data,
        };
        let asdf = this.http.get(this.ChuckUrl, httpOptions);
        return asdf;
    }
};
ApiService = __decorate([
    Injectable({
        providedIn: "root",
    }),
    __metadata("design:paramtypes", [HttpClient])
], ApiService);
export { ApiService };
//# sourceMappingURL=api.service.js.map