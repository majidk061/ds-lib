import { OnInit } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import * as i0 from "@angular/core";
export declare class SwireThreeWayToggleButtonComponent implements OnInit, ControlValueAccessor {
    swireDynamicClassName: string;
    swireDynamicDisableFirst: boolean;
    swireDynamicDisableSec: boolean;
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
    toggleButtonClick(type: boolean): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SwireThreeWayToggleButtonComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SwireThreeWayToggleButtonComponent, "swire-three-way-toggle-button", never, { "swireDynamicClassName": "swireDynamicClassName"; "swireDynamicDisableFirst": "swireDynamicDisableFirst"; "swireDynamicDisableSec": "swireDynamicDisableSec"; }, {}, never, never>;
}
