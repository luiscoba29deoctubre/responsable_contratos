import { Routes } from "@angular/router";

import { ParametricaComponent } from "./parametrica/parametrica.component";
import { DialogExitComponent } from "./dialog-exit/dialog-exit.component";

export const MaterialRoutes: Routes = [
  {
    path: "app-parametrica",
    component: ParametricaComponent,
  },
  {
    path: "app-dialog-exit",
    component: DialogExitComponent,
  },
];
