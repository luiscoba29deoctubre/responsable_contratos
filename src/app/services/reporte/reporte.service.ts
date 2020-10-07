import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ReporteDto } from "../../models/dtos/ReporteDto";
import { ApiEndpoints } from "../api.endpoints";

@Injectable({
  providedIn: "root",
})
export class ReporteService {
  constructor(private http: HttpClient, private endpoints: ApiEndpoints) {}

  public getProveedoresSinCalificar(): Observable<any> {
    return this.http.get<ReporteDto>(this.endpoints.url_api_prov_sin_calificar);
  }

  public getProveedor(idProvider: number): Observable<any> {
    return this.http.get<any>(
      this.endpoints.url_api_get_proveedor + `${idProvider}`
    );
  }
}
