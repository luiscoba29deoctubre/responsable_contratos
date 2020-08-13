var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component } from '@angular/core';
let ListsComponent = class ListsComponent {
    constructor() {
        this.typesOfShoes = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];
        this.messages = [
            {
                from: 'Nirav joshi (nbj@gmail.com)',
                image: 'assets/images/users/1.jpg',
                subject: 'Material angular',
                content: 'This is the material angular template'
            },
            {
                from: 'Sunil joshi (sbj@gmail.com)',
                image: 'assets/images/users/2.jpg',
                subject: 'Wrappixel',
                content: 'We have wrappixel launched'
            },
            {
                from: 'Vishal Bhatt (bht@gmail.com)',
                image: 'assets/images/users/3.jpg',
                subject: 'Task list',
                content: 'This is the latest task hasbeen done'
            }
        ];
        this.folders = [
            {
                name: 'Photos',
                updated: new Date('1/1/16')
            },
            {
                name: 'Recipes',
                updated: new Date('1/17/16')
            },
            {
                name: 'Work',
                updated: new Date('1/28/16')
            }
        ];
        this.notes = [
            {
                name: 'Vacation Itinerary',
                updated: new Date('2/20/16')
            },
            {
                name: 'Kitchen Remodel',
                updated: new Date('1/18/16')
            }
        ];
    }
};
ListsComponent = __decorate([
    Component({
        selector: 'app-lists',
        templateUrl: './lists.component.html',
        styleUrls: ['./lists.component.scss']
    })
], ListsComponent);
export { ListsComponent };
//# sourceMappingURL=lists.component.js.map