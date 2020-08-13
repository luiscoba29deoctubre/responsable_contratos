import { Injectable } from "@angular/core";
import * as Msal from "msal";

import { Observable } from "rxjs";
import { environment } from "../../../environments/environment";
import { ApiDenariusService } from "../apidenarius.service";
import { PerfilUsuarioDenarius } from "../../models/perfilusuario";
import { NotificationService } from "../notification.service";

@Injectable()
export class MsalUserService {
  private accessToken: any;
  public clientApplication: Msal.UserAgentApplication = null;
  private _perfil: string;

  perfilUsuarioDenarius: PerfilUsuarioDenarius;

  constructor(
    private apiDenariusService: ApiDenariusService,
    private notifyService: NotificationService
  ) {
    this.clientApplication = new Msal.UserAgentApplication(
      environment.uiClienId,
      "https://login.microsoftonline.com/" + environment.tenantId,
      this.authCallback,
      {
        storeAuthStateInCookie: true,
        // cacheLocation: 'localStorage' ,
      }
    );

    if (this.GetAccessToken()) {
      // obtenemos solo el nombre del correo
      const mail = this.clientApplication.getUser().displayableId;
      const lastPosition = mail.indexOf("@");
      let name = mail.substring(0, lastPosition);

      name = name == "lcoba" ? "fguaman" : name;

      this.apiDenariusService
        .getValidarPerfil(name) // va a ocurrir un error si tiene mas de 1 perfil en denarius.
        // el servicio le va a traer null
        .subscribe((perfilUsuarioDenarius) => {
          // guardamos el perfil para enviarlo a 'menu-items.ts'
          this._perfil = perfilUsuarioDenarius.NombrePerfil;

          if (this._perfil == null || this._perfil == undefined) {
            this.showToasterWarning();

            this.logout();
          } else {
            this.showToasterSuccess();
          }
        });
    }
  }

  // sacado de https://morioh.com/p/526559a86600 el Toast que muestra mensajes
  showToasterSuccess() {
    this.notifyService.showSuccess("Acceso correcto", "Login");
  }

  showToasterError() {
    this.notifyService.showError("Usuario o clave es incorrecta", "Login");
  }

  showToasterWarning() {
    this.notifyService.showWarning("No tiene perfil en Denarius", "Perfil");
  }

  // este metodo es llamdo desde 'menu-items.ts' para activar el menu de ADMIN
  get perfil(): string {
    return this._perfil;
  }

  public GetAccessToken(): Observable<any> {
    if (
      sessionStorage.getItem("msal.idtoken") !== undefined &&
      sessionStorage.getItem("msal.idtoken") != null
    ) {
      this.accessToken = sessionStorage.getItem("msal.idtoken");
    }
    // console.log(sessionStorage);
    return this.accessToken;
  }

  public authCallback(errorDesc, token, error, tokenType) {
    if (token) {
    } else {
      console.log(error + ":" + errorDesc);
    }
  }

  public getCurrentUserInfo() {
    const user = this.clientApplication.getUser();
    alert(user.name);
    return user.name;
  }

  public logout() {
    this.clientApplication.logout();
  }
}
