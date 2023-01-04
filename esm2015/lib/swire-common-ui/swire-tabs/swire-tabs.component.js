import { Component, Input, ViewChild, ViewEncapsulation } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class SwireTabsComponent {
    constructor() {
        this.isPrimary = true;
        this.isShowLeftArrow = false;
        this.isShowRightArrow = false;
        this.szRadioClass = 'default';
        this.swireDynamicDivWidth = '350';
        this.ulWidth = '';
        this.liWidth = '';
        this.isDisabled = false;
        this.swiDynamicClassForTabs = '';
        this.activeClassName = '';
        this.activeIndex = 0;
        this.onChange = (szValue) => { };
        this.onTouch = () => { };
        this.touched = false;
        this.disabled = false;
        this.onTouched = () => { };
    }
    ngOnInit() {
        console.log("tabsDataList>>>>>>>>>>>>.", this.tabsDataList);
    }
    ngAfterViewInit() {
        var _a, _b, _c, _d;
        this.ulWidth = (_b = (_a = this.mySwireTabUl) === null || _a === void 0 ? void 0 : _a.nativeElement) === null || _b === void 0 ? void 0 : _b.offsetWidth;
        this.liWidth = (_d = (_c = this.mySwireTabUlLi) === null || _c === void 0 ? void 0 : _c.nativeElement) === null || _d === void 0 ? void 0 : _d.offsetWidth;
    }
    writeValue(obj) {
        this.activeIndex = obj;
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouch = fn;
    }
    setDisabledState(isDisabled) {
        this.isDisabled = isDisabled;
    }
    onChangeHandler(e) {
        this.markAsTouched();
        if (!this.disabled) {
            this.onChange(this.activeIndex);
        }
    }
    markAsTouched() {
        if (!this.touched) {
            this.onTouched();
            this.touched = true;
        }
    }
    updateActiveTab(index) {
        this.activeIndex = index;
        this.onChangeHandler(this.activeIndex);
        if (this.szRadioClass == 'bg-grey-40') {
            this.szRadioClass = 'active';
        }
        else {
            this.szRadioClass = '';
        }
    }
    scroll(name) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
        this.activeClassName = name;
        if (name == 'left') {
            (_b = (_a = this.mySwireTabUl) === null || _a === void 0 ? void 0 : _a.nativeElement) === null || _b === void 0 ? void 0 : _b.scrollTo({ left: (((_d = (_c = this.mySwireTabUl) === null || _c === void 0 ? void 0 : _c.nativeElement) === null || _d === void 0 ? void 0 : _d.scrollLeft) - ((_f = (_e = this.mySwireTabUlLi) === null || _e === void 0 ? void 0 : _e.nativeElement) === null || _f === void 0 ? void 0 : _f.offsetWidth)), behavior: 'smooth' });
        }
        else if (name == 'right') {
            (_h = (_g = this.mySwireTabUl) === null || _g === void 0 ? void 0 : _g.nativeElement) === null || _h === void 0 ? void 0 : _h.scrollTo({ left: (((_k = (_j = this.mySwireTabUl) === null || _j === void 0 ? void 0 : _j.nativeElement) === null || _k === void 0 ? void 0 : _k.scrollLeft) + ((_m = (_l = this.mySwireTabUlLi) === null || _l === void 0 ? void 0 : _l.nativeElement) === null || _m === void 0 ? void 0 : _m.offsetWidth)), behavior: 'smooth' });
        }
    }
}
SwireTabsComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.0.5", ngImport: i0, type: SwireTabsComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
SwireTabsComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.0.5", type: SwireTabsComponent, selector: "swire-tabs", inputs: { isPrimary: "isPrimary", tabsDataList: "tabsDataList", isShowLeftArrow: "isShowLeftArrow", isShowRightArrow: "isShowRightArrow", szRadioClass: "szRadioClass", swireDynamicDivWidth: "swireDynamicDivWidth", isDisabled: "isDisabled", swiDynamicClassForTabs: "swiDynamicClassForTabs" }, providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            multi: true,
            useExisting: SwireTabsComponent
        }
    ], viewQueries: [{ propertyName: "mySwireTabUl", first: true, predicate: ["mySwireTabUl"], descendants: true }, { propertyName: "mySwireTabUlLi", first: true, predicate: ["mySwireTabUlLi"], descendants: true }], ngImport: i0, template: "<div class=\"tab\" [ngStyle]=\"{ width: swireDynamicDivWidth + 'px' }\">\n  <ul\n    #mySwireTabUl\n    [ngClass]=\"isPrimary ? 'primary-tab' : 'secondary-tab'\"\n    [ngStyle]=\"{\n      padding: isShowLeftArrow && isShowRightArrow ? '0 40px 0 40px' : ''\n    }\"\n  >\n    <li #mySwireTabUlLi *ngFor=\"let list of tabsDataList; let i = index\">\n      <a\n        href=\"javascript:void(0)\"\n        [ngClass]=\"{ active: list?.active }\"\n        class=\"{{ list?.swiDynamicClass }}\"\n        [ngClass]=\"swiDynamicClassForTabs\"\n        (click)=\"updateActiveTab(i)\"\n      >\n        {{ list.tabTitle }}\n      </a>\n    </li>\n  </ul>\n  <!-- scroll btn -->\n  <a\n    href=\"javascript:void(0)\"\n    [ngClass]=\"activeClassName == 'left' ? 'active' : ''\"\n    class=\"left-scroll-btn scroll-btn\"\n    *ngIf=\"isShowLeftArrow\"\n    (click)=\"scroll('left')\"\n  >\n    <svg\n      width=\"66\"\n      height=\"72\"\n      viewBox=\"0 0 66 72\"\n      fill=\"none\"\n      xmlns=\"http://www.w3.org/2000/svg\"\n    >\n      <g filter=\"url(#filter0_d_4697_4349)\">\n        <rect x=\"20\" y=\"12\" width=\"26\" height=\"32\" rx=\"13\" fill=\"#F9FAFA\" />\n        <path\n          d=\"M35.6599 31.9145C35.9552 32.2438 35.9277 32.7501 35.5984 33.0454C35.2691 33.3407 34.7628 33.3131 34.4675 32.9838C34.4675 32.9838 30.6129 28.7842 30.3401 28.48C30.0672 28.1758 30.0672 27.8206 30.3401 27.5164L34.4675 23.0162C34.7628 22.6869 35.2691 22.6593 35.5984 22.9546C35.9277 23.2499 35.9552 23.7562 35.6599 24.0855L32.012 28L35.6599 31.9145Z\"\n          fill=\"#1E4F98\"\n        />\n      </g>\n      <defs>\n        <filter\n          id=\"filter0_d_4697_4349\"\n          x=\"0\"\n          y=\"0\"\n          width=\"66\"\n          height=\"72\"\n          filterUnits=\"userSpaceOnUse\"\n          color-interpolation-filters=\"sRGB\"\n        >\n          <feFlood flood-opacity=\"0\" result=\"BackgroundImageFix\" />\n          <feColorMatrix\n            in=\"SourceAlpha\"\n            type=\"matrix\"\n            values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0\"\n            result=\"hardAlpha\"\n          />\n          <feOffset dy=\"8\" />\n          <feGaussianBlur stdDeviation=\"10\" />\n          <feColorMatrix\n            type=\"matrix\"\n            values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0\"\n          />\n          <feBlend\n            mode=\"normal\"\n            in2=\"BackgroundImageFix\"\n            result=\"effect1_dropShadow_4697_4349\"\n          />\n          <feBlend\n            mode=\"normal\"\n            in=\"SourceGraphic\"\n            in2=\"effect1_dropShadow_4697_4349\"\n            result=\"shape\"\n          />\n        </filter>\n      </defs>\n    </svg>\n  </a>\n  <a\n    href=\"javascript:void(0)\"\n    [ngClass]=\"activeClassName == 'right' ? 'active' : ''\"\n    class=\"right-scroll-btn scroll-btn\"\n    *ngIf=\"isShowRightArrow\"\n    (click)=\"scroll('right')\"\n  >\n    <svg\n      width=\"66\"\n      height=\"72\"\n      viewBox=\"0 0 66 72\"\n      fill=\"none\"\n      xmlns=\"http://www.w3.org/2000/svg\"\n    >\n      <g filter=\"url(#filter0_d_4697_4359)\">\n        <rect\n          width=\"26\"\n          height=\"32\"\n          rx=\"13\"\n          transform=\"matrix(-1 8.74228e-08 8.74228e-08 1 46 12)\"\n          fill=\"#F9FAFA\"\n        />\n        <path\n          d=\"M30.3401 31.9145C30.0448 32.2438 30.0723 32.7501 30.4016 33.0454C30.7309 33.3407 31.2372 33.3131 31.5325 32.9838C31.5325 32.9838 35.3871 28.7842 35.6599 28.48C35.9328 28.1758 35.9328 27.8206 35.6599 27.5164L31.5325 23.0162C31.2372 22.6869 30.7309 22.6593 30.4016 22.9546C30.0723 23.2499 30.0448 23.7562 30.3401 24.0855L33.988 28L30.3401 31.9145Z\"\n          fill=\"#1E4F98\"\n        />\n      </g>\n      <defs>\n        <filter\n          id=\"filter0_d_4697_4359\"\n          x=\"0\"\n          y=\"0\"\n          width=\"66\"\n          height=\"72\"\n          filterUnits=\"userSpaceOnUse\"\n          color-interpolation-filters=\"sRGB\"\n        >\n          <feFlood flood-opacity=\"0\" result=\"BackgroundImageFix\" />\n          <feColorMatrix\n            in=\"SourceAlpha\"\n            type=\"matrix\"\n            values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0\"\n            result=\"hardAlpha\"\n          />\n          <feOffset dy=\"8\" />\n          <feGaussianBlur stdDeviation=\"10\" />\n          <feColorMatrix\n            type=\"matrix\"\n            values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0\"\n          />\n          <feBlend\n            mode=\"normal\"\n            in2=\"BackgroundImageFix\"\n            result=\"effect1_dropShadow_4697_4359\"\n          />\n          <feBlend\n            mode=\"normal\"\n            in=\"SourceGraphic\"\n            in2=\"effect1_dropShadow_4697_4359\"\n            result=\"shape\"\n          />\n        </filter>\n      </defs>\n    </svg>\n  </a>\n  <!-- scroll btn -->\n</div>\n", styles: [".tab{position:relative;display:flex;overflow:hidden}.tab ul{list-style:none;display:flex;margin-bottom:0}.tab ul.primary-tab{grid-column-gap:4px;column-gap:4px}.tab ul.primary-tab li{white-space:nowrap;overflow:hidden}.tab ul.primary-tab li a{padding:5px 18px;display:inline-flex;align-items:center;justify-content:center;text-decoration:none;min-height:45px}.tab ul.primary-tab li a:hover{background:#E0E4E8;color:gray}.tab ul.primary-tab li a.active{background:#3A66A7;color:#fff;box-shadow:0 8px 24px -4px #1c324f33,0 2px 6px -1px #1c375a1a}.tab ul.primary-tab li:nth-child(1){border-radius:10px 0 0}.tab ul.primary-tab li:last-child{border-radius:0 10px 0 0}.tab ul.secondary-tab{border-top:1px solid #BFBFBF;border-bottom:1px solid #BFBFBF;background:#F0F2F3;overflow:auto;scrollbar-width:none;-ms-overflow-style:none}.tab ul.secondary-tab::-webkit-scrollbar{display:none}.tab ul.secondary-tab li{white-space:nowrap}.tab ul.secondary-tab li a{padding:10px 24px;min-height:60px;display:inline-flex;align-items:center;justify-content:center;text-decoration:none;border-bottom:4px solid transparent}.tab ul.secondary-tab li a:hover{background:#E0E4E8;color:gray}.tab ul.secondary-tab li a.active{background:#F0F2F3;color:#3a66a7;border-bottom:4px solid #3A66A7}.tab .scroll-btn{position:absolute;z-index:1;top:2px}.tab .scroll-btn:before{content:\"\";background:#f0f2f3;width:52px;height:60px;position:absolute;z-index:-1;top:-1px}.tab .scroll-btn.left-scroll-btn{left:-10px}.tab .scroll-btn.right-scroll-btn{right:-10px}.tab .scroll-btn.right-scroll-btn:before{right:0}.tab .scroll-btn svg:hover g rect{fill:#e0e4e8}.tab .scroll-btn.active svg g rect{fill:#1e4f98}.tab .scroll-btn.active svg g path{fill:#fff}\n"], directives: [{ type: i1.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }, { type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }], encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.0.5", ngImport: i0, type: SwireTabsComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'swire-tabs',
                    templateUrl: './swire-tabs.component.html',
                    styleUrls: ['./swire-tabs.component.scss'],
                    encapsulation: ViewEncapsulation.None,
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            multi: true,
                            useExisting: SwireTabsComponent
                        }
                    ]
                }]
        }], ctorParameters: function () { return []; }, propDecorators: { mySwireTabUl: [{
                type: ViewChild,
                args: ['mySwireTabUl']
            }], mySwireTabUlLi: [{
                type: ViewChild,
                args: ['mySwireTabUlLi']
            }], isPrimary: [{
                type: Input
            }], tabsDataList: [{
                type: Input
            }], isShowLeftArrow: [{
                type: Input
            }], isShowRightArrow: [{
                type: Input
            }], szRadioClass: [{
                type: Input
            }], swireDynamicDivWidth: [{
                type: Input
            }], isDisabled: [{
                type: Input
            }], swiDynamicClassForTabs: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3dpcmUtdGFicy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zd2lyZS1saWIvc3JjL2xpYi9zd2lyZS1jb21tb24tdWkvc3dpcmUtdGFicy9zd2lyZS10YWJzLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3N3aXJlLWxpYi9zcmMvbGliL3N3aXJlLWNvbW1vbi11aS9zd2lyZS10YWJzL3N3aXJlLXRhYnMuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFpQixTQUFTLEVBQUUsS0FBSyxFQUFVLFNBQVMsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN0RyxPQUFPLEVBQUUsaUJBQWlCLEVBQXdCLE1BQU0sZ0JBQWdCLENBQUM7OztBQWN6RSxNQUFNLE9BQU8sa0JBQWtCO0lBbUI3QjtRQWZTLGNBQVMsR0FBVyxJQUFJLENBQUM7UUFFekIsb0JBQWUsR0FBVyxLQUFLLENBQUM7UUFDaEMscUJBQWdCLEdBQVcsS0FBSyxDQUFDO1FBQ2pDLGlCQUFZLEdBQVUsU0FBUyxDQUFDO1FBQ2hDLHlCQUFvQixHQUFRLEtBQUssQ0FBQztRQUMzQyxZQUFPLEdBQVUsRUFBRSxDQUFDO1FBQ3BCLFlBQU8sR0FBVSxFQUFFLENBQUM7UUFDWCxlQUFVLEdBQVksS0FBSyxDQUFDO1FBQzVCLDJCQUFzQixHQUFVLEVBQUUsQ0FBQztRQUc1QyxvQkFBZSxHQUFRLEVBQUUsQ0FBQztRQUMxQixnQkFBVyxHQUFHLENBQUMsQ0FBQztRQVdoQixhQUFRLEdBQUcsQ0FBQyxPQUFZLEVBQUUsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUNqQyxZQUFPLEdBQVEsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ3pCLFlBQU8sR0FBRyxLQUFLLENBQUM7UUFDaEIsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUVqQixjQUFTLEdBQUcsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBZE4sQ0FBQztJQUVqQixRQUFRO1FBQ04sT0FBTyxDQUFDLEdBQUcsQ0FBQywyQkFBMkIsRUFBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDN0QsQ0FBQztJQUNELGVBQWU7O1FBQ2IsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFBLE1BQUEsSUFBSSxDQUFDLFlBQVksMENBQUUsYUFBYSwwQ0FBRSxXQUFXLENBQUM7UUFDN0QsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFBLE1BQUEsSUFBSSxDQUFDLGNBQWMsMENBQUUsYUFBYSwwQ0FBRSxXQUFXLENBQUM7SUFDakUsQ0FBQztJQVFELFVBQVUsQ0FBQyxHQUFRO1FBQ2pCLElBQUksQ0FBQyxXQUFXLEdBQUcsR0FBRyxDQUFDO0lBQ3pCLENBQUM7SUFDRCxnQkFBZ0IsQ0FBQyxFQUFPO1FBQ3RCLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFDRCxpQkFBaUIsQ0FBQyxFQUFPO1FBQ3ZCLElBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO0lBQ3BCLENBQUM7SUFDRCxnQkFBZ0IsQ0FBRSxVQUFtQjtRQUNuQyxJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztJQUMvQixDQUFDO0lBQ0QsZUFBZSxDQUFDLENBQU07UUFDcEIsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2xCLElBQUksQ0FBQyxRQUFRLENBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQ2xDO0lBQ0gsQ0FBQztJQUNELGFBQWE7UUFDWCxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNqQixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7WUFDakIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7U0FDckI7SUFDSCxDQUFDO0lBRUQsZUFBZSxDQUFDLEtBQVk7UUFDMUIsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7UUFDekIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDdkMsSUFBRyxJQUFJLENBQUMsWUFBWSxJQUFJLFlBQVksRUFBQztZQUNuQyxJQUFJLENBQUMsWUFBWSxHQUFHLFFBQVEsQ0FBQztTQUM5QjthQUFJO1lBQ0gsSUFBSSxDQUFDLFlBQVksR0FBRyxFQUFFLENBQUM7U0FDeEI7SUFDSCxDQUFDO0lBQ0QsTUFBTSxDQUFDLElBQVc7O1FBQ2hCLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFBO1FBQzNCLElBQUcsSUFBSSxJQUFJLE1BQU0sRUFBQztZQUNoQixNQUFBLE1BQUEsSUFBSSxDQUFDLFlBQVksMENBQUUsYUFBYSwwQ0FBRSxRQUFRLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFBLE1BQUEsTUFBQSxJQUFJLENBQUMsWUFBWSwwQ0FBRSxhQUFhLDBDQUFFLFVBQVUsS0FBRyxNQUFBLE1BQUEsSUFBSSxDQUFDLGNBQWMsMENBQUUsYUFBYSwwQ0FBRSxXQUFXLENBQUEsQ0FBQyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsQ0FBQyxDQUFDO1NBQzVLO2FBQUssSUFBRyxJQUFJLElBQUksT0FBTyxFQUFDO1lBQ3ZCLE1BQUEsTUFBQSxJQUFJLENBQUMsWUFBWSwwQ0FBRSxhQUFhLDBDQUFFLFFBQVEsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUEsTUFBQSxNQUFBLElBQUksQ0FBQyxZQUFZLDBDQUFFLGFBQWEsMENBQUUsVUFBVSxLQUFHLE1BQUEsTUFBQSxJQUFJLENBQUMsY0FBYywwQ0FBRSxhQUFhLDBDQUFFLFdBQVcsQ0FBQSxDQUFDLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxDQUFDLENBQUM7U0FDNUs7SUFFSCxDQUFDOzsrR0E3RVUsa0JBQWtCO21HQUFsQixrQkFBa0IseVVBUmxCO1FBQ1Q7WUFDRSxPQUFPLEVBQUUsaUJBQWlCO1lBQzFCLEtBQUssRUFBRSxJQUFJO1lBQ1gsV0FBVyxFQUFFLGtCQUFrQjtTQUNoQztLQUNGLDJPQ2JILDYwSkFtSkE7MkZEcElhLGtCQUFrQjtrQkFiOUIsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsWUFBWTtvQkFDdEIsV0FBVyxFQUFFLDZCQUE2QjtvQkFDMUMsU0FBUyxFQUFFLENBQUMsNkJBQTZCLENBQUM7b0JBQzFDLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO29CQUNyQyxTQUFTLEVBQUU7d0JBQ1Q7NEJBQ0UsT0FBTyxFQUFFLGlCQUFpQjs0QkFDMUIsS0FBSyxFQUFFLElBQUk7NEJBQ1gsV0FBVyxvQkFBb0I7eUJBQ2hDO3FCQUNGO2lCQUNGOzBFQUU0QixZQUFZO3NCQUF0QyxTQUFTO3VCQUFDLGNBQWM7Z0JBQ0ksY0FBYztzQkFBMUMsU0FBUzt1QkFBQyxnQkFBZ0I7Z0JBRWxCLFNBQVM7c0JBQWpCLEtBQUs7Z0JBQ0csWUFBWTtzQkFBcEIsS0FBSztnQkFDRyxlQUFlO3NCQUF2QixLQUFLO2dCQUNHLGdCQUFnQjtzQkFBeEIsS0FBSztnQkFDRyxZQUFZO3NCQUFwQixLQUFLO2dCQUNHLG9CQUFvQjtzQkFBNUIsS0FBSztnQkFHRyxVQUFVO3NCQUFsQixLQUFLO2dCQUNHLHNCQUFzQjtzQkFBOUIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFmdGVyVmlld0luaXQsIENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCwgVmlld0NoaWxkLCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTkdfVkFMVUVfQUNDRVNTT1IsIENvbnRyb2xWYWx1ZUFjY2Vzc29yIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc3dpcmUtdGFicycsXG4gIHRlbXBsYXRlVXJsOiAnLi9zd2lyZS10YWJzLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vc3dpcmUtdGFicy5jb21wb25lbnQuc2NzcyddLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgICAgIG11bHRpOiB0cnVlLFxuICAgICAgdXNlRXhpc3Rpbmc6IFN3aXJlVGFic0NvbXBvbmVudFxuICAgIH1cbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBTd2lyZVRhYnNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBBZnRlclZpZXdJbml0ICB7XG4gIEBWaWV3Q2hpbGQoJ215U3dpcmVUYWJVbCcpIG15U3dpcmVUYWJVbDogYW55O1xuICBAVmlld0NoaWxkKCdteVN3aXJlVGFiVWxMaScpIG15U3dpcmVUYWJVbExpOiBhbnk7XG4gIFxuICBASW5wdXQoKSBpc1ByaW1hcnk6Ym9vbGVhbiA9IHRydWU7XG4gIEBJbnB1dCgpIHRhYnNEYXRhTGlzdDphbnk7XG4gIEBJbnB1dCgpIGlzU2hvd0xlZnRBcnJvdzpib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIGlzU2hvd1JpZ2h0QXJyb3c6Ym9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBzelJhZGlvQ2xhc3M6c3RyaW5nID0gJ2RlZmF1bHQnO1xuICBASW5wdXQoKSBzd2lyZUR5bmFtaWNEaXZXaWR0aDpzdHJpbmc9JzM1MCc7XG4gIHVsV2lkdGg6c3RyaW5nID0gJyc7XG4gIGxpV2lkdGg6c3RyaW5nID0gJyc7XG4gIEBJbnB1dCgpIGlzRGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgc3dpRHluYW1pY0NsYXNzRm9yVGFiczpzdHJpbmcgPSAnJztcblxuICBcbiAgYWN0aXZlQ2xhc3NOYW1lOnN0cmluZz0nJztcbiAgYWN0aXZlSW5kZXggPSAwO1xuICBcbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBjb25zb2xlLmxvZyhcInRhYnNEYXRhTGlzdD4+Pj4+Pj4+Pj4+Pi5cIix0aGlzLnRhYnNEYXRhTGlzdCk7XG4gIH1cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHRoaXMudWxXaWR0aCA9IHRoaXMubXlTd2lyZVRhYlVsPy5uYXRpdmVFbGVtZW50Py5vZmZzZXRXaWR0aDtcbiAgICB0aGlzLmxpV2lkdGggPSB0aGlzLm15U3dpcmVUYWJVbExpPy5uYXRpdmVFbGVtZW50Py5vZmZzZXRXaWR0aDtcbiAgfVxuICBvbkNoYW5nZSA9IChzelZhbHVlOiBhbnkpID0+IHsgfTtcbiAgb25Ub3VjaDogYW55ID0gKCkgPT4geyB9O1xuICB0b3VjaGVkID0gZmFsc2U7XG4gIGRpc2FibGVkID0gZmFsc2U7XG5cbiAgb25Ub3VjaGVkID0gKCkgPT4geyB9O1xuICBcbiAgd3JpdGVWYWx1ZShvYmo6IGFueSk6IHZvaWQge1xuICAgIHRoaXMuYWN0aXZlSW5kZXggPSBvYmo7XG4gIH1cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogYW55KTogdm9pZCB7XG4gICAgdGhpcy5vbkNoYW5nZSA9IGZuO1xuICB9XG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLm9uVG91Y2ggPSBmbjtcbiAgfVxuICBzZXREaXNhYmxlZFN0YXRlPyhpc0Rpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5pc0Rpc2FibGVkID0gaXNEaXNhYmxlZDtcbiAgfVxuICBvbkNoYW5nZUhhbmRsZXIoZTogYW55KSB7XG4gICAgdGhpcy5tYXJrQXNUb3VjaGVkKCk7XG4gICAgaWYgKCF0aGlzLmRpc2FibGVkKSB7XG4gICAgICB0aGlzLm9uQ2hhbmdlKCB0aGlzLmFjdGl2ZUluZGV4KTtcbiAgICB9XG4gIH1cbiAgbWFya0FzVG91Y2hlZCgpIHtcbiAgICBpZiAoIXRoaXMudG91Y2hlZCkge1xuICAgICAgdGhpcy5vblRvdWNoZWQoKTtcbiAgICAgIHRoaXMudG91Y2hlZCA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlQWN0aXZlVGFiKGluZGV4Om51bWJlcil7XG4gICAgdGhpcy5hY3RpdmVJbmRleCA9IGluZGV4O1xuICAgIHRoaXMub25DaGFuZ2VIYW5kbGVyKHRoaXMuYWN0aXZlSW5kZXgpO1xuICAgIGlmKHRoaXMuc3pSYWRpb0NsYXNzID09ICdiZy1ncmV5LTQwJyl7XG4gICAgICB0aGlzLnN6UmFkaW9DbGFzcyA9ICdhY3RpdmUnO1xuICAgIH1lbHNle1xuICAgICAgdGhpcy5zelJhZGlvQ2xhc3MgPSAnJztcbiAgICB9XG4gIH1cbiAgc2Nyb2xsKG5hbWU6c3RyaW5nKXtcbiAgICB0aGlzLmFjdGl2ZUNsYXNzTmFtZSA9IG5hbWVcbiAgICBpZihuYW1lID09ICdsZWZ0Jyl7XG4gICAgICB0aGlzLm15U3dpcmVUYWJVbD8ubmF0aXZlRWxlbWVudD8uc2Nyb2xsVG8oeyBsZWZ0OiAodGhpcy5teVN3aXJlVGFiVWw/Lm5hdGl2ZUVsZW1lbnQ/LnNjcm9sbExlZnQgLSB0aGlzLm15U3dpcmVUYWJVbExpPy5uYXRpdmVFbGVtZW50Py5vZmZzZXRXaWR0aCksIGJlaGF2aW9yOiAnc21vb3RoJyB9KTtcbiAgICB9ZWxzZSBpZihuYW1lID09ICdyaWdodCcpe1xuICAgICAgdGhpcy5teVN3aXJlVGFiVWw/Lm5hdGl2ZUVsZW1lbnQ/LnNjcm9sbFRvKHsgbGVmdDogKHRoaXMubXlTd2lyZVRhYlVsPy5uYXRpdmVFbGVtZW50Py5zY3JvbGxMZWZ0ICsgdGhpcy5teVN3aXJlVGFiVWxMaT8ubmF0aXZlRWxlbWVudD8ub2Zmc2V0V2lkdGgpLCBiZWhhdmlvcjogJ3Ntb290aCcgfSk7XG4gICAgfVxuXG4gIH1cblxufVxuIiwiPGRpdiBjbGFzcz1cInRhYlwiIFtuZ1N0eWxlXT1cInsgd2lkdGg6IHN3aXJlRHluYW1pY0RpdldpZHRoICsgJ3B4JyB9XCI+XG4gIDx1bFxuICAgICNteVN3aXJlVGFiVWxcbiAgICBbbmdDbGFzc109XCJpc1ByaW1hcnkgPyAncHJpbWFyeS10YWInIDogJ3NlY29uZGFyeS10YWInXCJcbiAgICBbbmdTdHlsZV09XCJ7XG4gICAgICBwYWRkaW5nOiBpc1Nob3dMZWZ0QXJyb3cgJiYgaXNTaG93UmlnaHRBcnJvdyA/ICcwIDQwcHggMCA0MHB4JyA6ICcnXG4gICAgfVwiXG4gID5cbiAgICA8bGkgI215U3dpcmVUYWJVbExpICpuZ0Zvcj1cImxldCBsaXN0IG9mIHRhYnNEYXRhTGlzdDsgbGV0IGkgPSBpbmRleFwiPlxuICAgICAgPGFcbiAgICAgICAgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKVwiXG4gICAgICAgIFtuZ0NsYXNzXT1cInsgYWN0aXZlOiBsaXN0Py5hY3RpdmUgfVwiXG4gICAgICAgIGNsYXNzPVwie3sgbGlzdD8uc3dpRHluYW1pY0NsYXNzIH19XCJcbiAgICAgICAgW25nQ2xhc3NdPVwic3dpRHluYW1pY0NsYXNzRm9yVGFic1wiXG4gICAgICAgIChjbGljayk9XCJ1cGRhdGVBY3RpdmVUYWIoaSlcIlxuICAgICAgPlxuICAgICAgICB7eyBsaXN0LnRhYlRpdGxlIH19XG4gICAgICA8L2E+XG4gICAgPC9saT5cbiAgPC91bD5cbiAgPCEtLSBzY3JvbGwgYnRuIC0tPlxuICA8YVxuICAgIGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoMClcIlxuICAgIFtuZ0NsYXNzXT1cImFjdGl2ZUNsYXNzTmFtZSA9PSAnbGVmdCcgPyAnYWN0aXZlJyA6ICcnXCJcbiAgICBjbGFzcz1cImxlZnQtc2Nyb2xsLWJ0biBzY3JvbGwtYnRuXCJcbiAgICAqbmdJZj1cImlzU2hvd0xlZnRBcnJvd1wiXG4gICAgKGNsaWNrKT1cInNjcm9sbCgnbGVmdCcpXCJcbiAgPlxuICAgIDxzdmdcbiAgICAgIHdpZHRoPVwiNjZcIlxuICAgICAgaGVpZ2h0PVwiNzJcIlxuICAgICAgdmlld0JveD1cIjAgMCA2NiA3MlwiXG4gICAgICBmaWxsPVwibm9uZVwiXG4gICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICA+XG4gICAgICA8ZyBmaWx0ZXI9XCJ1cmwoI2ZpbHRlcjBfZF80Njk3XzQzNDkpXCI+XG4gICAgICAgIDxyZWN0IHg9XCIyMFwiIHk9XCIxMlwiIHdpZHRoPVwiMjZcIiBoZWlnaHQ9XCIzMlwiIHJ4PVwiMTNcIiBmaWxsPVwiI0Y5RkFGQVwiIC8+XG4gICAgICAgIDxwYXRoXG4gICAgICAgICAgZD1cIk0zNS42NTk5IDMxLjkxNDVDMzUuOTU1MiAzMi4yNDM4IDM1LjkyNzcgMzIuNzUwMSAzNS41OTg0IDMzLjA0NTRDMzUuMjY5MSAzMy4zNDA3IDM0Ljc2MjggMzMuMzEzMSAzNC40Njc1IDMyLjk4MzhDMzQuNDY3NSAzMi45ODM4IDMwLjYxMjkgMjguNzg0MiAzMC4zNDAxIDI4LjQ4QzMwLjA2NzIgMjguMTc1OCAzMC4wNjcyIDI3LjgyMDYgMzAuMzQwMSAyNy41MTY0TDM0LjQ2NzUgMjMuMDE2MkMzNC43NjI4IDIyLjY4NjkgMzUuMjY5MSAyMi42NTkzIDM1LjU5ODQgMjIuOTU0NkMzNS45Mjc3IDIzLjI0OTkgMzUuOTU1MiAyMy43NTYyIDM1LjY1OTkgMjQuMDg1NUwzMi4wMTIgMjhMMzUuNjU5OSAzMS45MTQ1WlwiXG4gICAgICAgICAgZmlsbD1cIiMxRTRGOThcIlxuICAgICAgICAvPlxuICAgICAgPC9nPlxuICAgICAgPGRlZnM+XG4gICAgICAgIDxmaWx0ZXJcbiAgICAgICAgICBpZD1cImZpbHRlcjBfZF80Njk3XzQzNDlcIlxuICAgICAgICAgIHg9XCIwXCJcbiAgICAgICAgICB5PVwiMFwiXG4gICAgICAgICAgd2lkdGg9XCI2NlwiXG4gICAgICAgICAgaGVpZ2h0PVwiNzJcIlxuICAgICAgICAgIGZpbHRlclVuaXRzPVwidXNlclNwYWNlT25Vc2VcIlxuICAgICAgICAgIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycz1cInNSR0JcIlxuICAgICAgICA+XG4gICAgICAgICAgPGZlRmxvb2QgZmxvb2Qtb3BhY2l0eT1cIjBcIiByZXN1bHQ9XCJCYWNrZ3JvdW5kSW1hZ2VGaXhcIiAvPlxuICAgICAgICAgIDxmZUNvbG9yTWF0cml4XG4gICAgICAgICAgICBpbj1cIlNvdXJjZUFscGhhXCJcbiAgICAgICAgICAgIHR5cGU9XCJtYXRyaXhcIlxuICAgICAgICAgICAgdmFsdWVzPVwiMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMTI3IDBcIlxuICAgICAgICAgICAgcmVzdWx0PVwiaGFyZEFscGhhXCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxmZU9mZnNldCBkeT1cIjhcIiAvPlxuICAgICAgICAgIDxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249XCIxMFwiIC8+XG4gICAgICAgICAgPGZlQ29sb3JNYXRyaXhcbiAgICAgICAgICAgIHR5cGU9XCJtYXRyaXhcIlxuICAgICAgICAgICAgdmFsdWVzPVwiMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMC4xIDBcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGZlQmxlbmRcbiAgICAgICAgICAgIG1vZGU9XCJub3JtYWxcIlxuICAgICAgICAgICAgaW4yPVwiQmFja2dyb3VuZEltYWdlRml4XCJcbiAgICAgICAgICAgIHJlc3VsdD1cImVmZmVjdDFfZHJvcFNoYWRvd180Njk3XzQzNDlcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGZlQmxlbmRcbiAgICAgICAgICAgIG1vZGU9XCJub3JtYWxcIlxuICAgICAgICAgICAgaW49XCJTb3VyY2VHcmFwaGljXCJcbiAgICAgICAgICAgIGluMj1cImVmZmVjdDFfZHJvcFNoYWRvd180Njk3XzQzNDlcIlxuICAgICAgICAgICAgcmVzdWx0PVwic2hhcGVcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZmlsdGVyPlxuICAgICAgPC9kZWZzPlxuICAgIDwvc3ZnPlxuICA8L2E+XG4gIDxhXG4gICAgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKVwiXG4gICAgW25nQ2xhc3NdPVwiYWN0aXZlQ2xhc3NOYW1lID09ICdyaWdodCcgPyAnYWN0aXZlJyA6ICcnXCJcbiAgICBjbGFzcz1cInJpZ2h0LXNjcm9sbC1idG4gc2Nyb2xsLWJ0blwiXG4gICAgKm5nSWY9XCJpc1Nob3dSaWdodEFycm93XCJcbiAgICAoY2xpY2spPVwic2Nyb2xsKCdyaWdodCcpXCJcbiAgPlxuICAgIDxzdmdcbiAgICAgIHdpZHRoPVwiNjZcIlxuICAgICAgaGVpZ2h0PVwiNzJcIlxuICAgICAgdmlld0JveD1cIjAgMCA2NiA3MlwiXG4gICAgICBmaWxsPVwibm9uZVwiXG4gICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICA+XG4gICAgICA8ZyBmaWx0ZXI9XCJ1cmwoI2ZpbHRlcjBfZF80Njk3XzQzNTkpXCI+XG4gICAgICAgIDxyZWN0XG4gICAgICAgICAgd2lkdGg9XCIyNlwiXG4gICAgICAgICAgaGVpZ2h0PVwiMzJcIlxuICAgICAgICAgIHJ4PVwiMTNcIlxuICAgICAgICAgIHRyYW5zZm9ybT1cIm1hdHJpeCgtMSA4Ljc0MjI4ZS0wOCA4Ljc0MjI4ZS0wOCAxIDQ2IDEyKVwiXG4gICAgICAgICAgZmlsbD1cIiNGOUZBRkFcIlxuICAgICAgICAvPlxuICAgICAgICA8cGF0aFxuICAgICAgICAgIGQ9XCJNMzAuMzQwMSAzMS45MTQ1QzMwLjA0NDggMzIuMjQzOCAzMC4wNzIzIDMyLjc1MDEgMzAuNDAxNiAzMy4wNDU0QzMwLjczMDkgMzMuMzQwNyAzMS4yMzcyIDMzLjMxMzEgMzEuNTMyNSAzMi45ODM4QzMxLjUzMjUgMzIuOTgzOCAzNS4zODcxIDI4Ljc4NDIgMzUuNjU5OSAyOC40OEMzNS45MzI4IDI4LjE3NTggMzUuOTMyOCAyNy44MjA2IDM1LjY1OTkgMjcuNTE2NEwzMS41MzI1IDIzLjAxNjJDMzEuMjM3MiAyMi42ODY5IDMwLjczMDkgMjIuNjU5MyAzMC40MDE2IDIyLjk1NDZDMzAuMDcyMyAyMy4yNDk5IDMwLjA0NDggMjMuNzU2MiAzMC4zNDAxIDI0LjA4NTVMMzMuOTg4IDI4TDMwLjM0MDEgMzEuOTE0NVpcIlxuICAgICAgICAgIGZpbGw9XCIjMUU0Rjk4XCJcbiAgICAgICAgLz5cbiAgICAgIDwvZz5cbiAgICAgIDxkZWZzPlxuICAgICAgICA8ZmlsdGVyXG4gICAgICAgICAgaWQ9XCJmaWx0ZXIwX2RfNDY5N180MzU5XCJcbiAgICAgICAgICB4PVwiMFwiXG4gICAgICAgICAgeT1cIjBcIlxuICAgICAgICAgIHdpZHRoPVwiNjZcIlxuICAgICAgICAgIGhlaWdodD1cIjcyXCJcbiAgICAgICAgICBmaWx0ZXJVbml0cz1cInVzZXJTcGFjZU9uVXNlXCJcbiAgICAgICAgICBjb2xvci1pbnRlcnBvbGF0aW9uLWZpbHRlcnM9XCJzUkdCXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxmZUZsb29kIGZsb29kLW9wYWNpdHk9XCIwXCIgcmVzdWx0PVwiQmFja2dyb3VuZEltYWdlRml4XCIgLz5cbiAgICAgICAgICA8ZmVDb2xvck1hdHJpeFxuICAgICAgICAgICAgaW49XCJTb3VyY2VBbHBoYVwiXG4gICAgICAgICAgICB0eXBlPVwibWF0cml4XCJcbiAgICAgICAgICAgIHZhbHVlcz1cIjAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDEyNyAwXCJcbiAgICAgICAgICAgIHJlc3VsdD1cImhhcmRBbHBoYVwiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8ZmVPZmZzZXQgZHk9XCI4XCIgLz5cbiAgICAgICAgICA8ZmVHYXVzc2lhbkJsdXIgc3RkRGV2aWF0aW9uPVwiMTBcIiAvPlxuICAgICAgICAgIDxmZUNvbG9yTWF0cml4XG4gICAgICAgICAgICB0eXBlPVwibWF0cml4XCJcbiAgICAgICAgICAgIHZhbHVlcz1cIjAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAuMSAwXCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxmZUJsZW5kXG4gICAgICAgICAgICBtb2RlPVwibm9ybWFsXCJcbiAgICAgICAgICAgIGluMj1cIkJhY2tncm91bmRJbWFnZUZpeFwiXG4gICAgICAgICAgICByZXN1bHQ9XCJlZmZlY3QxX2Ryb3BTaGFkb3dfNDY5N180MzU5XCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxmZUJsZW5kXG4gICAgICAgICAgICBtb2RlPVwibm9ybWFsXCJcbiAgICAgICAgICAgIGluPVwiU291cmNlR3JhcGhpY1wiXG4gICAgICAgICAgICBpbjI9XCJlZmZlY3QxX2Ryb3BTaGFkb3dfNDY5N180MzU5XCJcbiAgICAgICAgICAgIHJlc3VsdD1cInNoYXBlXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L2ZpbHRlcj5cbiAgICAgIDwvZGVmcz5cbiAgICA8L3N2Zz5cbiAgPC9hPlxuICA8IS0tIHNjcm9sbCBidG4gLS0+XG48L2Rpdj5cbiJdfQ==