import { OnInit } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import * as i0 from "@angular/core";
export declare class SwireButtonComponent implements OnInit, ControlValueAccessor {
    dynamicBtnEnableDisable: boolean;
    dynamicBtnName: string;
    dynamicDirectionForIcon: string;
    dynamicShowBtnIcon: boolean;
    swireDynamicIconClass: string;
    swireDynamicColorClass: string;
    swireDynamicSizeClass: string;
    dynamicBtnDirectionClassName: string;
    onChange: any;
    onTouch: any;
    disabled: boolean;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    writeValue(val: any): void;
    onClick(): void;
    setDisabledState(disabled: boolean): void;
    dynamicBtnClassName: any;
    constructor();
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SwireButtonComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SwireButtonComponent, "swire-button", never, { "dynamicBtnEnableDisable": "dynamicBtnEnableDisable"; "dynamicBtnName": "dynamicBtnName"; "dynamicDirectionForIcon": "dynamicDirectionForIcon"; "dynamicShowBtnIcon": "dynamicShowBtnIcon"; "swireDynamicIconClass": "swireDynamicIconClass"; "swireDynamicColorClass": "swireDynamicColorClass"; "swireDynamicSizeClass": "swireDynamicSizeClass"; "dynamicBtnDirectionClassName": "dynamicBtnDirectionClassName"; "dynamicBtnClassName": "dynamicBtnClassName"; }, {}, never, never>;
}
