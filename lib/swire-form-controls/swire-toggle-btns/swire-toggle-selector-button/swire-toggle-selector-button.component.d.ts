import { OnInit } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import * as i0 from "@angular/core";
export declare class SwireToggleSelectorButtonComponent implements OnInit, ControlValueAccessor {
    swireDynamicClassName: string;
    value1: string;
    value2: string;
    szValue: any;
    disabled: boolean;
    onChange: (szValue: any) => void;
    onTouched: () => void;
    constructor();
    writeValue(szValue: any): void;
    registerOnChange(onChange: any): void;
    registerOnTouched(onTouched: any): void;
    setDisabledState(disabled: boolean): void;
    ngOnInit(): void;
    toggleButtonClick(type: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SwireToggleSelectorButtonComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SwireToggleSelectorButtonComponent, "swire-toggle-selector-button", never, { "swireDynamicClassName": "swireDynamicClassName"; "value1": "value1"; "value2": "value2"; }, {}, never, never>;
}
