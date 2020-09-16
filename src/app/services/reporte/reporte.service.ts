import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { ReporteDto } from "../../models/dtos/ReporteDto";

@Injectable({
  providedIn: "root",
})
export class ReporteService {
  private apiUrl = "http://localhost:3003/responsable-api/v1"; // URL to web api del servidor

  constructor(private router: Router, private http: HttpClient) {}

  public getProveedores(): Observable<any> {
    return this.http.get<ReporteDto>(`${this.apiUrl}/proveedor/proveedores`);
  }
}