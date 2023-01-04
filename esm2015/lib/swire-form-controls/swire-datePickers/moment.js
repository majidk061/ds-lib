import { NgbDateParserFormatter } from "@ng-bootstrap/ng-bootstrap";
import * as moment from "moment";
import { FormStyle, getLocaleDayNames, getLocaleMonthNames, TranslationWidth } from '@angular/common';
import { NgbDateAdapter, NgbDatepickerI18n } from '@ng-bootstrap/ng-bootstrap';
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class NgbdatepickerconfigService {
    constructor() { }
}
NgbdatepickerconfigService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.0.5", ngImport: i0, type: NgbdatepickerconfigService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
NgbdatepickerconfigService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.0.5", ngImport: i0, type: NgbdatepickerconfigService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.0.5", ngImport: i0, type: NgbdatepickerconfigService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });
export class CustomAdapter extends NgbDateAdapter {
    constructor() {
        super(...arguments);
        this.DELIMITER = '-';
    }
    fromModel(value) {
        if (value) {
            let date = value.split(this.DELIMITER);
            return {
                day: parseInt(date[0], 10),
                month: parseInt(date[1], 10),
                year: parseInt(date[2], 10)
            };
        }
        return null;
    }
    toModel(date) {
        return date ? date.day + this.DELIMITER + date.month + this.DELIMITER + date.year : null;
    }
}
CustomAdapter.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.0.5", ngImport: i0, type: CustomAdapter, deps: null, target: i0.ɵɵFactoryTarget.Injectable });
CustomAdapter.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.0.5", ngImport: i0, type: CustomAdapter });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.0.5", ngImport: i0, type: CustomAdapter, decorators: [{
            type: Injectable
        }] });
export class CustomDateParserFormatter extends NgbDateParserFormatter {
    constructor() {
        super(...arguments);
        this.DELIMITER = '/';
    }
    parse(value) {
        if (value) {
            let date = value.split(this.DELIMITER);
            return {
                day: parseInt(date[0], 10),
                month: parseInt(date[1], 10),
                year: parseInt(date[2], 10)
            };
        }
        return null;
    }
    format(date) {
        return date ? ('0' + date.day).slice(-2) + this.DELIMITER + ('0' + date.month).slice(-2) + this.DELIMITER + date.year : '';
    }
}
CustomDateParserFormatter.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.0.5", ngImport: i0, type: CustomDateParserFormatter, deps: null, target: i0.ɵɵFactoryTarget.Injectable });
CustomDateParserFormatter.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.0.5", ngImport: i0, type: CustomDateParserFormatter });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.0.5", ngImport: i0, type: CustomDateParserFormatter, decorators: [{
            type: Injectable
        }] });
export class CustomDateParserSailling extends NgbDateParserFormatter {
    constructor() {
        super(...arguments);
        this.DELIMITER = '/';
    }
    parse(value) {
        if (value) {
            let date = value.split(this.DELIMITER);
            return {
                day: parseInt(date[0], 10),
                month: parseInt(date[1], 10),
                year: parseInt(date[2], 10)
            };
        }
        return null;
    }
    format(date) {
        return date ? moment(('0' + date.day).slice(-2) + this.DELIMITER + ('0' + date.month).slice(-2) + this.DELIMITER + date.year, 'DD-M-YYYY').format("DD MMM YYYY") : '';
    }
}
CustomDateParserSailling.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.0.5", ngImport: i0, type: CustomDateParserSailling, deps: null, target: i0.ɵɵFactoryTarget.Injectable });
CustomDateParserSailling.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.0.5", ngImport: i0, type: CustomDateParserSailling });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.0.5", ngImport: i0, type: CustomDateParserSailling, decorators: [{
            type: Injectable
        }] });
