import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: "root",
})
export class ApiEndpoints {
  // API
  /** Url Base */
  public url_base: string = environment.host + "/responsable-api";

  /** Versión de la API */
  public api_version = "/v1";

  /** Url API */
  public url_api: string = this.url_base + this.api_version;

  // Usuarios
  public url_api_usuarios: string = this.url_api + "/users";

  // Procesos
  public url_api_procesos: string = this.url_api + "/process";

  // Formulario
  public url_api_formulario: string = this.url_api + "/form";

  // proceso de obtencción de parametros
  public url_api_get_parameters: string = this.url_api_procesos + "/get-param";

  // Crear nuevo usuario
  public url_api_new_user: string = this.url_api_usuarios + "/";
}
