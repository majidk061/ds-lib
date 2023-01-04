import { OnInit } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import * as i0 from "@angular/core";
export declare class ChipsComponent implements OnInit, ControlValueAccessor {
    inputField: any;
    myInput: any;
    swireDynamicClassName: string;
    swireInputIconVisible: boolean;
    SwireMinChipsFilledValue: number;
    SwireMaxChipsFilledValue: number;
    showFocusClass: boolean;
    savedItem: any;
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
    constructor();
    ngOnInit(): void;
    divClicked(): void;
    btnPressed(e: any): void;
    deleteData(name: string): void;
    focusIn(e: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ChipsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ChipsComponent, "swire-chips", never, { "swireDynamicClassName": "swireDynamicClassName"; "swireInputIconVisible": "swireInputIconVisible"; "SwireMinChipsFilledValue": "SwireMinChipsFilledValue"; "SwireMaxChipsFilledValue": "SwireMaxChipsFilledValue"; }, {}, never, never>;
}