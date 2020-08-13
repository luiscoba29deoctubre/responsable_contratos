var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component } from "@angular/core";
const data = require("./data.json");
let DashboardComponent = class DashboardComponent {
    constructor() {
        // Barchart
        this.barChart1 = {
            type: "Bar",
            data: data["Bar"],
            options: {
                seriesBarDistance: 15,
                high: 12,
                axisX: {
                    showGrid: false,
                    offset: 20,
                },
                axisY: {
                    showGrid: true,
                    offset: 40,
                },
                height: 360,
            },
            responsiveOptions: [
                [
                    "screen and (min-width: 640px)",
                    {
                        axisX: {
                            labelInterpolationFnc: function (value, index) {
                                return index % 1 === 0 ? `${value}` : null;
                            },
                        },
                    },
                ],
            ],
        };
        // This is for the donute chart
        this.donuteChart1 = {
            type: "Pie",
            data: data["Pie"],
            options: {
                donut: true,
                height: 260,
                showLabel: false,
                donutWidth: 20,
            },
        };
    }
    ngAfterViewInit() { }
};
DashboardComponent = __decorate([
    Component({
        selector: "app-dashboard",
        templateUrl: "./dashboard.component.html",
        styleUrls: ["./dashboard.component.scss"],
    })
], DashboardComponent);
export { DashboardComponent };
//# sourceMappingURL=dashboard.component.js.map