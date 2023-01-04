import { OnInit } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import * as i0 from "@angular/core";
export declare class SwireTabToggleComponent implements OnInit, ControlValueAccessor {
    swireDynamicClassName: string;
    items: any;
    Icon: boolean;
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
    static ɵfac: i0.ɵɵFactoryDeclaration<SwireTabToggleComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SwireTabToggleComponent, "swire-tab-toggle", never, { "swireDynamicClassName": "swireDynamicClassName"; "items": "items"; "Icon": "Icon"; }, {}, never, never>;
}
