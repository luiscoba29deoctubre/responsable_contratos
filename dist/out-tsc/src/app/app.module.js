var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { LocationStrategy, PathLocationStrategy } from "@angular/common";
import { AppRoutes } from "./app.routing";
import { AppComponent } from "./app.component";
import { MsalModule } from "@azure/msal-angular";
import { FlexLayoutModule } from "@angular/flex-layout";
import { FullComponent } from "./layouts/full/full.component";
import { AppHeaderComponent } from "./layouts/full/header/header.component";
import { AppSidebarComponent } from "./layouts/full/sidebar/sidebar.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { DemoMaterialModule } from "./demo-material-module";
import { SharedModule } from "./shared/shared.module";
import { SpinnerComponent } from "./shared/spinner.component";
import { environment } from "../environments/environment";
import { MsalUserService } from "./services/active-directory/msaluser.service";
export const protectedResourceMap = [
    [environment.baseUrl, environment.scopeUri],
];
let AppModule = class AppModule {
};
AppModule = __decorate([
    NgModule({
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
                // cacheLocation: 'localStorage',
                protectedResourceMap,
                redirectUri: environment.redirectUrl,
            }),
            BrowserModule,
            BrowserAnimationsModule,
            DemoMaterialModule,
            FormsModule,
            FlexLayoutModule,
            HttpClientModule,
            SharedModule,
            RouterModule.forRoot(AppRoutes),
        ],
        providers: [
            MsalUserService,
            {
                provide: LocationStrategy,
                useClass: PathLocationStrategy,
            },
        ],
        bootstrap: [AppComponent],
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map