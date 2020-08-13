var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import 'hammerjs';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { DemoMaterialModule } from '../demo-material-module';
import { CdkTableModule } from '@angular/cdk/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialRoutes } from './material.routing';
import { ButtonsComponent } from './buttons/buttons.component';
import { GridComponent } from './grid/grid.component';
import { ListsComponent } from './lists/lists.component';
import { MenuComponent } from './menu/menu.component';
import { TabsComponent } from './tabs/tabs.component';
import { StepperComponent } from './stepper/stepper.component';
import { ExpansionComponent } from './expansion/expansion.component';
import { ChipsComponent } from './chips/chips.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { ProgressSnipperComponent } from './progress-snipper/progress-snipper.component';
import { ProgressComponent } from './progress/progress.component';
import { DialogComponent, DialogOverviewExampleDialogComponent } from './dialog/dialog.component';
import { TooltipComponent } from './tooltip/tooltip.component';
import { SnackbarComponent } from './snackbar/snackbar.component';
import { SliderComponent } from './slider/slider.component';
import { SlideToggleComponent } from './slide-toggle/slide-toggle.component';
import { NewComponentComponent } from './new-component/new-component.component';
let MaterialComponentsModule = class MaterialComponentsModule {
};
MaterialComponentsModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            RouterModule.forChild(MaterialRoutes),
            DemoMaterialModule,
            HttpClientModule,
            FormsModule,
            ReactiveFormsModule,
            FlexLayoutModule,
            CdkTableModule
        ],
        providers: [],
        entryComponents: [DialogOverviewExampleDialogComponent],
        declarations: [
            ButtonsComponent,
            GridComponent,
            ListsComponent,
            MenuComponent,
            TabsComponent,
            StepperComponent,
            ExpansionComponent,
            ChipsComponent,
            ToolbarComponent,
            ProgressSnipperComponent,
            ProgressComponent,
            DialogComponent,
            DialogOverviewExampleDialogComponent,
            TooltipComponent,
            SnackbarComponent,
            SliderComponent,
            SlideToggleComponent,
            NewComponentComponent
        ]
    })
], MaterialComponentsModule);
export { MaterialComponentsModule };
//# sourceMappingURL=material.module.js.map