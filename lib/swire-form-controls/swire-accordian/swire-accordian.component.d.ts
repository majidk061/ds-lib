import { OnInit } from '@angular/core';
import * as i0 from "@angular/core";
export declare class SwireAccordianComponent implements OnInit {
    defaultExpand: boolean;
    swireExpandCollapseHeading: string;
    swireExpandCollapsePara1: string;
    swireExpandCollapsePara2: string;
    swireExpandCollapseHoverClass: string;
    swireExpandCollapseDynamicClass: string;
    swireDynamicHoverClass: string;
    constructor();
    ngOnInit(): void;
    expandCollapse(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SwireAccordianComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SwireAccordianComponent, "swire-accordian", never, { "defaultExpand": "defaultExpand"; "swireExpandCollapseHeading": "swireExpandCollapseHeading"; "swireExpandCollapsePara1": "swireExpandCollapsePara1"; "swireExpandCollapsePara2": "swireExpandCollapsePara2"; "swireExpandCollapseHoverClass": "swireExpandCollapseHoverClass"; "swireExpandCollapseDynamicClass": "swireExpandCollapseDynamicClass"; "swireDynamicHoverClass": "swireDynamicHoverClass"; }, {}, never, never>;
}
