import { Component, ViewEncapsulation, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class SwireScrollComponent {
    constructor() {
        this.swireScrollBarClass = '';
    }
    ngOnInit() {
    }
}
SwireScrollComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.0.5", ngImport: i0, type: SwireScrollComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
SwireScrollComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.0.5", type: SwireScrollComponent, selector: "swire-scroll", inputs: { swireScrollBarClass: "swireScrollBarClass" }, ngImport: i0, template: "<div [ngClass]=\"swireScrollBarClass=='swire-small-scrollbar'?'swire-small-scrollbar':'swire-big-scrollbar'\">\n    <span>11</span>\n    <span>11</span>\n    <span>11</span>\n</div>\n<!-- <div class=\"swire-big-scrollbar\">\n    <span>11</span>\n    <span>11</span>\n    <span>11</span>\n</div> -->\n", styles: ["swire-scroll{display:flex;margin:auto}swire-scroll .swire-small-scrollbar,swire-scroll .swire-big-scrollbar{width:100px;height:141px;overflow-y:auto;margin-right:80px}swire-scroll .swire-small-scrollbar span,swire-scroll .swire-big-scrollbar span{width:100%;display:block;height:90px;opacity:0}\n"], directives: [{ type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }], encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.0.5", ngImport: i0, type: SwireScrollComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'swire-scroll',
                    templateUrl: './swire-scroll.component.html',
                    styleUrls: ['./swire-scroll.component.scss'],
                    encapsulation: ViewEncapsulation.None,
                }]
        }], ctorParameters: function () { return []; }, propDecorators: { swireScrollBarClass: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3dpcmUtc2Nyb2xsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3N3aXJlLWxpYi9zcmMvbGliL3N3aXJlLWZvcm0tY29udHJvbHMvc3dpcmUtc2Nyb2xsL3N3aXJlLXNjcm9sbC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zd2lyZS1saWIvc3JjL2xpYi9zd2lyZS1mb3JtLWNvbnRyb2xzL3N3aXJlLXNjcm9sbC9zd2lyZS1zY3JvbGwuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxpQkFBaUIsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7OztBQVE1RSxNQUFNLE9BQU8sb0JBQW9CO0lBRy9CO1FBRFMsd0JBQW1CLEdBQVUsRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFFakIsUUFBUTtJQUNSLENBQUM7O2lIQU5VLG9CQUFvQjtxR0FBcEIsb0JBQW9CLDRHQ1JqQyw4U0FVQTsyRkRGYSxvQkFBb0I7a0JBTmhDLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLGNBQWM7b0JBQ3hCLFdBQVcsRUFBRSwrQkFBK0I7b0JBQzVDLFNBQVMsRUFBRSxDQUFDLCtCQUErQixDQUFDO29CQUM1QyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtpQkFDdEM7MEVBR1UsbUJBQW1CO3NCQUEzQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdFbmNhcHN1bGF0aW9uLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzd2lyZS1zY3JvbGwnLFxuICB0ZW1wbGF0ZVVybDogJy4vc3dpcmUtc2Nyb2xsLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vc3dpcmUtc2Nyb2xsLmNvbXBvbmVudC5zY3NzJ10sXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG59KVxuZXhwb3J0IGNsYXNzIFN3aXJlU2Nyb2xsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgXG4gIEBJbnB1dCgpIHN3aXJlU2Nyb2xsQmFyQ2xhc3M6c3RyaW5nID0gJyc7XG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gIH1cblxufVxuIiwiPGRpdiBbbmdDbGFzc109XCJzd2lyZVNjcm9sbEJhckNsYXNzPT0nc3dpcmUtc21hbGwtc2Nyb2xsYmFyJz8nc3dpcmUtc21hbGwtc2Nyb2xsYmFyJzonc3dpcmUtYmlnLXNjcm9sbGJhcidcIj5cbiAgICA8c3Bhbj4xMTwvc3Bhbj5cbiAgICA8c3Bhbj4xMTwvc3Bhbj5cbiAgICA8c3Bhbj4xMTwvc3Bhbj5cbjwvZGl2PlxuPCEtLSA8ZGl2IGNsYXNzPVwic3dpcmUtYmlnLXNjcm9sbGJhclwiPlxuICAgIDxzcGFuPjExPC9zcGFuPlxuICAgIDxzcGFuPjExPC9zcGFuPlxuICAgIDxzcGFuPjExPC9zcGFuPlxuPC9kaXY+IC0tPlxuIl19