import { Routes } from "@angular/router";
import { MsalGuard } from "@azure/msal-angular";
import { FullComponent } from "./layouts/full/full.component";

export const AppRoutes: Routes = [
  {
    path: "",
    component: FullComponent,
    canActivate: [MsalGuard],
    children: [
      {
        path: "",
        redirectTo: "/dashboard",
        pathMatch: "full",
      },
      {
        path: "",
        loadChildren: () =>
          import("./material-component/material.module").then(
            (m) => m.MaterialComponentsModule
          ),
      },
      {
        path: "dashboard",
        loadChildren: () =>
          import("./dashboard/dashboard.module").then((m) => m.DashboardModule),
      },
    ],
  },
];
