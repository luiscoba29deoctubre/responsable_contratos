var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
let DialogOverviewExampleDialogComponent = class DialogOverviewExampleDialogComponent {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    onNoClick() {
        this.dialogRef.close();
    }
};
DialogOverviewExampleDialogComponent = __decorate([
    Component({
        selector: 'app-dialog-overview-example-dialog',
        template: `<h1 mat-dialog-title>Hi {{data.name}}</h1>
<div mat-dialog-content>
  <p>What's your favorite animal?</p>
  <mat-form-field>
    <input matInput tabindex="1" [(ngModel)]="data.animal">
  </mat-form-field>
</div>
<div mat-dialog-actions>
  <button mat-button [mat-dialog-close]="data.animal" tabindex="2">Ok</button>
  <button mat-button (click)="onNoClick()" tabindex="-1">No Thanks</button>
</div>`
    }),
    __param(1, Inject(MAT_DIALOG_DATA)),
    __metadata("design:paramtypes", [MatDialogRef, Object])
], DialogOverviewExampleDialogComponent);
export { DialogOverviewExampleDialogComponent };
let DialogComponent = class DialogComponent {
    constructor(dialog) {
        this.dialog = dialog;
    }
    openDialog() {
        const dialogRef = this.dialog.open(DialogOverviewExampleDialogComponent, {
            width: '250px',
            data: { name: this.name, animal: this.animal }
        });
        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
            this.animal = result;
        });
    }
};
DialogComponent = __decorate([
    Component({
        selector: 'app-dialog',
        templateUrl: './dialog.component.html',
        styleUrls: ['./dialog.component.scss']
    }),
    __metadata("design:paramtypes", [MatDialog])
], DialogComponent);
export { DialogComponent };
//# sourceMappingURL=dialog.component.js.map