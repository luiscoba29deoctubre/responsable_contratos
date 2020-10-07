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

  url_api_upload_buro: string = this.url_api + "/reporte/upload_buro";

  url_api_prov_sin_calificar: string =
    this.url_api + "/proveedor/prov-sin-calificar";

  url_api_get_proveedor: string = this.url_api + "/proveedor/calificar/";

  url_api_get_prov_fechas: string = this.url_api + "/proveedor/fechas/";
}
