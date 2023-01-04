import { OnInit } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import * as i0 from "@angular/core";
export declare class SwireCheckboxComponent implements OnInit, ControlValueAccessor {
    Disabled: any;
    szValue: boolean;
    touched: boolean;
    checked: boolean;
    isDisabled: boolean;
    ischecked: boolean;
    name: string;
    indeterminateCheckBoxLabel: string;
    swireDynamicClassName: string;
    swireDynamicIdName: string;
    onChange: (szValue: any) => void;
    onTouch: any;
    writeValue(checked: boolean): void;
    registerOnChange(onChange: any): void;
    registerOnTouched(onTouched: any): void;
    markAsTouched(): void;
    setDisabledState(isDisabled: boolean): void;
    onModelChange(e: boolean): void;
    constructor();
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SwireCheckboxComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SwireCheckboxComponent, "swire-checkbox", never, { "isDisabled": "isDisabled"; "ischecked": "ischecked"; "name": "name"; "indeterminateCheckBoxLabel": "indeterminateCheckBoxLabel"; "swireDynamicClassName": "swireDynamicClassName"; "swireDynamicIdName": "swireDynamicIdName"; }, {}, never, never>;
}
