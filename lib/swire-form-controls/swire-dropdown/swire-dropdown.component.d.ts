import { ElementRef, OnInit } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import * as i0 from "@angular/core";
export declare class SwireDropdownComponent implements OnInit, ControlValueAccessor {
    private _eref;
    listFilter: ElementRef | undefined;
    myInput: any;
    filterDatas: any;
    atleastOneSelected: boolean;
    btnActiveClassName: string;
    btnClassName: string;
    bindLabel: string;
    bindValue: any;
    swireDynamicClassName: string;
    swireDynamicReferenceName: string;
    swireDynamicId: string;
    searchBoxPlaceHolder: string;
    dropDownType: string;
    showSearchBox: boolean;
    showIndeterminateState: boolean;
    filterdata: any;
    filterDataCheckbox: any;
    allCheckedItems: any;
    showList: boolean;
    disabled: boolean;
    szValue: any;
    touched: any;
    inputDropdownFilter: ElementRef;
    listDropdownFilter: ElementRef;
    constructor(_eref: ElementRef);
    onClick(event: any): void;
    ngOnInit(): void;
    onChange: (szValue: any) => void;
    onTouched: () => void;
    writeValue(szValue: any): void;
    onChangeHandler(e: any): void;
    checkExist(val: any): boolean;
    registerOnChange(onChange: any): void;
    registerOnTouched(onTouched: any): void;
    markAsTouched(): void;
    setDisabledState(disabled: boolean): void;
    selectAll(e: any): void;
    checkAllExist(): boolean;
    onSelected(item: any): void;
    showHideItems(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SwireDropdownComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SwireDropdownComponent, "swire-dropdown", never, { "filterDatas": "filterDatas"; "atleastOneSelected": "atleastOneSelected"; "btnActiveClassName": "btnActiveClassName"; "btnClassName": "btnClassName"; "bindLabel": "bindLabel"; "bindValue": "bindValue"; "swireDynamicClassName": "swireDynamicClassName"; "swireDynamicReferenceName": "swireDynamicReferenceName"; "swireDynamicId": "swireDynamicId"; "searchBoxPlaceHolder": "searchBoxPlaceHolder"; "dropDownType": "dropDownType"; "showSearchBox": "showSearchBox"; }, {}, never, never>;
}
