/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { MatAutocompleteModule, MatButtonModule, MatButtonToggleModule, MatCardModule, MatCheckboxModule, MatChipsModule, MatDatepickerModule, MatDialogModule, MatExpansionModule, MatFormFieldModule, MatGridListModule, MatIconModule, MatInputModule, MatListModule, MatMenuModule, MatPaginatorModule, MatProgressBarModule, MatProgressSpinnerModule, MatRadioModule, MatSelectModule, MatSidenavModule, MatSliderModule, MatSlideToggleModule, MatSnackBarModule, MatSortModule, MatTableModule, MatTabsModule, MatToolbarModule, MatTooltipModule, MatStepperModule, } from '@angular/material';
import { MatNativeDateModule, MatRippleModule } from '@angular/material';
import { CdkTableModule } from '@angular/cdk/table';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { A11yModule } from '@angular/cdk/a11y';
import { BidiModule } from '@angular/cdk/bidi';
import { OverlayModule } from '@angular/cdk/overlay';
import { PlatformModule } from '@angular/cdk/platform';
import { ObserversModule } from '@angular/cdk/observers';
import { PortalModule } from '@angular/cdk/portal';
/**
 * NgModule that includes all Material modules that are required to serve the demo-app.
 */
let DemoMaterialModule = class DemoMaterialModule {
};
DemoMaterialModule = __decorate([
    NgModule({
        exports: [
            MatAutocompleteModule,
            MatButtonModule,
            MatButtonToggleModule,
            MatCardModule,
            MatCheckboxModule,
            MatChipsModule,
            MatTableModule,
            MatDatepickerModule,
            MatDialogModule,
            MatExpansionModule,
            MatFormFieldModule,
            MatGridListModule,
            MatIconModule,
            MatInputModule,
            MatListModule,
            MatMenuModule,
            MatPaginatorModule,
            MatProgressBarModule,
            MatProgressSpinnerModule,
            MatRadioModule,
            MatRippleModule,
            MatSelectModule,
            MatSidenavModule,
            MatSlideToggleModule,
            MatSliderModule,
            MatSnackBarModule,
            MatSortModule,
            MatStepperModule,
            MatTabsModule,
            MatToolbarModule,
            MatTooltipModule,
            MatNativeDateModule,
            CdkTableModule,
            A11yModule,
            BidiModule,
            CdkAccordionModule,
            ObserversModule,
            OverlayModule,
            PlatformModule,
            PortalModule,
        ]
    })
], DemoMaterialModule);
export { DemoMaterialModule };
//# sourceMappingURL=demo-material-module.js.map