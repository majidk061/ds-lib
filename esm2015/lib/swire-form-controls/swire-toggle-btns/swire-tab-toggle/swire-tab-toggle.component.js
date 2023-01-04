import { Component, Input, ViewEncapsulation } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class SwireTabToggleComponent {
    constructor() {
        this.swireDynamicClassName = '';
        this.items = [];
        this.Icon = false;
        this.szValue = null;
        this.disabled = false;
        this.onChange = (szValue) => { };
        this.onTouched = () => { };
    }
    writeValue(szValue) {
        this.szValue = szValue;
    }
    registerOnChange(onChange) {
        this.onChange = onChange;
    }
    registerOnTouched(onTouched) {
        this.onTouched = onTouched;
    }
    setDisabledState(disabled) {
        this.disabled = disabled;
    }
    ngOnInit() {
    }
    toggleButtonClick(type) {
        this.szValue = type;
        this.onChange(this.szValue);
    }
}
SwireTabToggleComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.0.5", ngImport: i0, type: SwireTabToggleComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
SwireTabToggleComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.0.5", type: SwireTabToggleComponent, selector: "swire-tab-toggle", inputs: { swireDynamicClassName: "swireDynamicClassName", items: "items", Icon: "Icon" }, providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            multi: true,
            useExisting: SwireTabToggleComponent
        }
    ], ngImport: i0, template: "<!-- tab toggle selector -->\n<div class=\"tab-toggle bg-grey-40\">\n  <button\n    [disabled]=\"disabled\"\n    class=\"paragraph-semibold-14 Text-80\"\n    *ngFor=\"let item of items\"\n    [ngClass]=\"{ active: item?.value == szValue }\"\n    (click)=\"toggleButtonClick(item?.value)\"\n  >\n    <svg\n      *ngIf=\"item?.showIcon\"\n      width=\"14\"\n      height=\"14\"\n      viewBox=\"0 0 14 14\"\n      fill=\"none\"\n      xmlns=\"http://www.w3.org/2000/svg\"\n    >\n      <path\n        d=\"M2.04738 4.55013C1.45938 4.55013 1.10938 4.18613 1.10938 3.66813C1.10938 3.15013 1.45938 2.78613 2.04738 2.78613C2.63538 2.78613 2.98538 3.15013 2.98538 3.66813C2.98538 4.18613 2.63538 4.55013 2.04738 4.55013ZM2.04738 8.05013C1.45938 8.05013 1.10938 7.68613 1.10938 7.16813C1.10938 6.65013 1.45938 6.28613 2.04738 6.28613C2.63538 6.28613 2.98538 6.65013 2.98538 7.16813C2.98538 7.68613 2.63538 8.05013 2.04738 8.05013ZM2.04738 11.5501C1.45938 11.5501 1.10938 11.1861 1.10938 10.6681C1.10938 10.1501 1.45938 9.78613 2.04738 9.78613C2.63538 9.78613 2.98538 10.1501 2.98538 10.6681C2.98538 11.1861 2.63538 11.5501 2.04738 11.5501ZM4.66537 3.61213C4.66537 3.36013 4.87538 3.15013 5.14138 3.15013H12.3654C12.6174 3.15013 12.8274 3.36013 12.8414 3.61213C12.8414 3.86413 12.6314 4.07413 12.3654 4.08813H5.14138C4.88938 4.08813 4.67938 3.87813 4.66537 3.61213ZM4.66537 7.11213C4.66537 6.86013 4.87538 6.65013 5.14138 6.65013H12.3654C12.6174 6.65013 12.8274 6.86013 12.8414 7.11213C12.8554 7.36413 12.6314 7.57413 12.3654 7.58813H5.14138C4.88938 7.58813 4.67938 7.37813 4.66537 7.11213ZM4.66537 10.6121C4.66537 10.3601 4.87538 10.1501 5.14138 10.1501H12.3654C12.6174 10.1501 12.8274 10.3601 12.8414 10.6121C12.8554 10.8641 12.6314 11.0741 12.3654 11.0881H5.14138C4.88938 11.0881 4.67938 10.8781 4.66537 10.6121Z\"\n        fill=\"#808080\"\n      />\n    </svg>\n    {{ item?.label }}\n  </button>\n</div>\n", styles: [".tab-toggle{border:1px solid #91979D;border-radius:8px;display:inline-flex}.tab-toggle button{display:flex;justify-content:center;align-items:center;height:100%;min-width:72px;background:transparent;border:1px transparent solid;min-height:30px;box-sizing:border-box;border-radius:8px;padding:4px 10px;cursor:pointer}.tab-toggle button svg{margin-right:5px}.tab-toggle button:disabled{cursor:default}.tab-toggle button.active{background:#1E4F98;color:#fff;border:1px solid white}.tab-toggle button.active svg path{fill:#fcfcfd}\n"], directives: [{ type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }], encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.0.5", ngImport: i0, type: SwireTabToggleComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'swire-tab-toggle',
                    templateUrl: './swire-tab-toggle.component.html',
                    styleUrls: ['./swire-tab-toggle.component.scss'],
                    encapsulation: ViewEncapsulation.None,
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            multi: true,
                            useExisting: SwireTabToggleComponent
                        }
                    ]
                }]
        }], ctorParameters: function () { return []; }, propDecorators: { swireDynamicClassName: [{
                type: Input
            }], items: [{
                type: Input
            }], Icon: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3dpcmUtdGFiLXRvZ2dsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zd2lyZS1saWIvc3JjL2xpYi9zd2lyZS1mb3JtLWNvbnRyb2xzL3N3aXJlLXRvZ2dsZS1idG5zL3N3aXJlLXRhYi10b2dnbGUvc3dpcmUtdGFiLXRvZ2dsZS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zd2lyZS1saWIvc3JjL2xpYi9zd2lyZS1mb3JtLWNvbnRyb2xzL3N3aXJlLXRvZ2dsZS1idG5zL3N3aXJlLXRhYi10b2dnbGUvc3dpcmUtdGFiLXRvZ2dsZS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBVSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM1RSxPQUFPLEVBQXdCLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7OztBQWV6RSxNQUFNLE9BQU8sdUJBQXVCO0lBVWxDO1FBUlMsMEJBQXFCLEdBQVcsRUFBRSxDQUFDO1FBQ25DLFVBQUssR0FBUSxFQUFFLENBQUM7UUFDaEIsU0FBSSxHQUFZLEtBQUssQ0FBQztRQUMvQixZQUFPLEdBQVEsSUFBSSxDQUFDO1FBQ3BCLGFBQVEsR0FBUyxLQUFLLENBQUE7UUFDdEIsYUFBUSxHQUFHLENBQUMsT0FBWSxFQUFFLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDakMsY0FBUyxHQUFHLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUVOLENBQUM7SUFFakIsVUFBVSxDQUFDLE9BQVk7UUFDckIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7SUFDekIsQ0FBQztJQUVELGdCQUFnQixDQUFDLFFBQWE7UUFDNUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7SUFDM0IsQ0FBQztJQUVELGlCQUFpQixDQUFDLFNBQWM7UUFDOUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7SUFDN0IsQ0FBQztJQUdELGdCQUFnQixDQUFDLFFBQWlCO1FBQ2hDLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO0lBQzNCLENBQUM7SUFFRCxRQUFRO0lBQ1IsQ0FBQztJQUNELGlCQUFpQixDQUFDLElBQWE7UUFDN0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDcEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDOUIsQ0FBQzs7b0hBbENVLHVCQUF1Qjt3R0FBdkIsdUJBQXVCLHFJQVJ2QjtRQUNUO1lBQ0UsT0FBTyxFQUFFLGlCQUFpQjtZQUMxQixLQUFLLEVBQUUsSUFBSTtZQUNYLFdBQVcsRUFBRSx1QkFBdUI7U0FDckM7S0FDRiwwQkNkSCxnM0RBeUJBOzJGRFRhLHVCQUF1QjtrQkFibkMsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsa0JBQWtCO29CQUM1QixXQUFXLEVBQUUsbUNBQW1DO29CQUNoRCxTQUFTLEVBQUUsQ0FBQyxtQ0FBbUMsQ0FBQztvQkFDaEQsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7b0JBQ3JDLFNBQVMsRUFBRTt3QkFDVDs0QkFDRSxPQUFPLEVBQUUsaUJBQWlCOzRCQUMxQixLQUFLLEVBQUUsSUFBSTs0QkFDWCxXQUFXLHlCQUF5Qjt5QkFDckM7cUJBQ0Y7aUJBQ0Y7MEVBR1UscUJBQXFCO3NCQUE3QixLQUFLO2dCQUNHLEtBQUs7c0JBQWIsS0FBSztnQkFDRyxJQUFJO3NCQUFaLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3N3aXJlLXRhYi10b2dnbGUnLFxuICB0ZW1wbGF0ZVVybDogJy4vc3dpcmUtdGFiLXRvZ2dsZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3N3aXJlLXRhYi10b2dnbGUuY29tcG9uZW50LnNjc3MnXSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgcHJvdmlkZXJzOiBbXG4gICAge1xuICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gICAgICBtdWx0aTogdHJ1ZSxcbiAgICAgIHVzZUV4aXN0aW5nOiBTd2lyZVRhYlRvZ2dsZUNvbXBvbmVudFxuICAgIH1cbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBTd2lyZVRhYlRvZ2dsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCxDb250cm9sVmFsdWVBY2Nlc3NvciB7XG5cbiAgQElucHV0KCkgc3dpcmVEeW5hbWljQ2xhc3NOYW1lOiBzdHJpbmcgPSAnJztcbiAgQElucHV0KCkgaXRlbXM6IGFueSA9IFtdO1xuICBASW5wdXQoKSBJY29uOiBib29sZWFuID0gZmFsc2U7XG4gIHN6VmFsdWU6IGFueSA9IG51bGw7XG4gIGRpc2FibGVkOmJvb2xlYW49ZmFsc2VcbiAgb25DaGFuZ2UgPSAoc3pWYWx1ZTogYW55KSA9PiB7IH07XG4gIG9uVG91Y2hlZCA9ICgpID0+IHsgfTtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIHdyaXRlVmFsdWUoc3pWYWx1ZTogYW55KSB7XG4gICAgdGhpcy5zelZhbHVlID0gc3pWYWx1ZTtcbiAgfVxuXG4gIHJlZ2lzdGVyT25DaGFuZ2Uob25DaGFuZ2U6IGFueSkge1xuICAgIHRoaXMub25DaGFuZ2UgPSBvbkNoYW5nZTtcbiAgfVxuXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKG9uVG91Y2hlZDogYW55KSB7XG4gICAgdGhpcy5vblRvdWNoZWQgPSBvblRvdWNoZWQ7XG4gIH1cblxuXG4gIHNldERpc2FibGVkU3RhdGUoZGlzYWJsZWQ6IGJvb2xlYW4pIHtcbiAgICB0aGlzLmRpc2FibGVkID0gZGlzYWJsZWQ7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgfVxuICB0b2dnbGVCdXR0b25DbGljayh0eXBlOiBib29sZWFuKSB7XG4gICAgdGhpcy5zelZhbHVlID0gdHlwZTtcbiAgICB0aGlzLm9uQ2hhbmdlKHRoaXMuc3pWYWx1ZSk7XG4gIH1cblxufVxuIiwiPCEtLSB0YWIgdG9nZ2xlIHNlbGVjdG9yIC0tPlxuPGRpdiBjbGFzcz1cInRhYi10b2dnbGUgYmctZ3JleS00MFwiPlxuICA8YnV0dG9uXG4gICAgW2Rpc2FibGVkXT1cImRpc2FibGVkXCJcbiAgICBjbGFzcz1cInBhcmFncmFwaC1zZW1pYm9sZC0xNCBUZXh0LTgwXCJcbiAgICAqbmdGb3I9XCJsZXQgaXRlbSBvZiBpdGVtc1wiXG4gICAgW25nQ2xhc3NdPVwieyBhY3RpdmU6IGl0ZW0/LnZhbHVlID09IHN6VmFsdWUgfVwiXG4gICAgKGNsaWNrKT1cInRvZ2dsZUJ1dHRvbkNsaWNrKGl0ZW0/LnZhbHVlKVwiXG4gID5cbiAgICA8c3ZnXG4gICAgICAqbmdJZj1cIml0ZW0/LnNob3dJY29uXCJcbiAgICAgIHdpZHRoPVwiMTRcIlxuICAgICAgaGVpZ2h0PVwiMTRcIlxuICAgICAgdmlld0JveD1cIjAgMCAxNCAxNFwiXG4gICAgICBmaWxsPVwibm9uZVwiXG4gICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICA+XG4gICAgICA8cGF0aFxuICAgICAgICBkPVwiTTIuMDQ3MzggNC41NTAxM0MxLjQ1OTM4IDQuNTUwMTMgMS4xMDkzOCA0LjE4NjEzIDEuMTA5MzggMy42NjgxM0MxLjEwOTM4IDMuMTUwMTMgMS40NTkzOCAyLjc4NjEzIDIuMDQ3MzggMi43ODYxM0MyLjYzNTM4IDIuNzg2MTMgMi45ODUzOCAzLjE1MDEzIDIuOTg1MzggMy42NjgxM0MyLjk4NTM4IDQuMTg2MTMgMi42MzUzOCA0LjU1MDEzIDIuMDQ3MzggNC41NTAxM1pNMi4wNDczOCA4LjA1MDEzQzEuNDU5MzggOC4wNTAxMyAxLjEwOTM4IDcuNjg2MTMgMS4xMDkzOCA3LjE2ODEzQzEuMTA5MzggNi42NTAxMyAxLjQ1OTM4IDYuMjg2MTMgMi4wNDczOCA2LjI4NjEzQzIuNjM1MzggNi4yODYxMyAyLjk4NTM4IDYuNjUwMTMgMi45ODUzOCA3LjE2ODEzQzIuOTg1MzggNy42ODYxMyAyLjYzNTM4IDguMDUwMTMgMi4wNDczOCA4LjA1MDEzWk0yLjA0NzM4IDExLjU1MDFDMS40NTkzOCAxMS41NTAxIDEuMTA5MzggMTEuMTg2MSAxLjEwOTM4IDEwLjY2ODFDMS4xMDkzOCAxMC4xNTAxIDEuNDU5MzggOS43ODYxMyAyLjA0NzM4IDkuNzg2MTNDMi42MzUzOCA5Ljc4NjEzIDIuOTg1MzggMTAuMTUwMSAyLjk4NTM4IDEwLjY2ODFDMi45ODUzOCAxMS4xODYxIDIuNjM1MzggMTEuNTUwMSAyLjA0NzM4IDExLjU1MDFaTTQuNjY1MzcgMy42MTIxM0M0LjY2NTM3IDMuMzYwMTMgNC44NzUzOCAzLjE1MDEzIDUuMTQxMzggMy4xNTAxM0gxMi4zNjU0QzEyLjYxNzQgMy4xNTAxMyAxMi44Mjc0IDMuMzYwMTMgMTIuODQxNCAzLjYxMjEzQzEyLjg0MTQgMy44NjQxMyAxMi42MzE0IDQuMDc0MTMgMTIuMzY1NCA0LjA4ODEzSDUuMTQxMzhDNC44ODkzOCA0LjA4ODEzIDQuNjc5MzggMy44NzgxMyA0LjY2NTM3IDMuNjEyMTNaTTQuNjY1MzcgNy4xMTIxM0M0LjY2NTM3IDYuODYwMTMgNC44NzUzOCA2LjY1MDEzIDUuMTQxMzggNi42NTAxM0gxMi4zNjU0QzEyLjYxNzQgNi42NTAxMyAxMi44Mjc0IDYuODYwMTMgMTIuODQxNCA3LjExMjEzQzEyLjg1NTQgNy4zNjQxMyAxMi42MzE0IDcuNTc0MTMgMTIuMzY1NCA3LjU4ODEzSDUuMTQxMzhDNC44ODkzOCA3LjU4ODEzIDQuNjc5MzggNy4zNzgxMyA0LjY2NTM3IDcuMTEyMTNaTTQuNjY1MzcgMTAuNjEyMUM0LjY2NTM3IDEwLjM2MDEgNC44NzUzOCAxMC4xNTAxIDUuMTQxMzggMTAuMTUwMUgxMi4zNjU0QzEyLjYxNzQgMTAuMTUwMSAxMi44Mjc0IDEwLjM2MDEgMTIuODQxNCAxMC42MTIxQzEyLjg1NTQgMTAuODY0MSAxMi42MzE0IDExLjA3NDEgMTIuMzY1NCAxMS4wODgxSDUuMTQxMzhDNC44ODkzOCAxMS4wODgxIDQuNjc5MzggMTAuODc4MSA0LjY2NTM3IDEwLjYxMjFaXCJcbiAgICAgICAgZmlsbD1cIiM4MDgwODBcIlxuICAgICAgLz5cbiAgICA8L3N2Zz5cbiAgICB7eyBpdGVtPy5sYWJlbCB9fVxuICA8L2J1dHRvbj5cbjwvZGl2PlxuIl19