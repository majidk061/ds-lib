import { OnInit } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import * as i0 from "@angular/core";
export declare class SwireStepperComponent implements OnInit, ControlValueAccessor {
    myInput: any;
    swireDynamicClassName: string;
    swireDynamicMinVal: number;
    swireDynamicMaxVal: number;
    szValue: any;
    touched: boolean;
    disabled: boolean;
    onChange: (szValue: any) => void;
    onTouched: () => void;
    onChangeHandler(e: any): void;
    writeValue(szValue: any): void;
    registerOnChange(onChange: any): void;
    registerOnTouched(onTouched: any): void;
    markAsTouched(): void;
    setDisabledState(disabled: boolean): void;
    onKeyDown(e: any): void;
    onKeyPress(e: any): void;
    enter(e: any): void;
    constructor();
    ngOnInit(): void;
    btnClicked(dir: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SwireStepperComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SwireStepperComponent, "swire-stepper", never, { "swireDynamicClassName": "swireDynamicClassName"; "swireDynamicMinVal": "swireDynamicMinVal"; "swireDynamicMaxVal": "swireDynamicMaxVal"; }, {}, never, never>;
}
