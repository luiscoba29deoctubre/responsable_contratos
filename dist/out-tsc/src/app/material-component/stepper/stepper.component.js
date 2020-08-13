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
import { FormBuilder, Validators } from '@angular/forms';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
let StepperComponent = class StepperComponent {
    constructor(_formBuilder) {
        this._formBuilder = _formBuilder;
        this.isLinear = false;
        this.isLinearvarient = false;
        this.isLinearposition = false;
        this.isOptional = false;
        this.isEditable = false;
    }
    ngOnInit() {
        this.firstFormGroup = this._formBuilder.group({
            firstCtrl: ['', Validators.required]
        });
        this.secondFormGroup = this._formBuilder.group({
            secondCtrl: ['', Validators.required]
        });
        // varient
        this.varientfirstFormGroup = this._formBuilder.group({
            varientfirstCtrl: ['', Validators.required]
        });
        this.varientsecondFormGroup = this._formBuilder.group({
            varientsecondCtrl: ['', Validators.required]
        });
        // position
        this.positionfirstFormGroup = this._formBuilder.group({
            positionfirstCtrl: ['', Validators.required]
        });
        this.positionsecondFormGroup = this._formBuilder.group({
            positionsecondCtrl: ['', Validators.required]
        });
        // optional
        this.optionalfirstFormGroup = this._formBuilder.group({
            optionalfirstCtrl: ['', Validators.required]
        });
        this.optionalsecondFormGroup = this._formBuilder.group({
            optionalsecondCtrl: ['', Validators.required]
        });
        // editable
        this.editablefirstFormGroup = this._formBuilder.group({
            editablefirstCtrl: ['', Validators.required]
        });
        this.editablesecondFormGroup = this._formBuilder.group({
            editablesecondCtrl: ['', Validators.required]
        });
        // customize
        this.customizefirstFormGroup = this._formBuilder.group({
            customizefirstCtrl: ['', Validators.required]
        });
        this.customizesecondFormGroup = this._formBuilder.group({
            customizesecondCtrl: ['', Validators.required]
        });
        // error
        this.errorfirstFormGroup = this._formBuilder.group({
            errorfirstCtrl: ['', Validators.required]
        });
        this.errorsecondFormGroup = this._formBuilder.group({
            errorsecondCtrl: ['', Validators.required]
        });
    }
};
StepperComponent = __decorate([
    Component({
        selector: 'app-stepper',
        templateUrl: './stepper.component.html',
        styleUrls: ['./stepper.component.scss'],
        providers: [{
                provide: STEPPER_GLOBAL_OPTIONS, useValue: { displayDefaultIndicatorType: false }
            }]
    }),
    __metadata("design:paramtypes", [FormBuilder])
], StepperComponent);
export { StepperComponent };
//# sourceMappingURL=stepper.component.js.map