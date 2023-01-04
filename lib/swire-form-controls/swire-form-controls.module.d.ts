import * as i0 from "@angular/core";
import * as i1 from "./swire-input/swire-input.component";
import * as i2 from "./swire-checkBoxes/swire-indeterminate-checkboxes/swire-Indeterminate-checkbox/swire-Indeterminate-checkbox";
import * as i3 from "./swire-filters/swire-sort-filter/swire-sort-filter.component";
import * as i4 from "../design-system-pipes/swire-filter.pipe";
import * as i5 from "./swire-radio-button/swire-radio-button.component";
import * as i6 from "./swire-checkBoxes/swire-regular-checkboxes/swire-checkbox/swire-checkbox.component";
import * as i7 from "./swire-incr-decr-input/swire-incr-decr-input.component";
import * as i8 from "./swire-filters/swire-filter-selectbox/swire-filter-selectbox.component";
import * as i9 from "./swire-filters/swire-checkbox-filter/swire-checkbox-filter.component";
import * as i10 from "./swire-toggle-btns/swire-two-way-toggle-button/swire-two-way-toggle-button.component";
import * as i11 from "./swire-toggle-btns/swire-three-way-toggle-button/swire-three-way-toggle-button.component";
import * as i12 from "./swire-toggle-btns/swire-toggle-selector-button/swire-toggle-selector-button.component";
import * as i13 from "./chips/chips.component";
import * as i14 from "./swire-prefix-dropdown/swire-prefix-dropdown.component";
import * as i15 from "./swire-stepper/swire-stepper.component";
import * as i16 from "./swire-toggle-btns/swire-simple-toggle/swire-simple-toggle.component";
import * as i17 from "./swire-filters/swire-input-filter/swire-input-filter.component";
import * as i18 from "./swire-toggle-btns/swire-tab-toggle/swire-tab-toggle.component";
import * as i19 from "./swire-button/swire-button.component";
import * as i20 from "./swire-datePickers/swire-datepicker/swire-datepicker.component";
import * as i21 from "./swire-progress-bar/swire-progress-bar.component";
import * as i22 from "./swire-bread-crumbs/swire-bread-crumbs.component";
import * as i23 from "./swire-datePickers/swire-range-datepicker/swire-range-datepicker.component";
import * as i24 from "./swire-datePickers/swire-timepicker/swire-timepicker.component";
import * as i25 from "./swire-pagination/swire-pagination.component";
import * as i26 from "./swire-tags/swire-tags.component";
import * as i27 from "./swire-accordian/swire-accordian.component";
import * as i28 from "./swire-notifications/swire-notifications.component";
import * as i29 from "./swire-dropdown/swire-dropdown.component";
import * as i30 from "./swire-loader/swire-loader.component";
import * as i31 from "./swire-typography/swire-typography.component";
import * as i32 from "./swire-table/static/swire-table-static.component";
import * as i33 from "./swire-table/dynamic/swire-table-dynamic.component";
import * as i34 from "./swire-shadow/swire-shadow.component";
import * as i35 from "./swire-scroll/swire-scroll.component";
import * as i36 from "./swire-colour/swire-colour.component";
import * as i37 from "@angular/common";
import * as i38 from "@angular/forms";
import * as i39 from "@angular/material/button";
import * as i40 from "@angular/material/form-field";
import * as i41 from "@angular/material/core";
import * as i42 from "@angular/material/input";
import * as i43 from "@angular/material/datepicker";
import * as i44 from "@ng-bootstrap/ng-bootstrap";
import * as i45 from "../swire-common-ui/swire-common-ui.module";
export declare class SwireFormControlsModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<SwireFormControlsModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<SwireFormControlsModule, [typeof i1.SwireInputComponent, typeof i2.SwireIndeterminateCheckboxComponent, typeof i3.SwireSortFilterComponent, typeof i4.SwireFilterPipe, typeof i5.SwireRadioButtonComponent, typeof i6.SwireCheckboxComponent, typeof i7.SwireIncrDecrInputComponent, typeof i8.SwireFilterSelectboxComponent, typeof i9.SwireCheckboxFilterComponent, typeof i10.SwireTwoWayToggleButtonComponent, typeof i11.SwireThreeWayToggleButtonComponent, typeof i12.SwireToggleSelectorButtonComponent, typeof i13.ChipsComponent, typeof i14.SwirePrefixDropdownComponent, typeof i15.SwireStepperComponent, typeof i16.SwireSimpleToggleComponent, typeof i17.SwireInputFilterComponent, typeof i18.SwireTabToggleComponent, typeof i19.SwireButtonComponent, typeof i20.SwireDatepickerComponent, typeof i21.SwireProgressBarComponent, typeof i22.SwireBreadCrumbsComponent, typeof i23.SwireRangeDatepickerComponent, typeof i24.SwireTimepickerComponent, typeof i25.SwirePaginationComponent, typeof i26.SwireTagsComponent, typeof i27.SwireAccordianComponent, typeof i28.SwireNotificationsComponent, typeof i29.SwireDropdownComponent, typeof i30.SwireLoaderComponent, typeof i31.SwireTypographyComponent, typeof i32.SwireStaticTableComponent, typeof i33.SwireDynamicTableComponent, typeof i34.SwireShadowComponent, typeof i35.SwireScrollComponent, typeof i36.SwireColourComponent], [typeof i37.CommonModule, typeof i38.FormsModule, typeof i38.ReactiveFormsModule, typeof i39.MatButtonModule, typeof i40.MatFormFieldModule, typeof i41.MatRippleModule, typeof i42.MatInputModule, typeof i43.MatDatepickerModule, typeof i44.NgbModule, typeof i44.NgbPaginationModule, typeof i45.SwireCommonUiModule], [typeof i1.SwireInputComponent, typeof i2.SwireIndeterminateCheckboxComponent, typeof i3.SwireSortFilterComponent, typeof i5.SwireRadioButtonComponent, typeof i6.SwireCheckboxComponent, typeof i7.SwireIncrDecrInputComponent, typeof i8.SwireFilterSelectboxComponent, typeof i9.SwireCheckboxFilterComponent, typeof i10.SwireTwoWayToggleButtonComponent, typeof i11.SwireThreeWayToggleButtonComponent, typeof i12.SwireToggleSelectorButtonComponent, typeof i13.ChipsComponent, typeof i14.SwirePrefixDropdownComponent, typeof i15.SwireStepperComponent, typeof i16.SwireSimpleToggleComponent, typeof i17.SwireInputFilterComponent, typeof i18.SwireTabToggleComponent, typeof i19.SwireButtonComponent, typeof i20.SwireDatepickerComponent, typeof i21.SwireProgressBarComponent, typeof i22.SwireBreadCrumbsComponent, typeof i23.SwireRangeDatepickerComponent, typeof i24.SwireTimepickerComponent, typeof i25.SwirePaginationComponent, typeof i26.SwireTagsComponent, typeof i27.SwireAccordianComponent, typeof i28.SwireNotificationsComponent, typeof i29.SwireDropdownComponent, typeof i30.SwireLoaderComponent, typeof i31.SwireTypographyComponent, typeof i32.SwireStaticTableComponent, typeof i33.SwireDynamicTableComponent, typeof i34.SwireShadowComponent, typeof i35.SwireScrollComponent, typeof i36.SwireColourComponent]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<SwireFormControlsModule>;
}
