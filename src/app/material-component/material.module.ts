import "hammerjs";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import { CommonModule } from "@angular/common";

import { DemoMaterialModule } from "../demo-material-module";
import { CdkTableModule } from "@angular/cdk/table";

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FlexLayoutModule } from "@angular/flex-layout";

import { MaterialRoutes } from "./material.routing";

import { ParametricaComponent } from "./parametrica/parametrica.component";
import { DialogBoxComponent } from "./dialog-box/dialog-box.component";
import { DialogExitComponent } from "./dialog-exit/dialog-exit.component";
import { DialogAcceptComponent } from "./dialog-accept/dialog-accept.component";
import { ReporteComponent } from "./reporte/reporte.component";
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { AngularFileUploaderModule } from './reporte/angular-file-uploader/src/lib/angular-file-uploader.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(MaterialRoutes),
    DemoMaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    CdkTableModule,

    AngularFileUploaderModule,
  ],
  providers: [],
  entryComponents: [],
  declarations: [
    ParametricaComponent,
    DialogBoxComponent,
    DialogExitComponent,
    DialogAcceptComponent,
    ReporteComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class MaterialComponentsModule {}
