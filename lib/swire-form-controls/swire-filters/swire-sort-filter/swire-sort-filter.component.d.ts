import { ElementRef, OnInit } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import * as i0 from "@angular/core";
export declare class SwireSortFilterComponent implements OnInit, ControlValueAccessor {
    private _eref;
    showSearchBox: boolean;
    filterData: any;
    atleastOneSelected: boolean;
    sortFilterBtnName: string;
    btnActiveClassName: string;
    btnClassName: string;
    bindLabel: string;
    bindValue: string;
    swireDynamicClassName: string;
    showDropDownIcon: boolean;
    showSortByText: boolean;
    showSortByTextVal: string;
    deviceName: boolean;
    searchBoxPlaceHolder: string;
    filterdata: null;
    showList: boolean;
    disabled: any;
    szValue: null;
    touched: boolean;
    toggleButton: ElementRef | undefined;
    sortlistFilter: ElementRef | undefined;
    myInput: any;
    constructor(_eref: ElementRef);
    onClick(event: any): void;
    ngOnInit(): void;
    onChange: (szValue: any) => void;
    onTouched: () => void;
    writeValue(szValue: any): void;
    onChangeHandler(e: any): void;
    registerOnChange(onChange: any): void;
    registerOnTouched(onTouched: any): void;
    markAsTouched(): void;
    setDisabledState(disabled: boolean): void;
    onSelected(item: any): void;
    showHideItems(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SwireSortFilterComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SwireSortFilterComponent, "swire-sort-filter", never, { "showSearchBox": "showSearchBox"; "filterData": "filterData"; "atleastOneSelected": "atleastOneSelected"; "sortFilterBtnName": "sortFilterBtnName"; "btnActiveClassName": "btnActiveClassName"; "btnClassName": "btnClassName"; "bindLabel": "bindLabel"; "bindValue": "bindValue"; "swireDynamicClassName": "swireDynamicClassName"; "showDropDownIcon": "showDropDownIcon"; "showSortByText": "showSortByText"; "showSortByTextVal": "showSortByTextVal"; "deviceName": "deviceName"; "searchBoxPlaceHolder": "searchBoxPlaceHolder"; }, {}, never, never>;
}