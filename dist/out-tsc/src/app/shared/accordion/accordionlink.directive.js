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
import { Directive, HostBinding, Inject, Input } from '@angular/core';
import { AccordionDirective } from './accordion.directive';
let AccordionLinkDirective = class AccordionLinkDirective {
    constructor(nav) {
        this.nav = nav;
    }
    get selected() {
        return this._selected;
    }
    set selected(value) {
        this._selected = value;
        if (value) {
            this.nav.closeOtherLinks(this);
        }
    }
    ngOnInit() {
        this.nav.addLink(this);
    }
    ngOnDestroy() {
        this.nav.removeGroup(this);
    }
    toggle() {
        this.selected = !this.selected;
    }
};
__decorate([
    Input(),
    __metadata("design:type", Object)
], AccordionLinkDirective.prototype, "group", void 0);
__decorate([
    HostBinding('class.selected'),
    Input(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], AccordionLinkDirective.prototype, "selected", null);
AccordionLinkDirective = __decorate([
    Directive({
        selector: '[appAccordionLink]'
    }),
    __param(0, Inject(AccordionDirective)),
    __metadata("design:paramtypes", [AccordionDirective])
], AccordionLinkDirective);
export { AccordionLinkDirective };
//# sourceMappingURL=accordionlink.directive.js.map