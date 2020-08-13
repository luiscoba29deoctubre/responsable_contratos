import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { HttpClientModule, HttpClient } from "@angular/common/http";
import { LocationStrategy, PathLocationStrategy } from "@angular/common";
import { AppRoutes } from "./app.routing";
import { AppComponent } from "./app.component";

import { FullComponent } from "./layouts/full/full.component";
import { AppHeaderComponent } from "./layouts/full/header/header.component";
import { AppSidebarComponent } from "./layouts/full/sidebar/sidebar.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { DemoMaterialModule } from "./demo-material-module";

import { SharedModule } from "./shared/shared.module";
import { SpinnerComponent } from "./shared/spinner.component";
import { environment } from "../environments/environment";

// services
import { ApiService } from "./services/api.service";
import { DataShareService } from "./services/datashare.service";
import { MsalUserService } from "./services/active-directory/msaluser.service";
import { ApiDenariusService } from "./services/apidenarius.service";
import { NotificationService } from "./services/notification.service";
import { ToastrModule } from "ngx-toastr";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MsalModule } from "@azure/msal-angular";

import { JwtModule } from "@auth0/angular-jwt";

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
