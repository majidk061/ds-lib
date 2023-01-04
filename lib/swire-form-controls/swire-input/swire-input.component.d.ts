import { ControlValueAccessor } from '@angular/forms';
import * as i0 from "@angular/core";
export declare class SwireInputComponent implements ControlValueAccessor {
    myInput: any;
    swireDynamicClassName: string;
    swireInputIconVisible: boolean;
    showShipIcon: boolean;
    showSearchIcon: boolean;
    szValue: null;
    touched: boolean;
    disabled: boolean;
    onChange: (szValue: any) => void;
    onTouched: () => void;
    onChangeHandler(e: any): void;
    writeValue(szValue: any): void;
    registerOnChange(onChange: any): void;
    registerOnTouched(onTouched: any): void;
    markAsTouched(): void;
    setDisabledState(disabled: boolean): void;
    onKeyDown(e: any): void;
    onKeyPress(e: any): void;
    enter(e: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SwireInputComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SwireInputComponent, "swire-input", never, { "swireDynamicClassName": "swireDynamicClassName"; "swireInputIconVisible": "swireInputIconVisible"; "showShipIcon": "showShipIcon"; "showSearchIcon": "showSearchIcon"; }, {}, never, never>;
}
