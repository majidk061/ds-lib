import { OnInit } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import * as i0 from "@angular/core";
export declare class SwireSimpleToggleComponent implements OnInit, ControlValueAccessor {
    swireDynamicClassName: string;
    items: any;
    disabled: boolean;
    szValue: boolean;
    touched: boolean;
    onChange: (szValue: any) => void;
    onTouched: () => void;
    constructor();
    writeValue(checked: boolean): void;
    onChangeHandler(e: any): void;
    registerOnChange(onChange: any): void;
    registerOnTouched(onTouched: any): void;
    markAsTouched(): void;
    onModelChange(e: any): void;
    setDisabledState(disabled: boolean): void;
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SwireSimpleToggleComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SwireSimpleToggleComponent, "swire-simple-toggle", never, { "swireDynamicClassName": "swireDynamicClassName"; "items": "items"; }, {}, never, never>;
}
