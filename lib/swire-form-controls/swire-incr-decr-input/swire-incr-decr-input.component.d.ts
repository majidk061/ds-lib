import { OnInit } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import * as i0 from "@angular/core";
export declare class SwireIncrDecrInputComponent implements OnInit, ControlValueAccessor {
    myInput: any;
    minValue: any;
    maxValue: any;
    swireDynamicClassName: string;
    disabledMinValue: boolean;
    disabledMaxValue: boolean;
    szValue: any;
    touched: boolean;
    disabled: boolean;
    onChange: (szValue: any) => void;
    onTouched: () => void;
    onChangeHandler(e: any): void;
    writeValue(szValue: number): void;
    registerOnChange(onChange: any): void;
    registerOnTouched(onTouched: any): void;
    markAsTouched(): void;
    setDisabledState(disabled: boolean): void;
    onKeyDown(e: any): void;
    onKeyPress(e: any): void;
    constructor();
    ngOnInit(): void;
    increment(change: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SwireIncrDecrInputComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SwireIncrDecrInputComponent, "swire-incr-decr-input", never, { "minValue": "minValue"; "maxValue": "maxValue"; "swireDynamicClassName": "swireDynamicClassName"; "disabledMinValue": "disabledMinValue"; "disabledMaxValue": "disabledMaxValue"; }, {}, never, never>;
}
