import { OnInit } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import * as i0 from "@angular/core";
export declare class SwireRadioButtonComponent implements OnInit, ControlValueAccessor {
    items: any;
    swireDynamicClassName: string;
    disabled: any;
    szValue: any;
    touched: any;
    onChange: (szValue: any) => void;
    onTouched: () => void;
    writeValue(szValue: any): void;
    registerOnChange(onChange: any): void;
    registerOnTouched(onTouched: any): void;
    markAsTouched(): void;
    setDisabledState(disabled: boolean): void;
    selected(): void;
    unselected(): void;
    onModelChange(e: any): void;
    constructor();
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SwireRadioButtonComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SwireRadioButtonComponent, "swire-radio-button", never, { "items": "items"; "swireDynamicClassName": "swireDynamicClassName"; }, {}, never, never>;
}
