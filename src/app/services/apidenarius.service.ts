import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { PerfilUsuarioDenarius } from "../models/perfilusuario";

@Injectable({
  providedIn: "root",
})
export class ApiDenariusService {
  private apiUrl = "http://localhost:3003/responsable-api/v1"; // URL to web api del servidor

  constructor(private http: HttpClient) {}

  public getValidarPerfil(usuario: string): Observable<any> {
    return this.http.get<PerfilUsuarioDenarius>(
      `${this.apiUrl}/denarius/perfil/${usuario}`
    );
  }
}
