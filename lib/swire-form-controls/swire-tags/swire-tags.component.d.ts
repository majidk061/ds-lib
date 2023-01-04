import { EventEmitter, OnInit } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import * as i0 from "@angular/core";
export declare class SwireTagsComponent implements OnInit, ControlValueAccessor {
    dynamicTagTypeClass: string;
    dynamicTagBGColorClass: string;
    dynamicTagTextColorClass: string;
    swireDynamicIconClass: string;
    isShowLeftIcon: boolean;
    isShowCrossIcon: boolean;
    swireDynamicCrossIconClass: string;
    tagLabel: string;
    isDisabled: boolean;
    swireDisableActiveClass: boolean;
    closeTagsCallback: EventEmitter<any>;
    isHideTab: boolean;
    constructor();
    writeValue(obj: any): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState?(isDisabled: boolean): void;
    ngOnInit(): void;
    closeTag(): void;
    ngOnChanges(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SwireTagsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SwireTagsComponent, "swire-tags", never, { "dynamicTagTypeClass": "dynamicTagTypeClass"; "dynamicTagBGColorClass": "dynamicTagBGColorClass"; "dynamicTagTextColorClass": "dynamicTagTextColorClass"; "swireDynamicIconClass": "swireDynamicIconClass"; "isShowLeftIcon": "isShowLeftIcon"; "isShowCrossIcon": "isShowCrossIcon"; "swireDynamicCrossIconClass": "swireDynamicCrossIconClass"; "tagLabel": "tagLabel"; "isDisabled": "isDisabled"; "swireDisableActiveClass": "swireDisableActiveClass"; "isHideTab": "isHideTab"; }, { "closeTagsCallback": "closeTagsCallback"; }, never, never>;
}
