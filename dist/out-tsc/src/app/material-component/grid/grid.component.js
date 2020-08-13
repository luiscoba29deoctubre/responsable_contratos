var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component } from '@angular/core';
let GridComponent = class GridComponent {
    constructor() {
        this.tiles = [
            {
                text: 'One',
                cols: 3,
                rows: 1,
                color: 'lightblue'
            },
            {
                text: 'Two',
                cols: 1,
                rows: 2,
                color: 'lightgreen'
            },
            {
                text: 'Three',
                cols: 1,
                rows: 1,
                color: 'lightpink'
            },
            {
                text: 'Four',
                cols: 2,
                rows: 1,
                color: '#DDBDF1'
            }
        ];
    }
};
GridComponent = __decorate([
    Component({
        selector: 'app-grid',
        templateUrl: './grid.component.html',
        styleUrls: ['./grid.component.scss']
    })
], GridComponent);
export { GridComponent };
//# sourceMappingURL=grid.component.js.map