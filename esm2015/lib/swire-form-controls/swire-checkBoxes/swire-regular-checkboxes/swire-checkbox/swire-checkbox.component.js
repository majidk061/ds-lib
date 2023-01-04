import { Component, Input, ViewEncapsulation } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
export class SwireCheckboxComponent {
    constructor() {
        this.szValue = false;
        this.touched = false;
        this.checked = false;
        this.isDisabled = false;
        this.ischecked = false;
        this.name = '';
        this.indeterminateCheckBoxLabel = "";
        this.swireDynamicClassName = '';
        this.swireDynamicIdName = '';
        this.onChange = (szValue) => { };
        this.onTouch = () => { };
    }
    writeValue(checked) {
        this.checked = checked;
    }
    registerOnChange(onChange) {
        this.onChange = onChange;
    }
    registerOnTouched(onTouched) {
        this.onTouch = onTouched;
    }
    markAsTouched() {
        if (!this.touched) {
            this.onTouch();
            this.touched = true;
        }
    }
    setDisabledState(isDisabled) {
        this.isDisabled = isDisabled;
    }
    onModelChange(e) {
        // Step 5a: bind the changes to the local value
        this.checked = e;
        // Step 5b: Handle what should happen on the outside, if something changes on the inside
        this.onChange(e);
    }
    ngOnInit() {
    }
}
SwireCheckboxComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.0.5", ngImport: i0, type: SwireCheckboxComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
SwireCheckboxComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.0.5", type: SwireCheckboxComponent, selector: "swire-checkbox", inputs: { isDisabled: "isDisabled", ischecked: "ischecked", name: "name", indeterminateCheckBoxLabel: "indeterminateCheckBoxLabel", swireDynamicClassName: "swireDynamicClassName", swireDynamicIdName: "swireDynamicIdName" }, providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            multi: true,
            useExisting: SwireCheckboxComponent
        }
    ], ngImport: i0, template: "<label class=\"swire-custom-checkbox right-check\" [ngClass]=\"swireDynamicClassName\" [id]=\"swireDynamicIdName\">\n  <input type=\"checkbox\" [ngModel]=\"checked\" [name]=\"name\" [disabled]=\"isDisabled\" (ngModelChange)=\"onModelChange($event)\">\n  <span class=\"paragraph-regular-16 Text-100 checkbox-text\">{{indeterminateCheckBoxLabel}}</span>\n  <span class=\"swire-Indeterminate-checkbox-checkmark\">\n    <svg\n      class=\"check-icon sw-icon\"\n      width=\"12\"\n      height=\"8\"\n      viewBox=\"0 0 12 8\"\n      fill=\"none\"\n      xmlns=\"http://www.w3.org/2000/svg\"\n    >\n      <path\n        fill-rule=\"evenodd\"\n        clip-rule=\"evenodd\"\n        d=\"M11.3657 0.234315C11.6781 0.546734 11.6781 1.05327 11.3657 1.36569L4.96571 7.76569C4.65329 8.0781 4.14676 8.0781 3.83434 7.76569L0.634339 4.56569C0.32192 4.25327 0.32192 3.74673 0.634339 3.43431C0.946758 3.1219 1.45329 3.1219 1.76571 3.43431L4.40002 6.06863L10.2343 0.234315C10.5468 -0.0781049 11.0533 -0.0781049 11.3657 0.234315Z\"\n        fill=\"#FCFCFD\"\n      />\n    </svg>\n  </span>\n</label>\n\n", styles: [""], directives: [{ type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i2.CheckboxControlValueAccessor, selector: "input[type=checkbox][formControlName],input[type=checkbox][formControl],input[type=checkbox][ngModel]" }, { type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i2.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }], encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.0.5", ngImport: i0, type: SwireCheckboxComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'swire-checkbox',
                    templateUrl: './swire-checkbox.component.html',
                    styleUrls: ['./swire-checkbox.component.scss'],
                    encapsulation: ViewEncapsulation.None,
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            multi: true,
                            useExisting: SwireCheckboxComponent
                        }
                    ]
                }]
        }], ctorParameters: function () { return []; }, propDecorators: { isDisabled: [{
                type: Input
            }], ischecked: [{
                type: Input
            }], name: [{
                type: Input
            }], indeterminateCheckBoxLabel: [{
                type: Input
            }], swireDynamicClassName: [{
                type: Input
            }], swireDynamicIdName: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3dpcmUtY2hlY2tib3guY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc3dpcmUtbGliL3NyYy9saWIvc3dpcmUtZm9ybS1jb250cm9scy9zd2lyZS1jaGVja0JveGVzL3N3aXJlLXJlZ3VsYXItY2hlY2tib3hlcy9zd2lyZS1jaGVja2JveC9zd2lyZS1jaGVja2JveC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zd2lyZS1saWIvc3JjL2xpYi9zd2lyZS1mb3JtLWNvbnRyb2xzL3N3aXJlLWNoZWNrQm94ZXMvc3dpcmUtcmVndWxhci1jaGVja2JveGVzL3N3aXJlLWNoZWNrYm94L3N3aXJlLWNoZWNrYm94LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFVLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzVFLE9BQU8sRUFBRSxpQkFBaUIsRUFBd0IsTUFBTSxnQkFBZ0IsQ0FBQzs7OztBQWV6RSxNQUFNLE9BQU8sc0JBQXNCO0lBd0NqQztRQXRDQSxZQUFPLEdBQVksS0FBSyxDQUFDO1FBQ3pCLFlBQU8sR0FBWSxLQUFLLENBQUM7UUFDekIsWUFBTyxHQUFZLEtBQUssQ0FBQztRQUNoQixlQUFVLEdBQVksS0FBSyxDQUFDO1FBQzVCLGNBQVMsR0FBWSxLQUFLLENBQUM7UUFDM0IsU0FBSSxHQUFXLEVBQUUsQ0FBQztRQUNsQiwrQkFBMEIsR0FBVyxFQUFFLENBQUM7UUFDeEMsMEJBQXFCLEdBQVcsRUFBRSxDQUFDO1FBQ25DLHVCQUFrQixHQUFVLEVBQUUsQ0FBQztRQUN4QyxhQUFRLEdBQUcsQ0FBQyxPQUFZLEVBQUUsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUNqQyxZQUFPLEdBQVEsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBNEJULENBQUM7SUEzQmpCLFVBQVUsQ0FBQyxPQUFnQjtRQUN6QixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztJQUN6QixDQUFDO0lBQ0QsZ0JBQWdCLENBQUMsUUFBYTtRQUM1QixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztJQUMzQixDQUFDO0lBQ0QsaUJBQWlCLENBQUMsU0FBYztRQUM5QixJQUFJLENBQUMsT0FBTyxHQUFHLFNBQVMsQ0FBQztJQUMzQixDQUFDO0lBQ0QsYUFBYTtRQUNYLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2pCLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNmLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1NBQ3JCO0lBQ0gsQ0FBQztJQUNELGdCQUFnQixDQUFDLFVBQW1CO1FBQ2xDLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO0lBRS9CLENBQUM7SUFDRCxhQUFhLENBQUMsQ0FBVTtRQUN0QiwrQ0FBK0M7UUFDL0MsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUM7UUFDakIsd0ZBQXdGO1FBQ3hGLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDbkIsQ0FBQztJQU1ELFFBQVE7SUFDUixDQUFDOzttSEE1Q1Usc0JBQXNCO3VHQUF0QixzQkFBc0IseVFBUnRCO1FBQ1Q7WUFDRSxPQUFPLEVBQUUsaUJBQWlCO1lBQzFCLEtBQUssRUFBRSxJQUFJO1lBQ1gsV0FBVyxFQUFFLHNCQUFzQjtTQUNwQztLQUNGLDBCQ2RILG9rQ0FzQkE7MkZETmEsc0JBQXNCO2tCQWJsQyxTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxnQkFBZ0I7b0JBQzFCLFdBQVcsRUFBRSxpQ0FBaUM7b0JBQzlDLFNBQVMsRUFBRSxDQUFDLGlDQUFpQyxDQUFDO29CQUM5QyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtvQkFDckMsU0FBUyxFQUFFO3dCQUNUOzRCQUNFLE9BQU8sRUFBRSxpQkFBaUI7NEJBQzFCLEtBQUssRUFBRSxJQUFJOzRCQUNYLFdBQVcsd0JBQXdCO3lCQUNwQztxQkFDRjtpQkFDRjswRUFNVSxVQUFVO3NCQUFsQixLQUFLO2dCQUNHLFNBQVM7c0JBQWpCLEtBQUs7Z0JBQ0csSUFBSTtzQkFBWixLQUFLO2dCQUNHLDBCQUEwQjtzQkFBbEMsS0FBSztnQkFDRyxxQkFBcUI7c0JBQTdCLEtBQUs7Z0JBQ0csa0JBQWtCO3NCQUExQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTkdfVkFMVUVfQUNDRVNTT1IsIENvbnRyb2xWYWx1ZUFjY2Vzc29yIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzd2lyZS1jaGVja2JveCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9zd2lyZS1jaGVja2JveC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3N3aXJlLWNoZWNrYm94LmNvbXBvbmVudC5zY3NzJ10sXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIHByb3ZpZGVyczogW1xuICAgIHtcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgICAgbXVsdGk6IHRydWUsXG4gICAgICB1c2VFeGlzdGluZzogU3dpcmVDaGVja2JveENvbXBvbmVudFxuICAgIH1cbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBTd2lyZUNoZWNrYm94Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBDb250cm9sVmFsdWVBY2Nlc3NvciB7XG4gIERpc2FibGVkOiBhbnk7XG4gIHN6VmFsdWU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgdG91Y2hlZDogYm9vbGVhbiA9IGZhbHNlO1xuICBjaGVja2VkOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIGlzRGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgaXNjaGVja2VkOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIG5hbWU6IHN0cmluZyA9ICcnO1xuICBASW5wdXQoKSBpbmRldGVybWluYXRlQ2hlY2tCb3hMYWJlbDogc3RyaW5nID0gXCJcIjtcbiAgQElucHV0KCkgc3dpcmVEeW5hbWljQ2xhc3NOYW1lOiBzdHJpbmcgPSAnJztcbiAgQElucHV0KCkgc3dpcmVEeW5hbWljSWROYW1lOnN0cmluZyA9ICcnO1xuICBvbkNoYW5nZSA9IChzelZhbHVlOiBhbnkpID0+IHsgfTtcbiAgb25Ub3VjaDogYW55ID0gKCkgPT4geyB9O1xuICB3cml0ZVZhbHVlKGNoZWNrZWQ6IGJvb2xlYW4pIHtcbiAgICB0aGlzLmNoZWNrZWQgPSBjaGVja2VkO1xuICB9XG4gIHJlZ2lzdGVyT25DaGFuZ2Uob25DaGFuZ2U6IGFueSkge1xuICAgIHRoaXMub25DaGFuZ2UgPSBvbkNoYW5nZTtcbiAgfVxuICByZWdpc3Rlck9uVG91Y2hlZChvblRvdWNoZWQ6IGFueSkge1xuICAgIHRoaXMub25Ub3VjaCA9IG9uVG91Y2hlZDtcbiAgfVxuICBtYXJrQXNUb3VjaGVkKCkge1xuICAgIGlmICghdGhpcy50b3VjaGVkKSB7XG4gICAgICB0aGlzLm9uVG91Y2goKTtcbiAgICAgIHRoaXMudG91Y2hlZCA9IHRydWU7XG4gICAgfVxuICB9XG4gIHNldERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZDogYm9vbGVhbikge1xuICAgIHRoaXMuaXNEaXNhYmxlZCA9IGlzRGlzYWJsZWQ7XG5cbiAgfVxuICBvbk1vZGVsQ2hhbmdlKGU6IGJvb2xlYW4pIHtcbiAgICAvLyBTdGVwIDVhOiBiaW5kIHRoZSBjaGFuZ2VzIHRvIHRoZSBsb2NhbCB2YWx1ZVxuICAgIHRoaXMuY2hlY2tlZCA9IGU7XG4gICAgLy8gU3RlcCA1YjogSGFuZGxlIHdoYXQgc2hvdWxkIGhhcHBlbiBvbiB0aGUgb3V0c2lkZSwgaWYgc29tZXRoaW5nIGNoYW5nZXMgb24gdGhlIGluc2lkZVxuICAgIHRoaXMub25DaGFuZ2UoZSk7XG4gIH1cblxuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgfVxufVxuIiwiPGxhYmVsIGNsYXNzPVwic3dpcmUtY3VzdG9tLWNoZWNrYm94IHJpZ2h0LWNoZWNrXCIgW25nQ2xhc3NdPVwic3dpcmVEeW5hbWljQ2xhc3NOYW1lXCIgW2lkXT1cInN3aXJlRHluYW1pY0lkTmFtZVwiPlxuICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgW25nTW9kZWxdPVwiY2hlY2tlZFwiIFtuYW1lXT1cIm5hbWVcIiBbZGlzYWJsZWRdPVwiaXNEaXNhYmxlZFwiIChuZ01vZGVsQ2hhbmdlKT1cIm9uTW9kZWxDaGFuZ2UoJGV2ZW50KVwiPlxuICA8c3BhbiBjbGFzcz1cInBhcmFncmFwaC1yZWd1bGFyLTE2IFRleHQtMTAwIGNoZWNrYm94LXRleHRcIj57e2luZGV0ZXJtaW5hdGVDaGVja0JveExhYmVsfX08L3NwYW4+XG4gIDxzcGFuIGNsYXNzPVwic3dpcmUtSW5kZXRlcm1pbmF0ZS1jaGVja2JveC1jaGVja21hcmtcIj5cbiAgICA8c3ZnXG4gICAgICBjbGFzcz1cImNoZWNrLWljb24gc3ctaWNvblwiXG4gICAgICB3aWR0aD1cIjEyXCJcbiAgICAgIGhlaWdodD1cIjhcIlxuICAgICAgdmlld0JveD1cIjAgMCAxMiA4XCJcbiAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgID5cbiAgICAgIDxwYXRoXG4gICAgICAgIGZpbGwtcnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICBjbGlwLXJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgZD1cIk0xMS4zNjU3IDAuMjM0MzE1QzExLjY3ODEgMC41NDY3MzQgMTEuNjc4MSAxLjA1MzI3IDExLjM2NTcgMS4zNjU2OUw0Ljk2NTcxIDcuNzY1NjlDNC42NTMyOSA4LjA3ODEgNC4xNDY3NiA4LjA3ODEgMy44MzQzNCA3Ljc2NTY5TDAuNjM0MzM5IDQuNTY1NjlDMC4zMjE5MiA0LjI1MzI3IDAuMzIxOTIgMy43NDY3MyAwLjYzNDMzOSAzLjQzNDMxQzAuOTQ2NzU4IDMuMTIxOSAxLjQ1MzI5IDMuMTIxOSAxLjc2NTcxIDMuNDM0MzFMNC40MDAwMiA2LjA2ODYzTDEwLjIzNDMgMC4yMzQzMTVDMTAuNTQ2OCAtMC4wNzgxMDQ5IDExLjA1MzMgLTAuMDc4MTA0OSAxMS4zNjU3IDAuMjM0MzE1WlwiXG4gICAgICAgIGZpbGw9XCIjRkNGQ0ZEXCJcbiAgICAgIC8+XG4gICAgPC9zdmc+XG4gIDwvc3Bhbj5cbjwvbGFiZWw+XG5cbiJdfQ==