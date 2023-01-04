import { Component, forwardRef, Input, ViewEncapsulation } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class SwireBreadCrumbsComponent {
    constructor() {
        this.swireDynamicBreadCrumbsTexts = [];
        this.swireActiveBreadCrumbs = '';
        this.swireDynamicClassName = '';
        this.disabled = false;
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouch = fn;
    }
    writeValue(val) {
    }
    onClick(name) {
        this.onChange(name);
    }
    setDisabledState(disabled) {
        this.disabled = disabled;
    }
    ngOnInit() {
    }
}
SwireBreadCrumbsComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.0.5", ngImport: i0, type: SwireBreadCrumbsComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
SwireBreadCrumbsComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.0.5", type: SwireBreadCrumbsComponent, selector: "swire-bread-crumbs", inputs: { swireDynamicBreadCrumbsTexts: "swireDynamicBreadCrumbsTexts", swireActiveBreadCrumbs: "swireActiveBreadCrumbs", swireDynamicClassName: "swireDynamicClassName" }, providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => SwireBreadCrumbsComponent),
            multi: true
        }
    ], ngImport: i0, template: "\n<div class=\"swire-breadcrumb\" [class]=\"swireDynamicClassName\">\n  <ul>\n    <ng-container\n      *ngFor=\"let item of swireDynamicBreadCrumbsTexts; let last = last\"\n    >\n      <li class=\"paragraph-regular-15\">\n        <a\n          href=\"javascript:void(0)\"\n          class=\"Text-90\"\n          [ngClass]=\"{'selected': ((last && (swireActiveBreadCrumbs == '')) ||\n          item == swireActiveBreadCrumbs)}\"\n          >{{ item }}</a\n        >\n        <span *ngIf=\"!last\">/</span>\n      </li>\n      \n    </ng-container>\n  </ul>\n</div>\n", styles: [".bg-Transparent-Black{background-color:#0009}.bg-grey-40{background-color:#e0e4e8}.bg-grey-30{background-color:#e5e5e5}.bg-grey-50{background-color:#fcfcfd}.bg-grey-20{background-color:#f0f2f3}.bg-grey-90{background-color:#616568}.bg-grey-80{background-color:#91979d}.bg-grey-100{background-color:#525557}.bg-grey-10{background-color:#f9fafa}.bg-grey-60{background-color:#c2c9d1}.bg-Text-100{background-color:#000}.bg-Text-90{background-color:#404040}.bg-Text-85{background-color:#3f3f3f}.bg-Text-80{background-color:gray}.bg-Text-60{background-color:#bfbfbf}.bg-Text-20{background-color:#f2f2f2}.bg-Text-10{background-color:#fff}.bg-Primary-60{background-color:#3a66a7}.bg-sucess-light{background-color:#f5fcf5}.bg-sucess-light-2{background-color:#f5fcf5}.bg-error-light{background-color:#fef5f5}.bg-text-20{background-color:#f2f2f2}.bg-text-10{background-color:#fff}.bg-warning-light{background-color:#fef6e8}.bg-Accent-100{background-color:#782522}.bg-Accent-90{background-color:#ae352f}.bg-Accent-80{background-color:#d14545}.bg-Accent-60{background-color:#df6560}.bg-Accent-40{background-color:#e8aba8}.bg-Accent-30{background-color:#fceac6}.bg-Accent-20{background-color:#e5c0be}.bg-Accent-10{background-color:#fae7e6}.bg-Primary-90{background-color:#1a4079}.bg-Primary-80{background-color:#1e4f98}.bg-Primary-40{background-color:#5477ab}.bg-Primary-100{background-color:#0b203e}.bg-Primary-20{background-color:#879ec0}.bg-Primary-10{background-color:#c0cbdd}.bg-Table-Expanded{background-color:#f5faff}.bg-Hyperlink-Dark{background-color:#296edd}.bg-Table-Active{background-color:#e8f0f9}.bg-Sucess-light-2{background-color:#f5fcf5}.bg-Error-light{background-color:#fef5f5}.bg-Grey-20{background-color:#f0f2f3}.bg-Text-40{background-color:#e6e6e6}.bg-Warning-Main{background-color:#f3aa1c}.bg-Error-Dark{background-color:#bf2921}.bg-Error-Main{background-color:#f03738}.bg-Success-Main{background-color:#3cc13b}.bg-Success-Dark{background-color:#2d912c}.bg-Warning-Dark{background-color:#b68015}.bg-Warning-Light{background-color:#fef6e8}.bg-Success-Light{background-color:#f5fcf5}.bg-Hyperlink-Light{background-color:#9bbef8}.Primary-100{color:#0b203e}.Primary-90{color:#1a4079}.Primary-80{color:#1e4f98}.Primary-60{color:#3a66a7}.Primary-40{color:#5477ab}.Primary-20{color:#879ec0}.Primary-10{color:#c0cbdd}.Primary-10:hover{color:#c0cbdd}.Accent-100{color:#782522}.Accent-90{color:#ae352f}.Accent-80{color:#d14545}.Accent-60{color:#df6560}.Accent-40{color:#e8aba8}.Accent-30{color:#fceac6}.Accent-20{color:#e5c0be}.Accent-10{color:#fae7e6}.Grey-100{color:#525557}.Grey-90{color:#616568}.Grey-80{color:#91979d}.Grey-60{color:#c2c9d1}.Grey-40{color:#e0e4e8}.Grey-20{color:#f0f2f3}.Grey-10{color:#f9fafa}.Text-100{color:#000}.Text-90{color:#404040}.Text-85{color:#3f3f3f}.Text-80{color:gray}.Text-60{color:#bfbfbf}.Text-40{color:#e6e6e6}.Text-20{color:#f2f2f2}.Text-10{color:#fff}.Text-10:hover{color:#fff}.Error-Dark2{color:#f03738}.Error-Dark{color:#bf2921}.Error-Main{color:#f03738}.Error-Light{color:#fef5f5}.Hyperlink-Dark{color:#296edd}.Hyperlink-Dark:hover{color:#296edd}.Hyperlink-Light{color:#9bbef8}.Success-Dark{color:#2d912c}.Success-Main{color:#3cc13b}.Success-Light{color:#f5fcf5}.Transparent-Black{color:#0009}.Warning-Dark{color:#b68015}.Warning-Main{color:#f3aa1c}.Warning-Light{color:#fef6e8}.Shadow-Nav-Bar-Items{text-shadow:1px 1px 1px rgba(0,0,0,.4)}.Shadow-Big-Text{text-shadow:1px 4px 6px rgba(0,0,0,.4)}.Shadow-Field-Box{box-shadow:0 4px 6px #0003}.Shadow-Field-Box2{box-shadow:0 4px 4px #00000040}.Shadow-L{box-shadow:0 10px 24px #0000001f}.Shadow-M{box-shadow:0 8px 12px #0000001a}.Shadow-S{box-shadow:0 6px 16px #00000014}.Shadow-XS{box-shadow:0 2px 4px #00000026}.Shadow-Circumference{box-shadow:1px 1px 4px #00000026,-1px -1px 4px #00000026}.processing{background:#f3aa1c;color:#fff!important}.in-review{background:#f3aa1c;color:#fff!important}.confirmed{background:#3cc13b;color:#fff!important}.departed-origin{background:#f0b5b5}.rejected,.cancellation-in-progress{background-color:#f03738;color:#fff!important}.cancelled{background:#c2c9d1;color:#c2c9d1!important}.completed{background:#c2c9d1;color:#404040!important}.Display-family{font-family:\"Arsenal\",sans-serif;letter-spacing:.02em}.heading-light-82{font-weight:300;font-size:82px;line-height:1.3}@media screen and (max-width: 767px){.heading-light-82{font-size:50px}}.heading-regular-54{font-weight:400;font-size:54px;line-height:1.3}@media screen and (max-width: 767px){.heading-regular-54{font-size:40px}}.heading-regular-40{font-weight:400;font-size:40px;line-height:1.3}@media screen and (max-width: 767px){.heading-regular-40{font-size:28px}}.heading-regular-28{font-weight:400;font-size:28px;line-height:1.3}@media screen and (max-width: 767px){.heading-regular-28{font-size:24px}}.heading-regular-24{font-weight:400;font-size:24px;line-height:1.3}.heading-regular-20{font-weight:400;font-size:20px;line-height:1.3}.heading-semibold-54{font-weight:600;font-size:54px;line-height:1.3}@media screen and (max-width: 767px){.heading-semibold-54{font-size:40px}}.heading-semibold-40{font-weight:600;font-size:40px;line-height:1.3}@media screen and (max-width: 767px){.heading-semibold-40{font-size:28px}}.heading-semibold-28{font-weight:600;font-size:28px;line-height:1.3}@media screen and (max-width: 767px){.heading-semibold-28{font-size:24px}}.heading-semibold-24{font-weight:600;font-size:24px;line-height:1.3}.heading-semibold-20{font-weight:600;font-size:20px;line-height:1.3}.heading-bold-54{font-weight:700;font-size:54px;line-height:1.3}@media screen and (max-width: 767px){.heading-bold-54{font-size:40px}}.heading-bold-40{font-weight:700;font-size:40px;line-height:1.3}@media screen and (max-width: 767px){.heading-bold-40{font-size:28px}}.heading-bold-32{font-weight:700;font-size:32px;line-height:1.3}.heading-bold-28{font-weight:700;font-size:28px;line-height:1.3}@media screen and (max-width: 767px){.heading-bold-28{font-size:24px}}.heading-bold-24{font-weight:700;font-size:24px;line-height:1.3}.heading-bold-20{font-weight:700;font-size:20px;line-height:1.3}.paragraph-light-14{font-weight:300;line-height:1.4;font-size:14px}.paragraph-light-18{font-weight:300;font-size:18px;line-height:1.4}.paragraph-light-15{font-weight:300;font-size:15px;line-height:1.4}.paragraph-regular-10{font-weight:400;font-size:10px;line-height:1.4}.paragraph-regular-12{font-weight:400;font-size:12px;line-height:1.4}.paragraph-regular-14{font-weight:400;font-size:14px;line-height:1.4}.paragraph-regular-15{font-weight:400;font-size:15px;line-height:1.4}.paragraph-regular-16{font-weight:400;font-size:16px;line-height:1.4}.paragraph-regular-18{font-weight:400;font-size:18px;line-height:1.4}.paragraph-regular-20{font-weight:400;font-size:20px;line-height:1.4}.paragraph-regular-13{font-weight:400;font-size:13px;line-height:1.4}.paragraph-semibold-10{font-weight:600;font-size:10px;line-height:1.4}.paragraph-semibold-12{font-weight:600;font-size:12px;line-height:1.4}.paragraph-semibold-13{font-weight:600;font-size:13px;line-height:1.4}.paragraph-semibold-14{font-weight:600;font-size:14px;line-height:1.4}.paragraph-semibold-16{font-weight:600;font-size:16px;line-height:1.4}.paragraph-semibold-22{font-weight:600;font-size:22px;line-height:1.4}.paragraph-semibold-20{font-weight:600;font-size:20px;line-height:1.4}.paragraph-semibold-18{font-weight:600;font-size:18px;line-height:1.4}.paragraph-semibold-15{font-weight:600;font-size:15px;line-height:1.4}.paragraph-bold-16{font-weight:700;font-size:16px;line-height:1.4}.paragraph-bold-18{font-weight:700;font-size:18px;line-height:1.4}.paragraph-bold-20{font-weight:700;font-size:20px;line-height:1.4}.paragraph-bold-13{font-weight:700;font-size:13px;line-height:1.4}.paragraph-bold-14{font-weight:700;font-size:14px;line-height:1.4}.paragraph-bold-15{font-weight:700;font-size:15px;line-height:1.4}.paragraph-bold-12{font-weight:700;font-size:12px;line-height:1.4}.paragraph-bold-10{font-weight:700;font-size:10px;line-height:1.4}.swi-button-special-blue-default-small-regular{background:#1E4F98;color:#fff;box-shadow:0 6px 16px #00000026;font-size:14px;font-weight:600;padding:5px 10px;min-height:28px;justify-content:center;align-items:center;display:inline-flex;border-radius:40px;transition:.1s;line-height:18px;border:0}.swi-button-special-blue-default-small-regular:disabled{opacity:.6}.swi-button-special-blue-default-small-regular:hover{background:#1A4079;color:#fff}.swi-button-special-whiteblue-default-small-regular{background:#FFFFFF;color:#1e4f98;box-shadow:0 6px 16px #00000026;font-size:14px;font-weight:600;padding:5px 10px;min-height:28px;justify-content:center;align-items:center;display:inline-flex;border-radius:40px;transition:.1s;line-height:18px;border:0}.swi-button-special-whiteblue-default-small-regular:disabled{opacity:.6}.swi-button-special-whiteblue-default-small-regular:hover{background:#1A4079;color:#fff}.swi-button-red-large-default-regular{background:#d14545;color:#fff;box-shadow:0 8px 12px #0000001a;font-size:22px;font-weight:600;padding:8px 20px;min-height:44px;justify-content:center;align-items:center;display:inline-flex;border-radius:40px;transition:.1s;line-height:28px;border:0}@media screen and (max-width: 1024px){.swi-button-red-large-default-regular{font-size:18px;min-height:40px;line-height:24px}}.swi-button-red-large-default-regular:hover{background:#AE352F;color:#fff}.swi-button-red-large-default-regular:disabled{background:#E6C0BE;color:#fae7e6}.swi-button-blue-large-default-regular{background:#1E4F98;color:#fff;box-shadow:0 8px 12px #0000001a;font-size:22px;font-weight:600;padding:8px 20px;min-height:44px;justify-content:center;align-items:center;display:inline-flex;border-radius:40px;transition:.1s;line-height:28px;border:0}@media screen and (max-width: 1024px){.swi-button-blue-large-default-regular{font-size:18px;min-height:40px;line-height:24px}}.swi-button-blue-large-default-regular:hover{background:#1A4079;color:#fff}.swi-button-blue-large-default-regular:disabled{background:#879EC0;color:#c0cbdd}.swi-button-red-medium-default-regular{background:#d14545;color:#fff;box-shadow:0 8px 12px #0000001a;font-size:18px;font-weight:600;padding:8px 20px;height:40px;justify-content:center;align-items:center;display:inline-flex;border-radius:40px;transition:.1s;line-height:24px;border:0}@media screen and (max-width: 1024px){.swi-button-red-medium-default-regular{font-size:18px;min-height:40px;line-height:24px}}@media screen and (max-width: 767px){.swi-button-red-medium-default-regular{font-size:14px;min-height:36px;line-height:20px;box-shadow:0 6px 16px #00000026}}.swi-button-red-medium-default-regular:hover{background:#AE352F;color:#fff}.swi-button-red-medium-default-regular:disabled{background:#E6C0BE;color:#fae7e6}.swi-button-blue-medium-default-regular{background:#1E4F98;color:#fff;box-shadow:0 8px 12px #0000001a;font-size:18px;font-weight:600;padding:8px 20px;min-height:40px;justify-content:center;align-items:center;display:inline-flex;border-radius:40px;transition:.1s;line-height:24px;border:0}@media screen and (max-width: 767px){.swi-button-blue-medium-default-regular{font-size:14px;min-height:36px;line-height:20px;box-shadow:0 6px 16px #00000026}}.swi-button-blue-medium-default-regular:hover{background:#1A4079;color:#fff}.swi-button-blue-medium-default-regular:disabled{background:#879EC0;color:#c0cbdd}.swi-button-red-small-default-regular{background:#d14545;color:#fff;box-shadow:0 6px 16px #00000026;font-size:14px;font-weight:600;padding:8px 20px;min-height:36px;justify-content:center;align-items:center;display:inline-flex;border-radius:40px;transition:.1s;line-height:18px;border:0}.swi-button-red-small-default-regular:hover{background:#AE352F;color:#fff}.swi-button-red-small-default-regular:disabled{background:#E6C0BE;color:#fae7e6}.swi-button-blue-small-default-regular{background:#1E4F98;color:#fff;box-shadow:0 6px 16px #00000026;font-size:14px;font-weight:600;padding:8px 20px;min-height:36px;justify-content:center;align-items:center;display:inline-flex;border-radius:40px;transition:.1s;line-height:18px;border:0}.swi-button-blue-small-default-regular:hover{background:#1A4079;color:#fff}.swi-button-blue-small-default-regular:disabled{background:#879EC0;color:#c0cbdd}.swi-button-greyred-large-default-regular{background:#f0f2f3;color:#d14545;box-shadow:0 8px 12px #0000001a;font-size:22px;font-weight:600;padding:8px 20px;min-height:44px;justify-content:center;align-items:center;display:inline-flex;border-radius:40px;transition:.1s;line-height:28px;border:0}.swi-button-greyred-large-default-regular:hover{background:#e0e4e8;color:#d14545}.swi-button-greyred-large-default-regular:disabled{background:#F0F2F3;color:#bfbfbf}@media screen and (max-width: 1024px){.swi-button-greyred-large-default-regular{font-size:18px;min-height:40px;line-height:24px}}.swi-button-greyred-medium-default-regular{background:#f0f2f3;color:#d14545;box-shadow:0 8px 12px #0000001a;font-size:18px;font-weight:600;padding:8px 20px;min-height:40px;justify-content:center;align-items:center;display:inline-flex;border-radius:40px;transition:.1s;line-height:24px;border:0}.swi-button-greyred-medium-default-regular:hover{background:#e0e4e8;color:#d14545}.swi-button-greyred-medium-default-regular:disabled{background:#F0F2F3;color:#bfbfbf}@media screen and (max-width: 1024px){.swi-button-greyred-medium-default-regular{font-size:18px;min-height:40px;line-height:24px}}@media screen and (max-width: 767px){.swi-button-greyred-medium-default-regular{font-size:14px;min-height:36px;line-height:20px;box-shadow:0 6px 16px #00000026}}.swi-button-green-medium-default-regular{background:#2D912C;color:#fff;box-shadow:0 8px 12px #0000001a;font-size:18px;font-weight:600;padding:8px 20px;min-height:40px;justify-content:center;align-items:center;display:inline-flex;border-radius:40px;transition:.1s;line-height:24px;border:0}.swi-button-green-medium-default-regular:hover{background:#2D912C;color:#fff}@media screen and (max-width: 1024px){.swi-button-green-medium-default-regular{font-size:18px;min-height:40px;line-height:24px}}@media screen and (max-width: 767px){.swi-button-green-medium-default-regular{font-size:14px;min-height:36px;line-height:20px;box-shadow:0 6px 16px #00000026}}.swi-button-green-small-default-regular{background:#2D912C;color:#fff;box-shadow:0 6px 16px #00000026;font-size:14px;font-weight:600;padding:8px 20px;min-height:36px;justify-content:center;align-items:center;display:inline-flex;border-radius:40px;transition:.1s;line-height:18px;border:0}.swi-button-green-small-default-regular:hover{background:#2D912C;color:#fff}.swi-button-whitered-medium-default-regular{background:#ffffff;color:#d14545;box-shadow:0 8px 12px #0000001a;font-size:18px;font-weight:600;padding:8px 20px;min-height:40px;justify-content:center;align-items:center;display:inline-flex;border-radius:40px;transition:.1s;line-height:24px;border:0}.swi-button-whitered-medium-default-regular:hover{background:#e0e4e8;color:#d14545}@media screen and (max-width: 767px){.swi-button-whitered-medium-default-regular{font-size:14px;min-height:36px;line-height:20px}}.swi-button-whiteblue-large-default-regular{background:#FFFFFF;color:#1e4f98;box-shadow:0 8px 12px #0000001a;font-size:22px;font-weight:600;padding:8px 20px;min-height:44px;justify-content:center;align-items:center;display:inline-flex;border-radius:40px;transition:.1s;line-height:28px;border:0}.swi-button-whiteblue-large-default-regular:hover{background:#e0e4e8;color:#1e4f98}.swi-button-whiteblue-large-default-regular:disabled{background:#FFFFFF;color:#bfbfbf}@media screen and (max-width: 1024px){.swi-button-whiteblue-large-default-regular{font-size:18px;min-height:40px;line-height:24px}}.swi-button-whiteblue-small-default-regular{background:#ffffff;color:#1e4f98;box-shadow:0 6px 16px #00000026;font-size:14px;font-weight:600;padding:8px 20px;min-height:36px;justify-content:center;align-items:center;display:inline-flex;border-radius:40px;transition:.1s;line-height:18px;border:0}.swi-button-whiteblue-small-default-regular:hover{background:#e0e4e8;color:#1e4f98}.swi-button-whiteblue-small-default-regular:disabled{background:#FFFFFF;color:#bfbfbf}.swi-button-special-edit-greyred{background:#f0f2f3;color:#d14545;box-shadow:0 6px 16px #00000026;font-size:14px;font-weight:600;padding:5px 12px 5px 10px;min-height:28px;justify-content:center;align-items:center;display:inline-flex;border-radius:40px;transition:.1s;line-height:18px;border:0}.swi-button-special-edit-greyred svg path{fill:#d14545}.swi-button-special-edit-greywhite{background:#808080;color:#fff;box-shadow:0 6px 16px #00000026;font-size:14px;font-weight:600;padding:5px 12px 5px 10px;min-height:28px;justify-content:center;align-items:center;display:inline-flex;border-radius:40px;transition:.1s;line-height:18px;border:0}.swi-button-special-edit-greywhite svg path{fill:#fff}.swi-button-white-large-default-regular{background:#ffffff;color:#d14545;box-shadow:0 8px 12px #0000001a;font-size:22px;font-weight:600;padding:8px 20px;min-height:44px;justify-content:center;align-items:center;display:inline-flex;border-radius:40px;transition:.1s;line-height:28px;border:0}.swi-button-white-large-default-regular:hover{background:#e0e4e8;color:#d14545}@media screen and (max-width: 1024px){.swi-button-white-large-default-regular{font-size:18px;min-height:40px;line-height:24px}}.swi-button-greyblue-medium-default-regular{background:#f0f2f3;color:#1e4f98;box-shadow:0 8px 12px #0000001a;font-size:18px;font-weight:600;padding:8px 20px;min-height:40px;justify-content:center;align-items:center;display:inline-flex;border-radius:40px;transition:.1s;line-height:24px;border:0}.swi-button-greyblue-medium-default-regular:hover{background:#e0e4e8;color:#1e4f98}.swi-button-greyblue-medium-default-regular:disabled{background:#F0F2F3;color:#bfbfbf}@media screen and (max-width: 1024px){.swi-button-greyblue-medium-default-regular{font-size:18px;min-height:40px;line-height:24px}}@media screen and (max-width: 767px){.swi-button-greyblue-medium-default-regular{font-size:14px;min-height:36px;line-height:20px;box-shadow:0 6px 16px #00000026}}.swi-button-greyred-small-default-regular{background:#f0f2f3;color:#d14545;box-shadow:0 6px 16px #00000026;font-size:14px;font-weight:600;padding:8px 20px;min-height:36px;min-width:100px;justify-content:center;align-items:center;display:inline-flex;border-radius:40px;transition:.1s;line-height:18px;border:0}.swi-button-greyred-small-default-regular:hover{background:#e0e4e8;color:#d14545}.swi-button-greyred-small-default-regular:disabled{background:#F0F2F3;color:#bfbfbf}.swi-button-greyblue-small-default-regular{background:#f0f2f3;color:#1e4f98;box-shadow:0 6px 16px #00000026;font-size:14px;font-weight:600;padding:8px 20px;min-height:36px;justify-content:center;align-items:center;display:inline-flex;border-radius:40px;transition:.1s;line-height:18px;border:0}.swi-button-greyblue-small-default-regular:hover{background:#e0e4e8;color:#1e4f98}.swi-button-greyblue-small-default-regular:disabled{background:#F0F2F3;color:#bfbfbf}.swi-button-greyblue-small-default-regular:disabled svg path{stroke:#bfbfbf}.swi-button-white-default-small-regular{background:#ffffff;color:#d14545;box-shadow:0 6px 16px #00000026;font-size:14px;font-weight:600;padding:8px 20px;min-height:36px;justify-content:center;align-items:center;display:inline-flex;border-radius:40px;transition:.1s;line-height:18px;border:0}.swi-button-white-default-small-regular:hover{background:#f0f2f3;color:#d14545}.swi-button-white-small-default-regular{background:#ffffff;color:#1e4f98;box-shadow:0 6px 16px #00000026;font-size:14px;font-weight:600;padding:8px 20px;min-height:36px;justify-content:center;align-items:center;display:inline-flex;border-radius:40px;transition:.1s;line-height:18px;border:0}.swi-button-white-small-default-regular:hover{background:#e0e4e8;color:#1e4f98}.swi-button-darkgrey-small-default-regular{background:#9d9d9d;color:#fff;box-shadow:0 6px 16px #00000026;font-size:14px;font-weight:600;padding:8px 20px;min-height:36px;justify-content:center;align-items:center;display:inline-flex;border-radius:40px;transition:.1s;line-height:18px;border:0}.swi-button-special-expand-greyred{background:#f0f2f3;color:#d14545;box-shadow:0 6px 16px #00000026;font-size:14px;font-weight:600;padding:5px 12px 5px 10px;min-height:28px;justify-content:center;align-items:center;display:inline-flex;border-radius:40px;transition:.1s;line-height:18px;border:0}.swi-button-special-expand-greyred svg path{fill:#d14545}.swi-button-special-expand-greyblue{background:#f0f2f3;color:#1e4f98;box-shadow:0 6px 16px #00000026;font-size:14px;font-weight:600;padding:5px 12px 5px 10px;min-height:28px;justify-content:center;align-items:center;display:inline-flex;border-radius:40px;transition:.1s;line-height:18px;border:0}.swi-button-special-expand-greyblue svg path{fill:#1e4f98}.swi-button-special-expand-whiteblue{background:#1E4F98;color:#fff;box-shadow:0 6px 16px #00000026;font-size:14px;font-weight:600;padding:5px 12px 5px 10px;min-height:28px;justify-content:center;align-items:center;display:inline-flex;border-radius:40px;transition:.1s;line-height:18px;border:0}.swi-button-special-expand-whiteblue svg path{fill:#fff}.swi-button-white-medium-default-regular{background:#ffffff;color:#1e4f98;box-shadow:0 8px 12px #0000001a;font-size:18px;font-weight:600;padding:8px 20px;min-height:40px;justify-content:center;align-items:center;display:inline-flex;border-radius:40px;transition:.1s;line-height:24px;border:0}.swi-button-white-medium-default-regular:hover{background:#e0e4e8;color:#1e4f98}@media screen and (max-width: 767px){.swi-button-white-medium-default-regular{font-size:14px;min-height:36px;line-height:20px;box-shadow:0 6px 16px #00000026}}.swi-button-darkgreyblue-small-default-regular{background:#e0e4e8;color:#1e4f98!important;box-shadow:0 6px 16px #00000026;font-size:14px;font-weight:600!important;padding:8px 15px;min-height:36px;justify-content:center!important;align-items:center;display:inline-flex;border-radius:10px;transition:.1s;line-height:18px;border:0}.swi-button-darkgrey-small-medium-default-regular{background:#9d9d9d;color:#fff;box-shadow:0 10px 24px #0000001f;font-size:16px;font-weight:600;padding:8px 20px;min-height:40px;justify-content:center;align-items:center;display:inline-flex;border-radius:40px;transition:.1s;line-height:18px;border:0}.swi-button-darkgrey-small-medium-default-regular:hover{background:#9d9d9d;color:#fff}.swi-button-red-small-medium-default-regular{background:#d14545;color:#fff;box-shadow:0 10px 24px #0000001f;font-size:16px;font-weight:600;padding:8px 20px;min-height:40px;justify-content:center;align-items:center;display:inline-flex;border-radius:40px;transition:.1s;line-height:18px;border:0}.swi-button-red-small-medium-default-regular:hover{background:#AE352F;color:#fff}.popup-btn-fixed-width,.btn-fixed-width-regular{min-width:150px}@media screen and (max-width: 1024px){.popup-btn-fixed-width,.btn-fixed-width-regular{min-width:120px}}.medium-btn-fixed-width{min-width:130px}@media screen and (max-width: 1024px){.medium-btn-fixed-width{min-width:120px}}.swi-button-greyblue-large-default-regular{background:#f0f2f3;color:#1e4f98;box-shadow:0 8px 12px #0000001a;font-size:22px;font-weight:600;padding:8px 20px;min-height:44px;justify-content:center;align-items:center;display:inline-flex;border-radius:40px;transition:.1s;line-height:28px;border:0}.swi-button-greyblue-large-default-regular:hover{background:#e0e4e8;color:#1e4f98}.swi-button-greyblue-large-default-regular:disabled{background:#F0F2F3;color:#bfbfbf}@media screen and (max-width: 1024px){.swi-button-greyblue-large-default-regular{font-size:18px;min-height:40px;line-height:24px}}.swi-button-whiteblue-medium-default-regular{background:#FFFFFF;color:#1e4f98;box-shadow:0 8px 12px #0000001a;font-size:18px;font-weight:600;padding:8px 20px;min-height:40px;justify-content:center;align-items:center;display:inline-flex;border-radius:40px;transition:.1s;line-height:24px;border:0}.swi-button-whiteblue-medium-default-regular:hover{background:#e0e4e8;color:#1e4f98}.swi-button-whiteblue-medium-default-regular:disabled{background:#FFFFFF;color:#bfbfbf}@media screen and (max-width: 767px){.swi-button-whiteblue-medium-default-regular{font-size:14px;min-height:36px;line-height:20px;box-shadow:0 6px 16px #00000026}}.swi-button-red-tiny-default-regular{background:#d14545;color:#fff;box-shadow:0 6px 16px #00000026;font-size:14px;font-weight:600;padding:5px 10px;min-height:28px;justify-content:center;align-items:center;display:inline-flex;border-radius:40px;transition:.1s;line-height:17.6px;border:0}.swi-button-red-tiny-default-regular:hover{background:#AE352F;color:#fff}.swi-button-red-tiny-default-regular:disabled{background:#E6C0BE;color:#fae7e6}.swi-button-greyred-tiny-default-regular{background:#f0f2f3;color:#d14545;box-shadow:0 6px 16px #00000026;font-size:14px;font-weight:600;padding:5px 10px;min-height:28px;min-width:62px;justify-content:center;align-items:center;display:inline-flex;border-radius:40px;transition:.1s;line-height:17.6px;border:0}.swi-button-greyred-tiny-default-regular:hover{background:#e0e4e8;color:#d14545}.swi-button-greyred-tiny-default-regular:disabled{background:#F0F2F3;color:#bfbfbf}.swi-button-blue-tiny-default-regular{background:#1E4F98;color:#fff;box-shadow:0 6px 16px #00000026;font-size:14px;font-weight:600;padding:5px 10px;min-height:28px;justify-content:center;align-items:center;display:inline-flex;border-radius:40px;transition:.1s;line-height:17.6px;border:0}.swi-button-blue-tiny-default-regular:hover{background:#1A4079;color:#fff}.swi-button-blue-tiny-default-regular:disabled{background:#879EC0;color:#c0cbdd}.swi-button-greyblue-tiny-default-regular{background:#f0f2f3;color:#1e4f98;box-shadow:0 6px 16px #00000026;font-size:14px;font-weight:600;padding:5px 10px;min-height:28px;justify-content:center;align-items:center;display:inline-flex;border-radius:40px;transition:.1s;line-height:17.6px;border:0}.swi-button-greyblue-tiny-default-regular:hover{background:#e0e4e8;color:#1e4f98}.swi-button-greyblue-tiny-default-regular:disabled{background:#F0F2F3;color:#bfbfbf}.swi-button-greyblue-tiny-default-regular:disabled svg path{stroke:#bfbfbf}.swi-button-whiteblue-tiny-default-regular{background:#ffffff;color:#1e4f98;box-shadow:0 6px 16px #00000026;font-size:14px;font-weight:600;padding:5px 10px;min-height:28px;justify-content:center;align-items:center;display:inline-flex;border-radius:40px;transition:.1s;line-height:17.6px;border:0}.swi-button-whiteblue-tiny-default-regular:hover{background:#e0e4e8;color:#1e4f98}.swi-button-whiteblue-tiny-default-regular:disabled{background:#FFFFFF;color:#bfbfbf}.swi-button-special-expand-bluewhite{background:#FFFFFF;color:#1e4f98;box-shadow:0 6px 16px #00000026;font-size:14px;font-weight:600;padding:5px 12px 5px 10px;min-height:28px;justify-content:center;align-items:center;display:inline-flex;border-radius:40px;transition:.1s;line-height:18px;border:0}.swire-small-scrollbar::-webkit-scrollbar{width:5px}.swire-small-scrollbar::-webkit-scrollbar-track{background:#f0f2f3;border-radius:10px;box-shadow:0 6px 16px #00000014}.swire-small-scrollbar::-webkit-scrollbar-thumb{background:#c2c9d1;border-radius:10px}.swire-big-scrollbar::-webkit-scrollbar{width:10px}.swire-big-scrollbar::-webkit-scrollbar-track{background:#f0f2f3;border-radius:10px;box-shadow:0 6px 16px #00000014}.swire-big-scrollbar::-webkit-scrollbar-thumb{background:#c2c9d1;border-radius:10px}.pointer-event-none{pointer-events:none}.cursor-pointer{cursor:pointer}swire-bread-crumbs .swire-breadcrumb.standalone ul li a.selected{font-weight:600;color:#d14545}swire-bread-crumbs .swire-breadcrumb.standalone ul li:not(:first-child) a:hover{color:#d14545}swire-bread-crumbs .swire-breadcrumb.dashboard ul li a.selected{font-weight:600;color:#5477ab}swire-bread-crumbs .swire-breadcrumb.dashboard ul li:not(:first-child) a:hover{color:#5477ab}swire-bread-crumbs .swire-breadcrumb ul{display:flex;list-style:none;margin:0}swire-bread-crumbs .swire-breadcrumb ul li a{text-decoration:none}swire-bread-crumbs .swire-breadcrumb ul li span{padding:0 4px}\n"], directives: [{ type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }], encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.0.5", ngImport: i0, type: SwireBreadCrumbsComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'swire-bread-crumbs',
                    templateUrl: './swire-bread-crumbs.component.html',
                    styleUrls: ['./swire-bread-crumbs.component.scss'],
                    encapsulation: ViewEncapsulation.None,
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => SwireBreadCrumbsComponent),
                            multi: true
                        }
                    ]
                }]
        }], ctorParameters: function () { return []; }, propDecorators: { swireDynamicBreadCrumbsTexts: [{
                type: Input
            }], swireActiveBreadCrumbs: [{
                type: Input
            }], swireDynamicClassName: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3dpcmUtYnJlYWQtY3J1bWJzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3N3aXJlLWxpYi9zcmMvbGliL3N3aXJlLWZvcm0tY29udHJvbHMvc3dpcmUtYnJlYWQtY3J1bWJzL3N3aXJlLWJyZWFkLWNydW1icy5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zd2lyZS1saWIvc3JjL2xpYi9zd2lyZS1mb3JtLWNvbnRyb2xzL3N3aXJlLWJyZWFkLWNydW1icy9zd2lyZS1icmVhZC1jcnVtYnMuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFVLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3hGLE9BQU8sRUFBd0IsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7O0FBZXpFLE1BQU0sT0FBTyx5QkFBeUI7SUFxQnBDO1FBcEJTLGlDQUE0QixHQUFRLEVBQUUsQ0FBQztRQUN2QywyQkFBc0IsR0FBVyxFQUFFLENBQUM7UUFDcEMsMEJBQXFCLEdBQVcsRUFBRSxDQUFDO1FBRzVDLGFBQVEsR0FBWSxLQUFLLENBQUM7SUFlVixDQUFDO0lBZGpCLGdCQUFnQixDQUFDLEVBQU87UUFDdEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUNELGlCQUFpQixDQUFDLEVBQU87UUFDdkIsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQUNELFVBQVUsQ0FBQyxHQUFRO0lBQ25CLENBQUM7SUFDRCxPQUFPLENBQUMsSUFBUztRQUNmLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdEIsQ0FBQztJQUNELGdCQUFnQixDQUFDLFFBQWlCO1FBQ2hDLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO0lBQzNCLENBQUM7SUFHRCxRQUFRO0lBQ1IsQ0FBQzs7c0hBeEJVLHlCQUF5QjswR0FBekIseUJBQXlCLHlOQVJ6QjtRQUNUO1lBQ0UsT0FBTyxFQUFFLGlCQUFpQjtZQUMxQixXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLHlCQUF5QixDQUFDO1lBQ3hELEtBQUssRUFBRSxJQUFJO1NBQ1o7S0FDRiwwQkNkSCx3akJBb0JBOzJGREphLHlCQUF5QjtrQkFickMsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsb0JBQW9CO29CQUM5QixXQUFXLEVBQUUscUNBQXFDO29CQUNsRCxTQUFTLEVBQUUsQ0FBQyxxQ0FBcUMsQ0FBQztvQkFDbEQsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7b0JBQ3JDLFNBQVMsRUFBRTt3QkFDVDs0QkFDRSxPQUFPLEVBQUUsaUJBQWlCOzRCQUMxQixXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSwwQkFBMEIsQ0FBQzs0QkFDeEQsS0FBSyxFQUFFLElBQUk7eUJBQ1o7cUJBQ0Y7aUJBQ0Y7MEVBRVUsNEJBQTRCO3NCQUFwQyxLQUFLO2dCQUNHLHNCQUFzQjtzQkFBOUIsS0FBSztnQkFDRyxxQkFBcUI7c0JBQTdCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIGZvcndhcmRSZWYsIElucHV0LCBPbkluaXQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3N3aXJlLWJyZWFkLWNydW1icycsXG4gIHRlbXBsYXRlVXJsOiAnLi9zd2lyZS1icmVhZC1jcnVtYnMuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zd2lyZS1icmVhZC1jcnVtYnMuY29tcG9uZW50LnNjc3MnXSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgcHJvdmlkZXJzOiBbXG4gICAge1xuICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBTd2lyZUJyZWFkQ3J1bWJzQ29tcG9uZW50KSxcbiAgICAgIG11bHRpOiB0cnVlXG4gICAgfVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIFN3aXJlQnJlYWRDcnVtYnNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIENvbnRyb2xWYWx1ZUFjY2Vzc29yIHtcbiAgQElucHV0KCkgc3dpcmVEeW5hbWljQnJlYWRDcnVtYnNUZXh0czogYW55ID0gW107XG4gIEBJbnB1dCgpIHN3aXJlQWN0aXZlQnJlYWRDcnVtYnM6IHN0cmluZyA9ICcnO1xuICBASW5wdXQoKSBzd2lyZUR5bmFtaWNDbGFzc05hbWU6IHN0cmluZyA9ICcnO1xuICBvbkNoYW5nZTogYW55O1xuICBvblRvdWNoOiBhbnk7XG4gIGRpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IGFueSk6IHZvaWQge1xuICAgIHRoaXMub25DaGFuZ2UgPSBmbjtcbiAgfVxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogYW55KTogdm9pZCB7XG4gICAgdGhpcy5vblRvdWNoID0gZm47XG4gIH1cbiAgd3JpdGVWYWx1ZSh2YWw6IGFueSkge1xuICB9XG4gIG9uQ2xpY2sobmFtZTogYW55KSB7XG4gICAgdGhpcy5vbkNoYW5nZShuYW1lKTtcbiAgfVxuICBzZXREaXNhYmxlZFN0YXRlKGRpc2FibGVkOiBib29sZWFuKSB7XG4gICAgdGhpcy5kaXNhYmxlZCA9IGRpc2FibGVkO1xuICB9XG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gIH1cblxufVxuIiwiXG48ZGl2IGNsYXNzPVwic3dpcmUtYnJlYWRjcnVtYlwiIFtjbGFzc109XCJzd2lyZUR5bmFtaWNDbGFzc05hbWVcIj5cbiAgPHVsPlxuICAgIDxuZy1jb250YWluZXJcbiAgICAgICpuZ0Zvcj1cImxldCBpdGVtIG9mIHN3aXJlRHluYW1pY0JyZWFkQ3J1bWJzVGV4dHM7IGxldCBsYXN0ID0gbGFzdFwiXG4gICAgPlxuICAgICAgPGxpIGNsYXNzPVwicGFyYWdyYXBoLXJlZ3VsYXItMTVcIj5cbiAgICAgICAgPGFcbiAgICAgICAgICBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApXCJcbiAgICAgICAgICBjbGFzcz1cIlRleHQtOTBcIlxuICAgICAgICAgIFtuZ0NsYXNzXT1cInsnc2VsZWN0ZWQnOiAoKGxhc3QgJiYgKHN3aXJlQWN0aXZlQnJlYWRDcnVtYnMgPT0gJycpKSB8fFxuICAgICAgICAgIGl0ZW0gPT0gc3dpcmVBY3RpdmVCcmVhZENydW1icyl9XCJcbiAgICAgICAgICA+e3sgaXRlbSB9fTwvYVxuICAgICAgICA+XG4gICAgICAgIDxzcGFuICpuZ0lmPVwiIWxhc3RcIj4vPC9zcGFuPlxuICAgICAgPC9saT5cbiAgICAgIFxuICAgIDwvbmctY29udGFpbmVyPlxuICA8L3VsPlxuPC9kaXY+XG4iXX0=