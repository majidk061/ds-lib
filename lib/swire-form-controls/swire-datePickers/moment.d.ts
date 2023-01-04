import { NgbDateParserFormatter, NgbDateStruct } from "@ng-bootstrap/ng-bootstrap";
import { NgbDateAdapter, NgbDatepickerI18n } from '@ng-bootstrap/ng-bootstrap';
import * as i0 from "@angular/core";
export declare class NgbdatepickerconfigService {
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<NgbdatepickerconfigService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<NgbdatepickerconfigService>;
}
export declare class CustomAdapter extends NgbDateAdapter<string> {
    readonly DELIMITER = "-";
    fromModel(value: string | null): NgbDateStruct | null;
    toModel(date: NgbDateStruct | null): string | null;
    static ɵfac: i0.ɵɵFactoryDeclaration<CustomAdapter, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<CustomAdapter>;
}
export declare class CustomDateParserFormatter extends NgbDateParserFormatter {
    readonly DELIMITER = "/";
    parse(value: string): NgbDateStruct | null;
    format(date: NgbDateStruct | null): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<CustomDateParserFormatter, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<CustomDateParserFormatter>;
}
export declare class CustomDateParserSailling extends NgbDateParserFormatter {
    readonly DELIMITER = "/";
    parse(value: string): NgbDateStruct | null;
    format(date: NgbDateStruct | null): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<CustomDateParserSailling, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<CustomDateParserSailling>;
}
/**
* end
*/
export declare class MyDatepickerI18n extends NgbDatepickerI18n {
    private _locale;
    private _weekdaysShort;
    private _monthsFull;
    private _monthsShort;
    constructor();
    getMonthShortName(month: number, year?: number): string;
    getMonthFullName(month: number, year?: number): string;
    getDayAriaLabel(date: NgbDateStruct): string;
    getWeekdayLabel(weekday: number): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<MyDatepickerI18n, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<MyDatepickerI18n>;
}
