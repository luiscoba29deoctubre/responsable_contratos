import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Parameter } from "../models/parameter";

@Injectable({
  providedIn: "root",
})
export class ApiService {
  private apiUrl = "http://localhost:3003/responsable-api/v1"; // URL to web api del servidor

  constructor(private http: HttpClient) {}

  public getCountry(): Observable<any> {
    return this.http.get<Parameter>(this.apiUrl + "/parameters/getCountries");
  }

  public getAllParameters(): Observable<any> {
    return this.http.get<Parameter>(
      this.apiUrl + "/parameters/getAllParameters"
    );
  }

  public putSaveDataParameters(
    registro: any,
    entidad: string
  ): Observable<any> {
    entidad = entidad.charAt(0).toLowerCase() + entidad.slice(1); // ponemos la primera letra en 'minuscula'

    return this.http.put<any>( // aqui estamos enviando el un parametro y el body al mismo tiempo
      `${this.apiUrl}/parameters/putSaveOrUpdateParameters/${entidad}`,
      registro
    );
  }
}
