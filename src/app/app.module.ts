import { LocationStrategy, PathLocationStrategy } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FlexLayoutModule } from "@angular/flex-layout";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule } from "@angular/router";
import { JwtModule } from "@auth0/angular-jwt";
import { MsalModule } from "@azure/msal-angular";
import { NgxSpinnerModule } from "ngx-spinner";
import { ToastrModule } from "ngx-toastr";
import { environment } from "../environments/environment";
import { AppComponent } from "./app.component";
import { AppRoutes } from "./app.routing";
import { DemoMaterialModule } from "./demo-material-module";
import { FullComponent } from "./layouts/full/full.component";
import { AppHeaderComponent } from "./layouts/full/header/header.component";
import { AppSidebarComponent } from "./layouts/full/sidebar/sidebar.component";
import { MsalUserService } from "./services/active-directory/msaluser.service";
// services
import { ApiService } from "./services/api.service";
import { ApiDenariusService } from "./services/apidenarius.service";
import { DataShareService } from "./services/datashare.service";
import { NotificationService } from "./services/notification.service";
import { SharedModule } from "./shared/shared.module";
import { SpinnerComponent } from "./shared/spinner.component";

export function tokenGetter() {
  return localStorage.getItem("token");
}

export const protectedResourceMap: any = [
  [environment.baseUrl, environment.scopeUri],
];

@NgModule({
  declarations: [
    AppComponent,
    FullComponent,
    AppHeaderComponent,
    SpinnerComponent,
    AppSidebarComponent,
  ],
  imports: [
    MsalModule.forRoot({
      clientID: environment.uiClienId,
      authority: "https://login.microsoftonline.com/" + environment.tenantId,
      // cacheLocation: "localStorage",
      protectedResourceMap,
      redirectUri: environment.redirectUrl,
    }),
    ToastrModule.forRoot(),
    BrowserModule,
    BrowserAnimationsModule,
    DemoMaterialModule,
    FormsModule,
    FlexLayoutModule,
    NgxSpinnerModule,
    SharedModule,
    RouterModule.forRoot(AppRoutes),
    HttpClientModule,

    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: ["example.com"],
        disallowedRoutes: ["http://example.com/examplebadroute/"],
      },
    }),
  ],
  providers: [
    ApiService,
    DataShareService,
    MsalUserService,
    ApiDenariusService,
    NotificationService,
    {
      provide: LocationStrategy,
      useClass: PathLocationStrategy,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
