import { OnInit } from '@angular/core';
import * as i0 from "@angular/core";
export declare class SwireNotificationsComponent implements OnInit {
    type: string;
    text: string;
    subText: string;
    notificationType: string;
    isHideNotification: boolean;
    constructor();
    ngOnInit(): void;
    ngOnChanges(): void;
    closeNotifications(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SwireNotificationsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SwireNotificationsComponent, "swire-notifications", never, { "type": "type"; "text": "text"; "subText": "subText"; "notificationType": "notificationType"; "isHideNotification": "isHideNotification"; }, {}, never, never>;
}
