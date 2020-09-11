import { Routes } from "@angular/router";

import { ParametricaComponent } from "./parametrica/parametrica.component";
import { DialogExitComponent } from "./dialog-exit/dialog-exit.component";
import { ReporteComponent } from './reporte/reporte.component';

export const MaterialRoutes: Routes = [
  {
    path: "app-reporte",
    component: ReporteComponent,
  },
  {
    path: "app-parametrica",
    component: ParametricaComponent,
  },
  {
    path: "app-dialog-exit",
    component: DialogExitComponent,
  },
];
