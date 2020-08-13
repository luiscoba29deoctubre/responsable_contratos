var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material';
let SnackbarComponent = class SnackbarComponent {
    constructor(snackBar) {
        this.snackBar = snackBar;
    }
    openSnackBar(message, action) {
        this.snackBar.open(message, action, {
            duration: 2000,
        });
    }
};
SnackbarComponent = __decorate([
    Component({
        selector: 'app-snackbar',
        templateUrl: './snackbar.component.html',
        styleUrls: ['./snackbar.component.scss']
    }),
    __metadata("design:paramtypes", [MatSnackBar])
], SnackbarComponent);
export { SnackbarComponent };
//# sourceMappingURL=snackbar.component.js.map