import { OnInit, EventEmitter, ElementRef } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import * as i0 from "@angular/core";
export declare class SwireStaticTableComponent implements OnInit {
    private _fb;
    private _el;
    constructor(_fb: FormBuilder, _el: ElementRef);
    objectKeys: {
        (o: object): string[];
        (o: {}): string[];
    };
    pagination: any;
    tableData: any;
    tableDataHeading: any;
    bindLabel: string;
    disabled: boolean;
    sendTableValue: EventEmitter<any>;
    tableType: any;
    szValue: any;
    touched: any;
    allCheckedItems: any;
    showIndeterminateState: boolean;
    filterdata: any;
    filterDataCheckbox: any;
    direction: any;
    globalIndexHead: any;
    ngOnInit(): void;
    paginationUpdate(data: any): void;
    onChange: (szValue: any) => void;
    onTouched: () => void;
    writeValue(szValue: any): void;
    onChangeHandler(e: any): void;
    markAsTouched(): void;
    selectAll(e: any): void;
    checkExist(val: any): boolean;
    checkAllExist(): boolean;
    onSort(event: any, val: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SwireStaticTableComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SwireStaticTableComponent, "swire-table-static", never, { "pagination": "pagination"; "tableData": "tableData"; "tableDataHeading": "tableDataHeading"; "bindLabel": "bindLabel"; "disabled": "disabled"; "tableType": "tableType"; }, { "sendTableValue": "sendTableValue"; }, never, never>;
}