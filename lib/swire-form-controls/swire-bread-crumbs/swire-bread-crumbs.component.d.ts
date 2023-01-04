import { OnInit } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import * as i0 from "@angular/core";
export declare class SwireBreadCrumbsComponent implements OnInit, ControlValueAccessor {
    swireDynamicBreadCrumbsTexts: any;
    swireActiveBreadCrumbs: string;
    swireDynamicClassName: string;
    onChange: any;
    onTouch: any;
    disabled: boolean;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    writeValue(val: any): void;
    onClick(name: any): void;
    setDisabledState(disabled: boolean): void;
    constructor();
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SwireBreadCrumbsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SwireBreadCrumbsComponent, "swire-bread-crumbs", never, { "swireDynamicBreadCrumbsTexts": "swireDynamicBreadCrumbsTexts"; "swireActiveBreadCrumbs": "swireActiveBreadCrumbs"; "swireDynamicClassName": "swireDynamicClassName"; }, {}, never, never>;
}
