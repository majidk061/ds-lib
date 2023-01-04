import { OnInit } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import * as i0 from "@angular/core";
export declare class SwireProgressBarComponent implements OnInit, ControlValueAccessor {
    swireDynamicStepLabel: string;
    swireDynamicStepValue: string;
    swireDynamicOptionalKey: string;
    swireDynamicProgressBarData: any;
    showHideStepLabel: boolean;
    onChange: any;
    onTouch: any;
    disabled: boolean;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    writeValue(val: any): void;
    onClick(name: string, index: any): void;
    setDisabledState(disabled: boolean): void;
    constructor();
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SwireProgressBarComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SwireProgressBarComponent, "swire-progress-bar", never, { "swireDynamicStepLabel": "swireDynamicStepLabel"; "swireDynamicStepValue": "swireDynamicStepValue"; "swireDynamicOptionalKey": "swireDynamicOptionalKey"; "swireDynamicProgressBarData": "swireDynamicProgressBarData"; "showHideStepLabel": "showHideStepLabel"; }, {}, never, never>;
}
