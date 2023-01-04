import { OnInit } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import * as i0 from "@angular/core";
export declare class SwireTwoWayToggleButtonComponent implements OnInit, ControlValueAccessor {
    dynamicDisableFirstOption: boolean;
    dynamicDisableSecOption: boolean;
    toggleType: any;
    swireDynamicClassName: string;
    disabled: boolean;
    szValue: any;
    touched: boolean;
    onChange: (szValue: any) => void;
    onTouched: () => void;
    constructor();
    writeValue(szValue: any): void;
    onChangeHandler(e: any): void;
    registerOnChange(onChange: any): void;
    registerOnTouched(onTouched: any): void;
    markAsTouched(): void;
    onModelChange(e: any): void;
    setDisabledState(disabled: boolean): void;
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SwireTwoWayToggleButtonComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SwireTwoWayToggleButtonComponent, "swire-two-way-toggle-button", never, { "dynamicDisableFirstOption": "dynamicDisableFirstOption"; "dynamicDisableSecOption": "dynamicDisableSecOption"; "toggleType": "toggleType"; "swireDynamicClassName": "swireDynamicClassName"; }, {}, never, never>;
}