/**
* end
*/
export class MyDatepickerI18n extends NgbDatepickerI18n {
    constructor() {
        super();
        this._locale = 'en';
        const weekdaysStartingOnSunday = getLocaleDayNames(this._locale, FormStyle.Standalone, TranslationWidth.Narrow);
        this._weekdaysShort = weekdaysStartingOnSunday.map((day, index) => weekdaysStartingOnSunday[(index + 1) % 7]);
        this._monthsFull = getLocaleMonthNames(this._locale, FormStyle.Standalone, TranslationWidth.Abbreviated);
        this._monthsShort = getLocaleMonthNames(this._locale, FormStyle.Standalone, TranslationWidth.Abbreviated);
    }
    getMonthShortName(month, year) {
        return this._monthsShort[month - 1] || '';
    }
    getMonthFullName(month, year) {
        return this._monthsFull[month - 1] || '';
    }
    getDayAriaLabel(date) {
        return '';
    }
    getWeekdayLabel(weekday) {
        return this._weekdaysShort[weekday - 1] || '';
    }
}
MyDatepickerI18n.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.0.5", ngImport: i0, type: MyDatepickerI18n, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
MyDatepickerI18n.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.0.5", ngImport: i0, type: MyDatepickerI18n });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.0.5", ngImport: i0, type: MyDatepickerI18n, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return []; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9tZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc3dpcmUtbGliL3NyYy9saWIvc3dpcmUtZm9ybS1jb250cm9scy9zd2lyZS1kYXRlUGlja2Vycy9tb21lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHNCQUFzQixFQUFpQixNQUFNLDRCQUE0QixDQUFDO0FBQ25GLE9BQU8sS0FBSyxNQUFNLE1BQU0sUUFBUSxDQUFDO0FBQ2pDLE9BQU8sRUFBRSxTQUFTLEVBQUUsaUJBQWlCLEVBQUUsbUJBQW1CLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN0RyxPQUFPLEVBQUUsY0FBYyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDL0UsT0FBTyxFQUFHLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFNNUMsTUFBTSxPQUFPLDBCQUEwQjtJQUVyQyxnQkFBZ0IsQ0FBQzs7dUhBRk4sMEJBQTBCOzJIQUExQiwwQkFBMEIsY0FGekIsTUFBTTsyRkFFUCwwQkFBMEI7a0JBSHRDLFVBQVU7bUJBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COztBQU9ELE1BQU0sT0FBTyxhQUFjLFNBQVEsY0FBc0I7SUFEekQ7O1FBR1csY0FBUyxHQUFHLEdBQUcsQ0FBQztLQWlCMUI7SUFmQyxTQUFTLENBQUMsS0FBb0I7UUFDNUIsSUFBSSxLQUFLLEVBQUU7WUFDVCxJQUFJLElBQUksR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUN2QyxPQUFPO2dCQUNMLEdBQUcsRUFBRSxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQztnQkFDMUIsS0FBSyxFQUFFLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDO2dCQUM1QixJQUFJLEVB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O1FBQ2pDLE9BQU8sRUFBRSxDQUFDO0lBQ1osQ0FBQztJQUNELGVBQWUsQ0FBQyxPQUFlO1FBQzdCLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2hELENBQUM7OzZHQTFCVSxnQkFBZ0I7aUhBQWhCLGdCQUFnQjsyRkFBaEIsZ0JBQWdCO2tCQUQ1QixVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdiRGF0ZVBhcnNlckZvcm1hdHRlciwgTmdiRGF0ZVN0cnVjdCB9IGZyb20gXCJAbmctYm9vdHN0cmFwL25nLWJvb3RzdHJhcFwiO1xuaW1wb3J0ICogYXMgbW9tZW50IGZyb20gXCJtb21lbnRcIjtcbmltcG9ydCB7IEZvcm1TdHlsZSwgZ2V0TG9jYWxlRGF5TmFtZXMsIGdldExvY2FsZU1vbnRoTmFtZXMsIFRyYW5zbGF0aW9uV2lkdGggfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdiRGF0ZUFkYXB0ZXIsIE5nYkRhdGVwaWNrZXJJMThuIH0gZnJvbSAnQG5nLWJvb3RzdHJhcC9uZy1ib290c3RyYXAnO1xuaW1wb3J0IHsgIEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBOZ2JkYXRlcGlja2VyY29uZmlnU2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cbn1cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEN1c3RvbUFkYXB0ZXIgZXh0ZW5kcyBOZ2JEYXRlQWRhcHRlcjxzdHJpbmc+IHtcblxuICByZWFkb25seSBERUxJTUlURVIgPSAnLSc7XG5cbiAgZnJvbU1vZGVsKHZhbHVlOiBzdHJpbmcgfCBudWxsKTogTmdiRGF0ZVN0cnVjdCB8IG51bGwge1xuICAgIGlmICh2YWx1ZSkge1xuICAgICAgbGV0IGRhdGUgPSB2YWx1ZS5zcGxpdCh0aGlzLkRFTElNSVRFUik7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBkYXk6IHBhcnNlSW50KGRhdGVbMF0sIDEwKSxcbiAgICAgICAgbW9udGg6IHBhcnNlSW50KGRhdGVbMV0sIDEwKSxcbiAgICAgICAgeWVhcjogcGFyc2VJbnQoZGF0ZVsyXSwgMTApXG4gICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHRvTW9kZWwoZGF0ZTogTmdiRGF0ZVN0cnVjdCB8IG51bGwpOiBzdHJpbmcgfCBudWxsIHtcbiAgICByZXR1cm4gZGF0ZSA/IGRhdGUuZGF5ICsgdGhpcy5ERUxJTUlURVIgKyBkYXRlLm1vbnRoICsgdGhpcy5ERUxJTUlURVIgKyBkYXRlLnllYXIgOiBudWxsO1xuICB9XG59XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDdXN0b21EYXRlUGFyc2VyRm9ybWF0dGVyIGV4dGVuZHMgTmdiRGF0ZVBhcnNlckZvcm1hdHRlciB7XG5cblxuICByZWFkb25seSBERUxJTUlURVIgPSAnLyc7XG5cbiAgcGFyc2UodmFsdWU6IHN0cmluZyk6IE5nYkRhdGVTdHJ1Y3QgfCBudWxsIHtcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIGxldCBkYXRlID0gdmFsdWUuc3BsaXQodGhpcy5ERUxJTUlURVIpO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgZGF5OiBwYXJzZUludChkYXRlWzBdLCAxMCksXG4gICAgICAgIG1vbnRoOiBwYXJzZUludChkYXRlWzFdLCAxMCksXG4gICAgICAgIHllYXI6IHBhcnNlSW50KGRhdGVbMl0sIDEwKVxuICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBmb3JtYXQoZGF0ZTogTmdiRGF0ZVN0cnVjdCB8IG51bGwpOiBzdHJpbmcge1xuICAgIHJldHVybiBkYXRlID8gKCcwJyArIGRhdGUuZGF5KS5zbGljZSgtMikgKyB0aGlzLkRFTElNSVRFUiArICgnMCcgKyBkYXRlLm1vbnRoKS5zbGljZSgtMikgKyB0aGlzLkRFTElNSVRFUiArIGRhdGUueWVhciA6ICcnO1xuICB9XG59XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEN1c3RvbURhdGVQYXJzZXJTYWlsbGluZyBleHRlbmRzIE5nYkRhdGVQYXJzZXJGb3JtYXR0ZXIge1xuXG5cbiAgcmVhZG9ubHkgREVMSU1JVEVSID0gJy8nO1xuXG4gIHBhcnNlKHZhbHVlOiBzdHJpbmcpOiBOZ2JEYXRlU3RydWN0IHwgbnVsbCB7XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICBsZXQgZGF0ZSA9IHZhbHVlLnNwbGl0KHRoaXMuREVMSU1JVEVSKTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGRheTogcGFyc2VJbnQoZGF0ZVswXSwgMTApLFxuICAgICAgICBtb250aDogcGFyc2VJbnQoZGF0ZVsxXSwgMTApLFxuICAgICAgICB5ZWFyOiBwYXJzZUludChkYXRlWzJdLCAxMClcbiAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgZm9ybWF0KGRhdGU6IE5nYkRhdGVTdHJ1Y3QgfCBudWxsKTogc3RyaW5nIHtcbiAgICByZXR1cm4gZGF0ZSA/IG1vbWVudCgoJzAnICsgZGF0ZS5kYXkpLnNsaWNlKC0yKSArIHRoaXMuREVMSU1JVEVSICsgKCcwJyArIGRhdGUubW9udGgpLnNsaWNlKC0yKSArIHRoaXMuREVMSU1JVEVSICsgZGF0ZS55ZWFyLCdERC1NLVlZWVknKS5mb3JtYXQoXCJERCBNTU0gWVlZWVwiKSA6ICcnO1xuICB9XG59XG5cbi8qKlxuKiBlbmRcbiovXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBNeURhdGVwaWNrZXJJMThuIGV4dGVuZHMgTmdiRGF0ZXBpY2tlckkxOG4ge1xuICBwcml2YXRlIF9sb2NhbGUgPSAnZW4nO1xuICBwcml2YXRlIF93ZWVrZGF5c1Nob3J0OiByZWFkb25seSBzdHJpbmdbXTtcbiAgcHJpdmF0ZSBfbW9udGhzRnVsbDogcmVhZG9ubHkgc3RyaW5nW107XG4gIHByaXZhdGUgX21vbnRoc1Nob3J0OiByZWFkb25seSBzdHJpbmdbXTtcblxuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgY29uc3Qgd2Vla2RheXNTdGFydGluZ09uU3VuZGF5ID0gZ2V0TG9jYWxlRGF5TmFtZXModGhpcy5fbG9jYWxlLCBGb3JtU3R5bGUuU3RhbmRhbG9uZSwgVHJhbnNsYXRpb25XaWR0aC5OYXJyb3cpO1xuICAgIHRoaXMuX3dlZWtkYXlzU2hvcnQgPSB3ZWVrZGF5c1N0YXJ0aW5nT25TdW5kYXkubWFwKChkYXksIGluZGV4KSA9PiB3ZWVrZGF5c1N0YXJ0aW5nT25TdW5kYXlbKGluZGV4ICsgMSkgJSA3XSk7XG4gICAgdGhpcy5fbW9udGhzRnVsbCA9IGdldExvY2FsZU1vbnRoTmFtZXModGhpcy5fbG9jYWxlLCBGb3JtU3R5bGUuU3RhbmRhbG9uZSwgVHJhbnNsYXRpb25XaWR0aC5BYmJyZXZpYXRlZCk7XG4gICAgdGhpcy5fbW9udGhzU2hvcnQgPSBnZXRMb2NhbGVNb250aE5hbWVzKHRoaXMuX2xvY2FsZSwgRm9ybVN0eWxlLlN0YW5kYWxvbmUsIFRyYW5zbGF0aW9uV2lkdGguQWJicmV2aWF0ZWQpO1xuXG4gIH1cbiAgZ2V0TW9udGhTaG9ydE5hbWUobW9udGg6IG51bWJlciwgeWVhcj86IG51bWJlcik6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX21vbnRoc1Nob3J0W21vbnRoIC0gMV0gfHwgJyc7XG4gIH1cbiAgZ2V0TW9udGhGdWxsTmFtZShtb250aDogbnVtYmVyLCB5ZWFyPzogbnVtYmVyKTogc3RyaW5nIHtcbiAgICAgIHJldHVybiB0aGlzLl9tb250aHNGdWxsW21vbnRoIC0gMV0gfHwgJyc7XG4gIH1cbiAgZ2V0RGF5QXJpYUxhYmVsKGRhdGU6IE5nYkRhdGVTdHJ1Y3QpOiBzdHJpbmcge1xuICAgIHJldHVybiAnJztcbiAgfVxuICBnZXRXZWVrZGF5TGFiZWwod2Vla2RheTogbnVtYmVyKSB7ICBcbiAgICByZXR1cm4gdGhpcy5fd2Vla2RheXNTaG9ydFt3ZWVrZGF5IC0gMV0gfHwgJyc7IFxuICB9XG59XG5cbi8vIGV4cG9ydCBjbGFzcyBNb21lbnREYXRlRm9ybWF0dGVyIGV4dGVuZHMgTmdiRGF0ZVBhcnNlckZvcm1hdHRlciB7XG5cbi8vICAgICByZWFkb25seSBERUxJTUlURVIgPSAnLyc7XG5cbi8vICAgICBwYXJzZSh2YWx1ZTogc3RyaW5nKTogTmdiRGF0ZVN0cnVjdCB8IG51bGwge1xuLy8gICAgICAgaWYgKHZhbHVlKSB7XG4vLyAgICAgICAgIGxldCBkYXRlID0gdmFsdWUuc3BsaXQodGhpcy5ERUxJTUlURVIpO1xuLy8gICAgICAgICByZXR1cm4ge1xuLy8gICAgICAgICAgIGRheTogcGFyc2VJbnQoZGF0ZVswXSwgMTApLFxuLy8gICAgICAgICAgIG1vbnRoOiBwYXJzZUludChkYXRlWzFdLCAxMCksXG4vLyAgICAgICAgICAgeWVhcjogcGFyc2VJbnQoZGF0ZVsyXSwgMTApXG4vLyAgICAgICAgIH07XG4vLyAgICAgICB9XG4vLyAgICAgICByZXR1cm4gbnVsbDtcbi8vICAgICB9XG4gIFxuLy8gICAgIGZvcm1hdChkYXRlOiBOZ2JEYXRlU3RydWN0IHwgbnVsbCk6IHN0cmluZyB7XG4vLyAgICAgICByZXR1cm4gZGF0ZSA/ICgnMCcgKyBkYXRlLmRheSkuc2xpY2UoLTIpICsgdGhpcy5ERUxJTUlURVIgKyAoJzAnICsgZGF0ZS5tb250aCkuc2xpY2UoLTIpICsgdGhpcy5ERUxJTUlURVIgKyBkYXRlLnllYXIgOiAnJztcbi8vICAgICB9XG4vLyB9Il19