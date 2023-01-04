import { OnInit } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import * as i0 from "@angular/core";
export declare class SwireToolTipComponent implements OnInit, ControlValueAccessor {
    SvgContent: any;
    swireDynamicIconWidth: string;
    swireDynamicIconHeight: string;
    swireTooltipDirectionClass: string;
    onChange: any;
    onTouch: any;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    writeValue(val: any): void;
    tooltipText: string;
    showHideToolTip: boolean;
    constructor();
    ngOnInit(): void;
    showHideTooltip(val: boolean): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SwireToolTipComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SwireToolTipComponent, "swire-tool-tip", never, { "SvgContent": "SvgContent"; "swireDynamicIconWidth": "swireDynamicIconWidth"; "swireDynamicIconHeight": "swireDynamicIconHeight"; "swireTooltipDirectionClass": "swireTooltipDirectionClass"; "tooltipText": "tooltipText"; "showHideToolTip": "showHideToolTip"; }, {}, never, never>;
}
