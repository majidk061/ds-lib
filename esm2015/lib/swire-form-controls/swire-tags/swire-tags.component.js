import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class SwireTagsComponent {
    constructor() {
        this.dynamicTagTypeClass = '';
        this.dynamicTagBGColorClass = '';
        this.dynamicTagTextColorClass = '';
        this.swireDynamicIconClass = '';
        this.isShowLeftIcon = false;
        this.isShowCrossIcon = false;
        this.swireDynamicCrossIconClass = '';
        this.tagLabel = 'Label';
        this.isDisabled = false;
        this.swireDisableActiveClass = false;
        this.closeTagsCallback = new EventEmitter();
        this.isHideTab = false;
    }
    writeValue(obj) {
        throw new Error('Method not implemented.');
    }
    registerOnChange(fn) {
        throw new Error('Method not implemented.');
    }
    registerOnTouched(fn) {
        throw new Error('Method not implemented.');
    }
    setDisabledState(isDisabled) {
        throw new Error('Method not implemented.');
    }
    ngOnInit() {
    }
    closeTag() {
        this.isHideTab = true;
        this.closeTagsCallback.emit(true);
    }
    ngOnChanges() {
        this.isHideTab = false;
    }
}
SwireTagsComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.0.5", ngImport: i0, type: SwireTagsComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
SwireTagsComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.0.5", type: SwireTagsComponent, selector: "swire-tags", inputs: { dynamicTagTypeClass: "dynamicTagTypeClass", dynamicTagBGColorClass: "dynamicTagBGColorClass", dynamicTagTextColorClass: "dynamicTagTextColorClass", swireDynamicIconClass: "swireDynamicIconClass", isShowLeftIcon: "isShowLeftIcon", isShowCrossIcon: "isShowCrossIcon", swireDynamicCrossIconClass: "swireDynamicCrossIconClass", tagLabel: "tagLabel", isDisabled: "isDisabled", swireDisableActiveClass: "swireDisableActiveClass", isHideTab: "isHideTab" }, outputs: { closeTagsCallback: "closeTagsCallback" }, providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            multi: true,
            useExisting: SwireTagsComponent
        }
    ], usesOnChanges: true, ngImport: i0, template: "<div class=\"tag\"  *ngIf=\"!isHideTab\" [ngClass]=\"[dynamicTagBGColorClass, dynamicTagTextColorClass, swireDisableActiveClass ,dynamicTagTypeClass , dynamicTagTypeClass=='tags-type-outline' ? 'paragraph-semibold-14' : 'paragraph-regular-14']\">\n    <ng-container *ngIf=\"isShowLeftIcon\">\n        <span class=\"alert-icon\" [ngClass]=\"swireDynamicIconClass\">\n            <svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n            <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M6.02144 3.27917L1.76044 10.0968C0.78912 11.6509 1.90642 13.6668 3.7391 13.6668H12.2611C14.0938 13.6668 15.2111 11.6509 14.2398 10.0968L9.97877 3.27916C9.06488 1.81694 6.93533 1.81694 6.02144 3.27917ZM8.50002 5.33337C8.50002 5.05723 8.27616 4.83337 8.00002 4.83337C7.72388 4.83337 7.50002 5.05723 7.50002 5.33337V9.00004C7.50002 9.27618 7.72388 9.50004 8.00002 9.50004C8.27616 9.50004 8.50002 9.27618 8.50002 9.00004V5.33337ZM8.00002 11.6667C8.36821 11.6667 8.66669 11.3682 8.66669 11C8.66669 10.6319 8.36821 10.3334 8.00002 10.3334C7.63183 10.3334 7.33335 10.6319 7.33335 11C7.33335 11.3682 7.63183 11.6667 8.00002 11.6667Z\" fill=\"white\"/>\n            </svg>\n        </span>\n    </ng-container>\n    <span class=\"text\">{{tagLabel}}</span>\n    <ng-container *ngIf=\"isShowCrossIcon\">\n        <a href=\"javascript:void(0)\" (click)=\"closeTag()\" [ngClass]=\"swireDynamicCrossIconClass\" class=\"cross-icon\">\n            <svg width=\"14\" height=\"14\" viewBox=\"0 0 14 14\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M3.00501 3.00507C3.27838 2.73171 3.7216 2.73171 3.99496 3.00507L6.99999 6.0101L10.005 3.00507C10.2784 2.73171 10.7216 2.73171 10.995 3.00507C11.2683 3.27844 11.2683 3.72166 10.995 3.99502L7.98994 7.00005L10.995 10.0051C11.2683 10.2784 11.2683 10.7217 10.995 10.995C10.7216 11.2684 10.2784 11.2684 10.005 10.995L6.99999 7.99L3.99496 10.995C3.7216 11.2684 3.27838 11.2684 3.00501 10.995C2.73165 10.7217 2.73165 10.2784 3.00501 10.0051L6.01004 7.00005L3.00501 3.99502C2.73165 3.72166 2.73165 3.27844 3.00501 3.00507Z\" fill=\"white\"/>\n            </svg>                \n        </a>\n    </ng-container>\n</div>", styles: [".tag{padding:4px 10px;display:inline-flex;align-items:center;justify-content:center;height:28px;border-radius:6px}.tag span{display:flex;color:currentColor}.tag span.alert-icon{margin-right:6px}.tag a{display:flex;color:currentColor}.tag a.cross-icon{margin-left:6px}.tag svg path{fill:currentColor}.tag.tags-type-outline{border:1px solid currentColor}.tag.tags-type-filled{border:0}\n"], directives: [{ type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }], encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.0.5", ngImport: i0, type: SwireTagsComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'swire-tags',
                    templateUrl: './swire-tags.component.html',
                    styleUrls: ['./swire-tags.component.scss'],
                    encapsulation: ViewEncapsulation.None,
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            multi: true,
                            useExisting: SwireTagsComponent
                        }
                    ]
                }]
        }], ctorParameters: function () { return []; }, propDecorators: { dynamicTagTypeClass: [{
                type: Input
            }], dynamicTagBGColorClass: [{
                type: Input
            }], dynamicTagTextColorClass: [{
                type: Input
            }], swireDynamicIconClass: [{
                type: Input
            }], isShowLeftIcon: [{
                type: Input
            }], isShowCrossIcon: [{
                type: Input
            }], swireDynamicCrossIconClass: [{
                type: Input
            }], tagLabel: [{
                type: Input
            }], isDisabled: [{
                type: Input
            }], swireDisableActiveClass: [{
                type: Input
            }], closeTagsCallback: [{
                type: Output
            }], isHideTab: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3dpcmUtdGFncy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zd2lyZS1saWIvc3JjL2xpYi9zd2lyZS1mb3JtLWNvbnRyb2xzL3N3aXJlLXRhZ3Mvc3dpcmUtdGFncy5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zd2lyZS1saWIvc3JjL2xpYi9zd2lyZS1mb3JtLWNvbnRyb2xzL3N3aXJlLXRhZ3Mvc3dpcmUtdGFncy5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQVUsTUFBTSxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2xHLE9BQU8sRUFBd0IsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7O0FBZXpFLE1BQU0sT0FBTyxrQkFBa0I7SUFjN0I7UUFiUyx3QkFBbUIsR0FBRyxFQUFFLENBQUM7UUFDekIsMkJBQXNCLEdBQUcsRUFBRSxDQUFDO1FBQzVCLDZCQUF3QixHQUFHLEVBQUUsQ0FBQztRQUM5QiwwQkFBcUIsR0FBVyxFQUFFLENBQUM7UUFDbkMsbUJBQWMsR0FBWSxLQUFLLENBQUM7UUFDaEMsb0JBQWUsR0FBWSxLQUFLLENBQUM7UUFDakMsK0JBQTBCLEdBQVcsRUFBRSxDQUFDO1FBQ3hDLGFBQVEsR0FBVSxPQUFPLENBQUM7UUFDMUIsZUFBVSxHQUFXLEtBQUssQ0FBQztRQUMzQiw0QkFBdUIsR0FBVyxLQUFLLENBQUM7UUFDdkMsc0JBQWlCLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUN4QyxjQUFTLEdBQVcsS0FBSyxDQUFDO0lBRW5CLENBQUM7SUFDakIsVUFBVSxDQUFDLEdBQVE7UUFDakIsTUFBTSxJQUFJLEtBQUssQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFDRCxnQkFBZ0IsQ0FBQyxFQUFPO1FBQ3RCLE1BQU0sSUFBSSxLQUFLLENBQUMseUJBQXlCLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBQ0QsaUJBQWlCLENBQUMsRUFBTztRQUN2QixNQUFNLElBQUksS0FBSyxDQUFDLHlCQUF5QixDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUNELGdCQUFnQixDQUFFLFVBQW1CO1FBQ25DLE1BQU0sSUFBSSxLQUFLLENBQUMseUJBQXlCLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBRUQsUUFBUTtJQUNSLENBQUM7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7UUFDdEIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO0lBQ3pCLENBQUM7OytHQXRDVSxrQkFBa0I7bUdBQWxCLGtCQUFrQixzaUJBUmxCO1FBQ1Q7WUFDRSxPQUFPLEVBQUUsaUJBQWlCO1lBQzFCLEtBQUssRUFBRSxJQUFJO1lBQ1gsV0FBVyxFQUFFLGtCQUFrQjtTQUNoQztLQUNGLCtDQ2RILGt1RUFnQk07MkZEQU8sa0JBQWtCO2tCQWI5QixTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxZQUFZO29CQUN0QixXQUFXLEVBQUUsNkJBQTZCO29CQUMxQyxTQUFTLEVBQUUsQ0FBQyw2QkFBNkIsQ0FBQztvQkFDMUMsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7b0JBQ3JDLFNBQVMsRUFBRTt3QkFDVDs0QkFDRSxPQUFPLEVBQUUsaUJBQWlCOzRCQUMxQixLQUFLLEVBQUUsSUFBSTs0QkFDWCxXQUFXLG9CQUFvQjt5QkFDaEM7cUJBQ0Y7aUJBQ0Y7MEVBRVUsbUJBQW1CO3NCQUEzQixLQUFLO2dCQUNHLHNCQUFzQjtzQkFBOUIsS0FBSztnQkFDRyx3QkFBd0I7c0JBQWhDLEtBQUs7Z0JBQ0cscUJBQXFCO3NCQUE3QixLQUFLO2dCQUNHLGNBQWM7c0JBQXRCLEtBQUs7Z0JBQ0csZUFBZTtzQkFBdkIsS0FBSztnQkFDRywwQkFBMEI7c0JBQWxDLEtBQUs7Z0JBQ0csUUFBUTtzQkFBaEIsS0FBSztnQkFDRyxVQUFVO3NCQUFsQixLQUFLO2dCQUNHLHVCQUF1QjtzQkFBL0IsS0FBSztnQkFDSSxpQkFBaUI7c0JBQTFCLE1BQU07Z0JBQ0UsU0FBUztzQkFBakIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25Jbml0LCBPdXRwdXQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3N3aXJlLXRhZ3MnLFxuICB0ZW1wbGF0ZVVybDogJy4vc3dpcmUtdGFncy5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3N3aXJlLXRhZ3MuY29tcG9uZW50LnNjc3MnXSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgcHJvdmlkZXJzOiBbXG4gICAge1xuICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gICAgICBtdWx0aTogdHJ1ZSxcbiAgICAgIHVzZUV4aXN0aW5nOiBTd2lyZVRhZ3NDb21wb25lbnRcbiAgICB9XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgU3dpcmVUYWdzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBDb250cm9sVmFsdWVBY2Nlc3NvciB7XG4gIEBJbnB1dCgpIGR5bmFtaWNUYWdUeXBlQ2xhc3MgPSAnJztcbiAgQElucHV0KCkgZHluYW1pY1RhZ0JHQ29sb3JDbGFzcyA9ICcnO1xuICBASW5wdXQoKSBkeW5hbWljVGFnVGV4dENvbG9yQ2xhc3MgPSAnJztcbiAgQElucHV0KCkgc3dpcmVEeW5hbWljSWNvbkNsYXNzOiBzdHJpbmcgPSAnJztcbiAgQElucHV0KCkgaXNTaG93TGVmdEljb246IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgaXNTaG93Q3Jvc3NJY29uOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIHN3aXJlRHluYW1pY0Nyb3NzSWNvbkNsYXNzOiBzdHJpbmcgPSAnJztcbiAgQElucHV0KCkgdGFnTGFiZWw6c3RyaW5nID0gJ0xhYmVsJztcbiAgQElucHV0KCkgaXNEaXNhYmxlZDpib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIHN3aXJlRGlzYWJsZUFjdGl2ZUNsYXNzOmJvb2xlYW4gPSBmYWxzZTtcbiAgQE91dHB1dCgpIGNsb3NlVGFnc0NhbGxiYWNrID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBASW5wdXQoKSBpc0hpZGVUYWI6Ym9vbGVhbiA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG4gIHdyaXRlVmFsdWUob2JqOiBhbnkpOiB2b2lkIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ01ldGhvZCBub3QgaW1wbGVtZW50ZWQuJyk7XG4gIH1cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogYW55KTogdm9pZCB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdNZXRob2Qgbm90IGltcGxlbWVudGVkLicpO1xuICB9XG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBhbnkpOiB2b2lkIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ01ldGhvZCBub3QgaW1wbGVtZW50ZWQuJyk7XG4gIH1cbiAgc2V0RGlzYWJsZWRTdGF0ZT8oaXNEaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xuICAgIHRocm93IG5ldyBFcnJvcignTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC4nKTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICB9XG5cbiAgY2xvc2VUYWcoKXtcbiAgICB0aGlzLmlzSGlkZVRhYiA9IHRydWU7XG4gICAgdGhpcy5jbG9zZVRhZ3NDYWxsYmFjay5lbWl0KHRydWUpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoKXtcbiAgICB0aGlzLmlzSGlkZVRhYiA9IGZhbHNlO1xuICB9XG5cbn1cbiIsIjxkaXYgY2xhc3M9XCJ0YWdcIiAgKm5nSWY9XCIhaXNIaWRlVGFiXCIgW25nQ2xhc3NdPVwiW2R5bmFtaWNUYWdCR0NvbG9yQ2xhc3MsIGR5bmFtaWNUYWdUZXh0Q29sb3JDbGFzcywgc3dpcmVEaXNhYmxlQWN0aXZlQ2xhc3MgLGR5bmFtaWNUYWdUeXBlQ2xhc3MgLCBkeW5hbWljVGFnVHlwZUNsYXNzPT0ndGFncy10eXBlLW91dGxpbmUnID8gJ3BhcmFncmFwaC1zZW1pYm9sZC0xNCcgOiAncGFyYWdyYXBoLXJlZ3VsYXItMTQnXVwiPlxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJpc1Nob3dMZWZ0SWNvblwiPlxuICAgICAgICA8c3BhbiBjbGFzcz1cImFsZXJ0LWljb25cIiBbbmdDbGFzc109XCJzd2lyZUR5bmFtaWNJY29uQ2xhc3NcIj5cbiAgICAgICAgICAgIDxzdmcgd2lkdGg9XCIxNlwiIGhlaWdodD1cIjE2XCIgdmlld0JveD1cIjAgMCAxNiAxNlwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxuICAgICAgICAgICAgPHBhdGggZmlsbC1ydWxlPVwiZXZlbm9kZFwiIGNsaXAtcnVsZT1cImV2ZW5vZGRcIiBkPVwiTTYuMDIxNDQgMy4yNzkxN0wxLjc2MDQ0IDEwLjA5NjhDMC43ODkxMiAxMS42NTA5IDEuOTA2NDIgMTMuNjY2OCAzLjczOTEgMTMuNjY2OEgxMi4yNjExQzE0LjA5MzggMTMuNjY2OCAxNS4yMTExIDExLjY1MDkgMTQuMjM5OCAxMC4wOTY4TDkuOTc4NzcgMy4yNzkxNkM5LjA2NDg4IDEuODE2OTQgNi45MzUzMyAxLjgxNjk0IDYuMDIxNDQgMy4yNzkxN1pNOC41MDAwMiA1LjMzMzM3QzguNTAwMDIgNS4wNTcyMyA4LjI3NjE2IDQuODMzMzcgOC4wMDAwMiA0LjgzMzM3QzcuNzIzODggNC44MzMzNyA3LjUwMDAyIDUuMDU3MjMgNy41MDAwMiA1LjMzMzM3VjkuMDAwMDRDNy41MDAwMiA5LjI3NjE4IDcuNzIzODggOS41MDAwNCA4LjAwMDAyIDkuNTAwMDRDOC4yNzYxNiA5LjUwMDA0IDguNTAwMDIgOS4yNzYxOCA4LjUwMDAyIDkuMDAwMDRWNS4zMzMzN1pNOC4wMDAwMiAxMS42NjY3QzguMzY4MjEgMTEuNjY2NyA4LjY2NjY5IDExLjM2ODIgOC42NjY2OSAxMUM4LjY2NjY5IDEwLjYzMTkgOC4zNjgyMSAxMC4zMzM0IDguMDAwMDIgMTAuMzMzNEM3LjYzMTgzIDEwLjMzMzQgNy4zMzMzNSAxMC42MzE5IDcuMzMzMzUgMTFDNy4zMzMzNSAxMS4zNjgyIDcuNjMxODMgMTEuNjY2NyA4LjAwMDAyIDExLjY2NjdaXCIgZmlsbD1cIndoaXRlXCIvPlxuICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgIDwvc3Bhbj5cbiAgICA8L25nLWNvbnRhaW5lcj5cbiAgICA8c3BhbiBjbGFzcz1cInRleHRcIj57e3RhZ0xhYmVsfX08L3NwYW4+XG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImlzU2hvd0Nyb3NzSWNvblwiPlxuICAgICAgICA8YSBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApXCIgKGNsaWNrKT1cImNsb3NlVGFnKClcIiBbbmdDbGFzc109XCJzd2lyZUR5bmFtaWNDcm9zc0ljb25DbGFzc1wiIGNsYXNzPVwiY3Jvc3MtaWNvblwiPlxuICAgICAgICAgICAgPHN2ZyB3aWR0aD1cIjE0XCIgaGVpZ2h0PVwiMTRcIiB2aWV3Qm94PVwiMCAwIDE0IDE0XCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XG4gICAgICAgICAgICAgICAgPHBhdGggZmlsbC1ydWxlPVwiZXZlbm9kZFwiIGNsaXAtcnVsZT1cImV2ZW5vZGRcIiBkPVwiTTMuMDA1MDEgMy4wMDUwN0MzLjI3ODM4IDIuNzMxNzEgMy43MjE2IDIuNzMxNzEgMy45OTQ5NiAzLjAwNTA3TDYuOTk5OTkgNi4wMTAxTDEwLjAwNSAzLjAwNTA3QzEwLjI3ODQgMi43MzE3MSAxMC43MjE2IDIuNzMxNzEgMTAuOTk1IDMuMDA1MDdDMTEuMjY4MyAzLjI3ODQ0IDExLjI2ODMgMy43MjE2NiAxMC45OTUgMy45OTUwMkw3Ljk4OTk0IDcuMDAwMDVMMTAuOTk1IDEwLjAwNTFDMTEuMjY4MyAxMC4yNzg0IDExLjI2ODMgMTAuNzIxNyAxMC45OTUgMTAuOTk1QzEwLjcyMTYgMTEuMjY4NCAxMC4yNzg0IDExLjI2ODQgMTAuMDA1IDEwLjk5NUw2Ljk5OTk5IDcuOTlMMy45OTQ5NiAxMC45OTVDMy43MjE2IDExLjI2ODQgMy4yNzgzOCAxMS4yNjg0IDMuMDA1MDEgMTAuOTk1QzIuNzMxNjUgMTAuNzIxNyAyLjczMTY1IDEwLjI3ODQgMy4wMDUwMSAxMC4wMDUxTDYuMDEwMDQgNy4wMDAwNUwzLjAwNTAxIDMuOTk1MDJDMi43MzE2NSAzLjcyMTY2IDIuNzMxNjUgMy4yNzg0NCAzLjAwNTAxIDMuMDA1MDdaXCIgZmlsbD1cIndoaXRlXCIvPlxuICAgICAgICAgICAgPC9zdmc+ICAgICAgICAgICAgICAgIFxuICAgICAgICA8L2E+XG4gICAgPC9uZy1jb250YWluZXI+XG48L2Rpdj4iXX0=