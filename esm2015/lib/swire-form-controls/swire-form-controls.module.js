import { NgModule } from '@angular/core';
import { SwireInputComponent } from './swire-input/swire-input.component';
import { SwireIndeterminateCheckboxComponent } from './swire-checkBoxes/swire-indeterminate-checkboxes/swire-Indeterminate-checkbox/swire-Indeterminate-checkbox';
import { SwireRadioButtonComponent } from './swire-radio-button/swire-radio-button.component';
// import { SwireSelectboxComponent } from './swire-selectbox/swire-selectbox.component';
import { SwireCheckboxComponent } from './swire-checkBoxes/swire-regular-checkboxes/swire-checkbox/swire-checkbox.component';
import { SwireIncrDecrInputComponent } from './swire-incr-decr-input/swire-incr-decr-input.component';
import { SwireFilterSelectboxComponent } from './swire-filters/swire-filter-selectbox/swire-filter-selectbox.component';
import { SwireCheckboxFilterComponent } from './swire-filters/swire-checkbox-filter/swire-checkbox-filter.component';
import { SwireThreeWayToggleButtonComponent } from './swire-toggle-btns/swire-three-way-toggle-button/swire-three-way-toggle-button.component';
import { SwireToggleSelectorButtonComponent } from './swire-toggle-btns/swire-toggle-selector-button/swire-toggle-selector-button.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SwireSortFilterComponent } from './swire-filters/swire-sort-filter/swire-sort-filter.component';
import { SwireFilterPipe } from '../design-system-pipes/swire-filter.pipe';
import { SwireTwoWayToggleButtonComponent } from './swire-toggle-btns/swire-two-way-toggle-button/swire-two-way-toggle-button.component';
import { ChipsComponent } from './chips/chips.component';
import { SwirePrefixDropdownComponent } from './swire-prefix-dropdown/swire-prefix-dropdown.component';
import { SwireStepperComponent } from './swire-stepper/swire-stepper.component';
import { SwireSimpleToggleComponent } from './swire-toggle-btns/swire-simple-toggle/swire-simple-toggle.component';
import { SwireInputFilterComponent } from './swire-filters/swire-input-filter/swire-input-filter.component';
import { SwireTabToggleComponent } from './swire-toggle-btns/swire-tab-toggle/swire-tab-toggle.component';
import { SwireButtonComponent } from './swire-button/swire-button.component';
import { CommonModule } from '@angular/common';
import { SwireProgressBarComponent } from './swire-progress-bar/swire-progress-bar.component';
import { SwireBreadCrumbsComponent } from './swire-bread-crumbs/swire-bread-crumbs.component';
import { SwireDatepickerComponent } from './swire-datePickers/swire-datepicker/swire-datepicker.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRippleModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbDateParserFormatter } from "@ng-bootstrap/ng-bootstrap";
import { CustomDateParserFormatter } from './swire-datePickers/moment';
import { SwireRangeDatepickerComponent } from './swire-datePickers/swire-range-datepicker/swire-range-datepicker.component';
import { SwireTimepickerComponent } from './swire-datePickers/swire-timepicker/swire-timepicker.component';
import { SwirePaginationComponent } from './swire-pagination/swire-pagination.component';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { SwireTagsComponent } from './swire-tags/swire-tags.component';
import { SwireAccordianComponent } from './swire-accordian/swire-accordian.component';
import { SwireNotificationsComponent } from './swire-notifications/swire-notifications.component';
import { SwireDropdownComponent } from './swire-dropdown/swire-dropdown.component';
import { SwireLoaderComponent } from './swire-loader/swire-loader.component';
import { SwireTypographyComponent } from './swire-typography/swire-typography.component';
import { SwireStaticTableComponent } from './swire-table/static/swire-table-static.component';
import { SwireDynamicTableComponent } from './swire-table/dynamic/swire-table-dynamic.component';
import { SwireShadowComponent } from './swire-shadow/swire-shadow.component';
import { SwireScrollComponent } from './swire-scroll/swire-scroll.component';
import { SwireColourComponent } from './swire-colour/swire-colour.component';
import { SwireCommonUiModule } from "../swire-common-ui/swire-common-ui.module";
import * as i0 from "@angular/core";
const modules = [
    MatButtonModule,
    MatFormFieldModule,
    MatRippleModule,
    MatInputModule,
    MatDatepickerModule,
    NgbModule,
    NgbPaginationModule
];
export class SwireFormControlsModule {
}
SwireFormControlsModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.0.5", ngImport: i0, type: SwireFormControlsModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
SwireFormControlsModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.0.5", ngImport: i0, type: SwireFormControlsModule, declarations: [SwireInputComponent,
        SwireIndeterminateCheckboxComponent,
        SwireSortFilterComponent,
        SwireFilterPipe,
        SwireRadioButtonComponent,
        // SwireSelectboxComponent,
        SwireCheckboxComponent,
        SwireIncrDecrInputComponent,
        SwireFilterSelectboxComponent,
        SwireCheckboxFilterComponent,
        SwireTwoWayToggleButtonComponent,
        SwireThreeWayToggleButtonComponent,
        SwireToggleSelectorButtonComponent,
        ChipsComponent,
        SwirePrefixDropdownComponent,
        SwireStepperComponent,
        SwireSimpleToggleComponent,
        SwireInputFilterComponent,
        SwireTabToggleComponent,
        SwireButtonComponent,
        SwireDatepickerComponent,
        SwireProgressBarComponent,
        SwireBreadCrumbsComponent,
        SwireRangeDatepickerComponent,
        SwireTimepickerComponent,
        SwirePaginationComponent,
        SwireTagsComponent,
        SwireAccordianComponent,
        SwireNotificationsComponent,
        SwireDropdownComponent,
        SwireLoaderComponent,
        SwireTypographyComponent,
        SwireStaticTableComponent,
        SwireDynamicTableComponent,
        SwireShadowComponent,
        SwireScrollComponent,
        SwireColourComponent], imports: [CommonModule,
        FormsModule,
        ReactiveFormsModule, MatButtonModule,
        MatFormFieldModule,
        MatRippleModule,
        MatInputModule,
        MatDatepickerModule,
        NgbModule,
        NgbPaginationModule, SwireCommonUiModule], exports: [SwireInputComponent,
        SwireIndeterminateCheckboxComponent,
        SwireSortFilterComponent,
        SwireRadioButtonComponent,
        // SwireSelectboxComponent,
        SwireCheckboxComponent,
        SwireIncrDecrInputComponent,
        SwireFilterSelectboxComponent,
        SwireCheckboxFilterComponent,
        SwireTwoWayToggleButtonComponent,
        SwireThreeWayToggleButtonComponent,
        SwireToggleSelectorButtonComponent,
        ChipsComponent,
        SwirePrefixDropdownComponent,
        SwireStepperComponent,
        SwireSimpleToggleComponent,
        SwireInputFilterComponent,
        SwireTabToggleComponent,
        SwireButtonComponent,
        SwireDatepickerComponent,
        SwireProgressBarComponent,
        SwireBreadCrumbsComponent,
        SwireRangeDatepickerComponent,
        SwireTimepickerComponent,
        SwirePaginationComponent,
        SwireTagsComponent,
        SwireAccordianComponent,
        SwireNotificationsComponent,
        SwireDropdownComponent,
        SwireLoaderComponent,
        SwireTypographyComponent,
        SwireStaticTableComponent,
        SwireDynamicTableComponent,
        SwireShadowComponent,
        SwireScrollComponent,
        SwireColourComponent] });
SwireFormControlsModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.0.5", ngImport: i0, type: SwireFormControlsModule, providers: [
        { provide: NgbDateParserFormatter, useClass: CustomDateParserFormatter }
    ], imports: [[
            CommonModule,
            FormsModule,
            ReactiveFormsModule,
            ...modules,
            SwireCommonUiModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.0.5", ngImport: i0, type: SwireFormControlsModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        SwireInputComponent,
                        SwireIndeterminateCheckboxComponent,
                        SwireSortFilterComponent,
                        SwireFilterPipe,
                        SwireRadioButtonComponent,
                        // SwireSelectboxComponent,
                        SwireCheckboxComponent,
                        SwireIncrDecrInputComponent,
                        SwireFilterSelectboxComponent,
                        SwireCheckboxFilterComponent,
                        SwireTwoWayToggleButtonComponent,
                        SwireThreeWayToggleButtonComponent,
                        SwireToggleSelectorButtonComponent,
                        ChipsComponent,
                        SwirePrefixDropdownComponent,
                        SwireStepperComponent,
                        SwireSimpleToggleComponent,
                        SwireInputFilterComponent,
                        SwireTabToggleComponent,
                        SwireButtonComponent,
                        SwireDatepickerComponent,
                        SwireProgressBarComponent,
                        SwireBreadCrumbsComponent,
                        SwireRangeDatepickerComponent,
                        SwireTimepickerComponent,
                        SwirePaginationComponent,
                        SwireTagsComponent,
                        SwireAccordianComponent,
                        SwireNotificationsComponent,
                        SwireDropdownComponent,
                        SwireLoaderComponent,
                        SwireTypographyComponent,
                        SwireStaticTableComponent,
                        SwireDynamicTableComponent,
                        SwireShadowComponent,
                        SwireScrollComponent,
                        SwireColourComponent,
                    ],
                    exports: [
                        SwireInputComponent,
                        SwireIndeterminateCheckboxComponent,
                        SwireSortFilterComponent,
                        SwireRadioButtonComponent,
                        // SwireSelectboxComponent,
                        SwireCheckboxComponent,
                        SwireIncrDecrInputComponent,
                        SwireFilterSelectboxComponent,
                        SwireCheckboxFilterComponent,
                        SwireTwoWayToggleButtonComponent,
                        SwireThreeWayToggleButtonComponent,
                        SwireToggleSelectorButtonComponent,
                        ChipsComponent,
                        SwirePrefixDropdownComponent,
                        SwireStepperComponent,
                        SwireSimpleToggleComponent,
                        SwireInputFilterComponent,
                        SwireTabToggleComponent,
                        SwireButtonComponent,
                        SwireDatepickerComponent,
                        SwireProgressBarComponent,
                        SwireBreadCrumbsComponent,
                        SwireRangeDatepickerComponent,
                        SwireTimepickerComponent,
                        SwirePaginationComponent,
                        SwireTagsComponent,
                        SwireAccordianComponent,
                        SwireNotificationsComponent,
                        SwireDropdownComponent,
                        SwireLoaderComponent,
                        SwireTypographyComponent,
                        SwireStaticTableComponent,
                        SwireDynamicTableComponent,
                        SwireShadowComponent,
                        SwireScrollComponent,
                        SwireColourComponent,
                    ],
                    // schemas:[CUSTOM_ELEMENTS_SCHEMA],
                    providers: [
                        { provide: NgbDateParserFormatter, useClass: CustomDateParserFormatter }
                    ],
                    imports: [
                        CommonModule,
                        FormsModule,
                        ReactiveFormsModule,
                        ...modules,
                        SwireCommonUiModule
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3dpcmUtZm9ybS1jb250cm9scy5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zd2lyZS1saWIvc3JjL2xpYi9zd2lyZS1mb3JtLWNvbnRyb2xzL3N3aXJlLWZvcm0tY29udHJvbHMubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDMUUsT0FBTyxFQUFFLG1DQUFtQyxFQUFFLE1BQU0sNkdBQTZHLENBQUM7QUFDbEssT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sbURBQW1ELENBQUM7QUFDOUYseUZBQXlGO0FBQ3pGLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHFGQUFxRixDQUFDO0FBQzdILE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLHlEQUF5RCxDQUFDO0FBQ3RHLE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLHlFQUF5RSxDQUFDO0FBQ3hILE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLHVFQUF1RSxDQUFDO0FBQ3JILE9BQU8sRUFBRSxrQ0FBa0MsRUFBRSxNQUFNLDJGQUEyRixDQUFDO0FBQy9JLE9BQU8sRUFBRSxrQ0FBa0MsRUFBRSxNQUFNLHlGQUF5RixDQUFDO0FBQzdJLE9BQU8sRUFBRSxXQUFXLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNsRSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSwrREFBK0QsQ0FBQztBQUN6RyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDM0UsT0FBTyxFQUFFLGdDQUFnQyxFQUFFLE1BQU0sdUZBQXVGLENBQUM7QUFDekksT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3pELE9BQU8sRUFB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QzVCLGdDQUFnQzt3QkFDaEMsa0NBQWtDO3dCQUNsQyxrQ0FBa0M7d0JBQ2xDLGNBQWM7d0JBQ2QsNEJBQTRCO3dCQUM1QixxQkFBcUI7d0JBQ3JCLDBCQUEwQjt3QkFDMUIseUJBQXlCO3dCQUN6Qix1QkFBdUI7d0JBQ3ZCLG9CQUFvQjt3QkFDcEIsd0JBQXdCO3dCQUN4Qix5QkFBeUI7d0JBQ3pCLHlCQUF5Qjt3QkFDekIsNkJBQTZCO3dCQUM3Qix3QkFBd0I7d0JBQ3hCLHdCQUF3Qjt3QkFDeEIsa0JBQWtCO3dCQUNsQix1QkFBdUI7d0JBQ3ZCLDJCQUEyQjt3QkFDM0Isc0JBQXNCO3dCQUN0QixvQkFBb0I7d0JBQ3BCLHdCQUF3Qjt3QkFDeEIseUJBQXlCO3dCQUN6QiwwQkFBMEI7d0JBQzFCLG9CQUFvQjt3QkFDcEIsb0JBQW9CO3dCQUNwQixvQkFBb0I7cUJBQ3ZCO29CQUNELG9DQUFvQztvQkFDcEMsU0FBUyxFQUFFO3dCQUNQLEVBQUUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLFFBQVEsRUFBRSx5QkFBeUIsRUFBRTtxQkFDM0U7b0JBQ0QsT0FBTyxFQUFFO3dCQUNMLFlBQVk7d0JBQ1osV0FBVzt3QkFDWCxtQkFBbUI7d0JBQ25CLEdBQUcsT0FBTzt3QkFDVixtQkFBbUI7cUJBQ3RCO2lCQUNKIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN3aXJlSW5wdXRDb21wb25lbnQgfSBmcm9tICcuL3N3aXJlLWlucHV0L3N3aXJlLWlucHV0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTd2lyZUluZGV0ZXJtaW5hdGVDaGVja2JveENvbXBvbmVudCB9IGZyb20gJy4vc3dpcmUtY2hlY2tCb3hlcy9zd2lyZS1pbmRldGVybWluYXRlLWNoZWNrYm94ZXMvc3dpcmUtSW5kZXRlcm1pbmF0ZS1jaGVja2JveC9zd2lyZS1JbmRldGVybWluYXRlLWNoZWNrYm94JztcbmltcG9ydCB7IFN3aXJlUmFkaW9CdXR0b25Db21wb25lbnQgfSBmcm9tICcuL3N3aXJlLXJhZGlvLWJ1dHRvbi9zd2lyZS1yYWRpby1idXR0b24uY29tcG9uZW50Jztcbi8vIGltcG9ydCB7IFN3aXJlU2VsZWN0Ym94Q29tcG9uZW50IH0gZnJvbSAnLi9zd2lyZS1zZWxlY3Rib3gvc3dpcmUtc2VsZWN0Ym94LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTd2lyZUNoZWNrYm94Q29tcG9uZW50IH0gZnJvbSAnLi9zd2lyZS1jaGVja0JveGVzL3N3aXJlLXJlZ3VsYXItY2hlY2tib3hlcy9zd2lyZS1jaGVja2JveC9zd2lyZS1jaGVja2JveC5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3dpcmVJbmNyRGVjcklucHV0Q29tcG9uZW50IH0gZnJvbSAnLi9zd2lyZS1pbmNyLWRlY3ItaW5wdXQvc3dpcmUtaW5jci1kZWNyLWlucHV0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTd2lyZUZpbHRlclNlbGVjdGJveENvbXBvbmVudCB9IGZyb20gJy4vc3dpcmUtZmlsdGVycy9zd2lyZS1maWx0ZXItc2VsZWN0Ym94L3N3aXJlLWZpbHRlci1zZWxlY3Rib3guY29tcG9uZW50JztcbmltcG9ydCB7IFN3aXJlQ2hlY2tib3hGaWx0ZXJDb21wb25lbnQgfSBmcm9tICcuL3N3aXJlLWZpbHRlcnMvc3dpcmUtY2hlY2tib3gtZmlsdGVyL3N3aXJlLWNoZWNrYm94LWZpbHRlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3dpcmVUaHJlZVdheVRvZ2dsZUJ1dHRvbkNvbXBvbmVudCB9IGZyb20gJy4vc3dpcmUtdG9nZ2xlLWJ0bnMvc3dpcmUtdGhyZWUtd2F5LXRvZ2dsZS1idXR0b24vc3dpcmUtdGhyZWUtd2F5LXRvZ2dsZS1idXR0b24uY29tcG9uZW50JztcbmltcG9ydCB7IFN3aXJlVG9nZ2xlU2VsZWN0b3JCdXR0b25Db21wb25lbnQgfSBmcm9tICcuL3N3aXJlLXRvZ2dsZS1idG5zL3N3aXJlLXRvZ2dsZS1zZWxlY3Rvci1idXR0b24vc3dpcmUtdG9nZ2xlLXNlbGVjdG9yLWJ1dHRvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBTd2lyZVNvcnRGaWx0ZXJDb21wb25lbnQgfSBmcm9tICcuL3N3aXJlLWZpbHRlcnMvc3dpcmUtc29ydC1maWx0ZXIvc3dpcmUtc29ydC1maWx0ZXIuY29tcG9uZW50JztcbmltcG9ydCB7IFN3aXJlRmlsdGVyUGlwZSB9IGZyb20gJy4uL2Rlc2lnbi1zeXN0ZW0tcGlwZXMvc3dpcmUtZmlsdGVyLnBpcGUnO1xuaW1wb3J0IHsgU3dpcmVUd29XYXlUb2dnbGVCdXR0b25Db21wb25lbnQgfSBmcm9tICcuL3N3aXJlLXRvZ2dsZS1idG5zL3N3aXJlLXR3by13YXktdG9nZ2xlLWJ1dHRvbi9zd2lyZS10d28td2F5LXRvZ2dsZS1idXR0b24uY29tcG9uZW50JztcbmltcG9ydCB7IENoaXBzQ29tcG9uZW50IH0gZnJvbSAnLi9jaGlwcy9jaGlwcy5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3dpcmVQcmVmaXhEcm9wZG93bkNvbXBvbmVudCB9IGZyb20gJy4vc3dpcmUtcHJlZml4LWRyb3Bkb3duL3N3aXJlLXByZWZpeC1kcm9wZG93bi5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3dpcmVTdGVwcGVyQ29tcG9uZW50IH0gZnJvbSAnLi9zd2lyZS1zdGVwcGVyL3N3aXJlLXN0ZXBwZXIuY29tcG9uZW50JztcbmltcG9ydCB7IFN3aXJlU2ltcGxlVG9nZ2xlQ29tcG9uZW50IH0gZnJvbSAnLi9zd2lyZS10b2dnbGUtYnRucy9zd2lyZS1zaW1wbGUtdG9nZ2xlL3N3aXJlLXNpbXBsZS10b2dnbGUuY29tcG9uZW50JztcbmltcG9ydCB7IFN3aXJlSW5wdXRGaWx0ZXJDb21wb25lbnQgfSBmcm9tICcuL3N3aXJlLWZpbHRlcnMvc3dpcmUtaW5wdXQtZmlsdGVyL3N3aXJlLWlucHV0LWZpbHRlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3dpcmVUYWJUb2dnbGVDb21wb25lbnQgfSBmcm9tICcuL3N3aXJlLXRvZ2dsZS1idG5zL3N3aXJlLXRhYi10b2dnbGUvc3dpcmUtdGFiLXRvZ2dsZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3dpcmVCdXR0b25Db21wb25lbnQgfSBmcm9tICcuL3N3aXJlLWJ1dHRvbi9zd2lyZS1idXR0b24uY29tcG9uZW50JztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBTd2lyZVByb2dyZXNzQmFyQ29tcG9uZW50IH0gZnJvbSAnLi9zd2lyZS1wcm9ncmVzcy1iYXIvc3dpcmUtcHJvZ3Jlc3MtYmFyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTd2lyZUJyZWFkQ3J1bWJzQ29tcG9uZW50IH0gZnJvbSAnLi9zd2lyZS1icmVhZC1jcnVtYnMvc3dpcmUtYnJlYWQtY3J1bWJzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTd2lyZURhdGVwaWNrZXJDb21wb25lbnQgfSBmcm9tICcuL3N3aXJlLWRhdGVQaWNrZXJzL3N3aXJlLWRhdGVwaWNrZXIvc3dpcmUtZGF0ZXBpY2tlci5jb21wb25lbnQnO1xuaW1wb3J0IHtNYXREYXRlcGlja2VyTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9kYXRlcGlja2VyJztcbmltcG9ydCB7IE1hdEJ1dHRvbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2J1dHRvbic7XG5pbXBvcnQgeyBNYXRGb3JtRmllbGRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9mb3JtLWZpZWxkJztcbmltcG9ydCB7IE1hdFJpcHBsZU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NvcmUnO1xuaW1wb3J0IHsgTWF0SW5wdXRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pbnB1dCc7XG5pbXBvcnQgeyBOZ2JNb2R1bGUgfSBmcm9tICdAbmctYm9vdHN0cmFwL25nLWJvb3RzdHJhcCc7XG5pbXBvcnQgeyBOZ2JEYXRlUGFyc2VyRm9ybWF0dGVyLCBOZ2JEYXRlU3RydWN0IH0gZnJvbSBcIkBuZy1ib290c3RyYXAvbmctYm9vdHN0cmFwXCI7XG5pbXBvcnQgeyBDdXN0b21EYXRlUGFyc2VyRm9ybWF0dGVyIH0gZnJvbSAnLi9zd2lyZS1kYXRlUGlja2Vycy9tb21lbnQnO1xuaW1wb3J0IHsgU3dpcmVSYW5nZURhdGVwaWNrZXJDb21wb25lbnQgfSBmcm9tICcuL3N3aXJlLWRhdGVQaWNrZXJzL3N3aXJlLXJhbmdlLWRhdGVwaWNrZXIvc3dpcmUtcmFuZ2UtZGF0ZXBpY2tlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3dpcmVUaW1lcGlja2VyQ29tcG9uZW50IH0gZnJvbSAnLi9zd2lyZS1kYXRlUGlja2Vycy9zd2lyZS10aW1lcGlja2VyL3N3aXJlLXRpbWVwaWNrZXIuY29tcG9uZW50JztcbmltcG9ydCB7IFN3aXJlUGFnaW5hdGlvbkNvbXBvbmVudCB9IGZyb20gJy4vc3dpcmUtcGFnaW5hdGlvbi9zd2lyZS1wYWdpbmF0aW9uLmNvbXBvbmVudCc7XG5pbXBvcnQge05nYlBhZ2luYXRpb25Nb2R1bGV9IGZyb20gJ0BuZy1ib290c3RyYXAvbmctYm9vdHN0cmFwJztcbmltcG9ydCB7IFN3aXJlVGFnc0NvbXBvbmVudCB9IGZyb20gJy4vc3dpcmUtdGFncy9zd2lyZS10YWdzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTd2lyZUFjY29yZGlhbkNvbXBvbmVudCB9IGZyb20gJy4vc3dpcmUtYWNjb3JkaWFuL3N3aXJlLWFjY29yZGlhbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3dpcmVOb3RpZmljYXRpb25zQ29tcG9uZW50IH0gZnJvbSAnLi9zd2lyZS1ub3RpZmljYXRpb25zL3N3aXJlLW5vdGlmaWNhdGlvbnMuY29tcG9uZW50JztcbmltcG9ydCB7IFN3aXJlRHJvcGRvd25Db21wb25lbnQgfSBmcm9tICcuL3N3aXJlLWRyb3Bkb3duL3N3aXJlLWRyb3Bkb3duLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTd2lyZUxvYWRlckNvbXBvbmVudCB9IGZyb20gJy4vc3dpcmUtbG9hZGVyL3N3aXJlLWxvYWRlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3dpcmVUeXBvZ3JhcGh5Q29tcG9uZW50IH0gZnJvbSAnLi9zd2lyZS10eXBvZ3JhcGh5L3N3aXJlLXR5cG9ncmFwaHkuY29tcG9uZW50JztcbmltcG9ydCB7IFN3aXJlU3RhdGljVGFibGVDb21wb25lbnQgfSBmcm9tICcuL3N3aXJlLXRhYmxlL3N0YXRpYy9zd2lyZS10YWJsZS1zdGF0aWMuY29tcG9uZW50JztcbmltcG9ydCB7IFN3aXJlRHluYW1pY1RhYmxlQ29tcG9uZW50IH0gZnJvbSAnLi9zd2lyZS10YWJsZS9keW5hbWljL3N3aXJlLXRhYmxlLWR5bmFtaWMuY29tcG9uZW50JztcblxuaW1wb3J0IHsgU3dpcmVTaGFkb3dDb21wb25lbnQgfSBmcm9tICcuL3N3aXJlLXNoYWRvdy9zd2lyZS1zaGFkb3cuY29tcG9uZW50JztcbmltcG9ydCB7IFN3aXJlU2Nyb2xsQ29tcG9uZW50IH0gZnJvbSAnLi9zd2lyZS1zY3JvbGwvc3dpcmUtc2Nyb2xsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTd2lyZUNvbG91ckNvbXBvbmVudCB9IGZyb20gJy4vc3dpcmUtY29sb3VyL3N3aXJlLWNvbG91ci5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3dpcmVDb21tb25VaU1vZHVsZSB9IGZyb20gXCIuLi9zd2lyZS1jb21tb24tdWkvc3dpcmUtY29tbW9uLXVpLm1vZHVsZVwiO1xuXG5cbmNvbnN0IG1vZHVsZXMgPSBbXG4gIE1hdEJ1dHRvbk1vZHVsZSxcbiAgTWF0Rm9ybUZpZWxkTW9kdWxlLFxuICBNYXRSaXBwbGVNb2R1bGUsXG4gIE1hdElucHV0TW9kdWxlLFxuICBNYXREYXRlcGlja2VyTW9kdWxlLFxuICBOZ2JNb2R1bGUsXG4gIE5nYlBhZ2luYXRpb25Nb2R1bGVcbl07XG5cbkBOZ01vZHVsZSh7XG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIFN3aXJlSW5wdXRDb21wb25lbnQsXG4gICAgICAgIFN3aXJlSW5kZXRlcm1pbmF0ZUNoZWNrYm94Q29tcG9uZW50LFxuICAgICAgICBTd2lyZVNvcnRGaWx0ZXJDb21wb25lbnQsXG4gICAgICAgIFN3aXJlRmlsdGVyUGlwZSxcbiAgICAgICAgU3dpcmVSYWRpb0J1dHRvbkNvbXBvbmVudCxcbiAgICAgICAgLy8gU3dpcmVTZWxlY3Rib3hDb21wb25lbnQsXG4gICAgICAgIFN3aXJlQ2hlY2tib3hDb21wb25lbnQsXG4gICAgICAgIFN3aXJlSW5jckRlY3JJbnB1dENvbXBvbmVudCxcbiAgICAgICAgU3dpcmVGaWx0ZXJTZWxlY3Rib3hDb21wb25lbnQsXG4gICAgICAgIFN3aXJlQ2hlY2tib3hGaWx0ZXJDb21wb25lbnQsXG4gICAgICAgIFN3aXJlVHdvV2F5VG9nZ2xlQnV0dG9uQ29tcG9uZW50LFxuICAgICAgICBTd2lyZVRocmVlV2F5VG9nZ2xlQnV0dG9uQ29tcG9uZW50LFxuICAgICAgICBTd2lyZVRvZ2dsZVNlbGVjdG9yQnV0dG9uQ29tcG9uZW50LFxuICAgICAgICBDaGlwc0NvbXBvbmVudCxcbiAgICAgICAgU3dpcmVQcmVmaXhEcm9wZG93bkNvbXBvbmVudCxcbiAgICAgICAgU3dpcmVTdGVwcGVyQ29tcG9uZW50LFxuICAgICAgICBTd2lyZVNpbXBsZVRvZ2dsZUNvbXBvbmVudCxcbiAgICAgICAgU3dpcmVJbnB1dEZpbHRlckNvbXBvbmVudCxcbiAgICAgICAgU3dpcmVUYWJUb2dnbGVDb21wb25lbnQsXG4gICAgICAgIFN3aXJlQnV0dG9uQ29tcG9uZW50LFxuICAgICAgICBTd2lyZURhdGVwaWNrZXJDb21wb25lbnQsXG4gICAgICAgIFN3aXJlUHJvZ3Jlc3NCYXJDb21wb25lbnQsXG4gICAgICAgIFN3aXJlQnJlYWRDcnVtYnNDb21wb25lbnQsXG4gICAgICAgIFN3aXJlUmFuZ2VEYXRlcGlja2VyQ29tcG9uZW50LFxuICAgICAgICBTd2lyZVRpbWVwaWNrZXJDb21wb25lbnQsXG4gICAgICAgIFN3aXJlUGFnaW5hdGlvbkNvbXBvbmVudCxcbiAgICAgICAgU3dpcmVUYWdzQ29tcG9uZW50LFxuICAgICAgICBTd2lyZUFjY29yZGlhbkNvbXBvbmVudCxcbiAgICAgICAgU3dpcmVOb3RpZmljYXRpb25zQ29tcG9uZW50LFxuICAgICAgICBTd2lyZURyb3Bkb3duQ29tcG9uZW50LFxuICAgICAgICBTd2lyZUxvYWRlckNvbXBvbmVudCxcbiAgICAgICAgU3dpcmVUeXBvZ3JhcGh5Q29tcG9uZW50LFxuICAgICAgICBTd2lyZVN0YXRpY1RhYmxlQ29tcG9uZW50LFxuICAgICAgICBTd2lyZUR5bmFtaWNUYWJsZUNvbXBvbmVudCxcbiAgICAgICAgU3dpcmVTaGFkb3dDb21wb25lbnQsXG4gICAgICAgIFN3aXJlU2Nyb2xsQ29tcG9uZW50LFxuICAgICAgICBTd2lyZUNvbG91ckNvbXBvbmVudCxcbiAgICBdLFxuICAgIGV4cG9ydHM6IFtcbiAgICAgICAgU3dpcmVJbnB1dENvbXBvbmVudCxcbiAgICAgICAgU3dpcmVJbmRldGVybWluYXRlQ2hlY2tib3hDb21wb25lbnQsXG4gICAgICAgIFN3aXJlU29ydEZpbHRlckNvbXBvbmVudCxcbiAgICAgICAgU3dpcmVSYWRpb0J1dHRvbkNvbXBvbmVudCxcbiAgICAgICAgLy8gU3dpcmVTZWxlY3Rib3hDb21wb25lbnQsXG4gICAgICAgIFN3aXJlQ2hlY2tib3hDb21wb25lbnQsXG4gICAgICAgIFN3aXJlSW5jckRlY3JJbnB1dENvbXBvbmVudCxcbiAgICAgICAgU3dpcmVGaWx0ZXJTZWxlY3Rib3hDb21wb25lbnQsXG4gICAgICAgIFN3aXJlQ2hlY2tib3hGaWx0ZXJDb21wb25lbnQsXG4gICAgICAgIFN3aXJlVHdvV2F5VG9nZ2xlQnV0dG9uQ29tcG9uZW50LFxuICAgICAgICBTd2lyZVRocmVlV2F5VG9nZ2xlQnV0dG9uQ29tcG9uZW50LFxuICAgICAgICBTd2lyZVRvZ2dsZVNlbGVjdG9yQnV0dG9uQ29tcG9uZW50LFxuICAgICAgICBDaGlwc0NvbXBvbmVudCxcbiAgICAgICAgU3dpcmVQcmVmaXhEcm9wZG93bkNvbXBvbmVudCxcbiAgICAgICAgU3dpcmVTdGVwcGVyQ29tcG9uZW50LFxuICAgICAgICBTd2lyZVNpbXBsZVRvZ2dsZUNvbXBvbmVudCxcbiAgICAgICAgU3dpcmVJbnB1dEZpbHRlckNvbXBvbmVudCxcbiAgICAgICAgU3dpcmVUYWJUb2dnbGVDb21wb25lbnQsXG4gICAgICAgIFN3aXJlQnV0dG9uQ29tcG9uZW50LFxuICAgICAgICBTd2lyZURhdGVwaWNrZXJDb21wb25lbnQsXG4gICAgICAgIFN3aXJlUHJvZ3Jlc3NCYXJDb21wb25lbnQsXG4gICAgICAgIFN3aXJlQnJlYWRDcnVtYnNDb21wb25lbnQsXG4gICAgICAgIFN3aXJlUmFuZ2VEYXRlcGlja2VyQ29tcG9uZW50LFxuICAgICAgICBTd2lyZVRpbWVwaWNrZXJDb21wb25lbnQsXG4gICAgICAgIFN3aXJlUGFnaW5hdGlvbkNvbXBvbmVudCxcbiAgICAgICAgU3dpcmVUYWdzQ29tcG9uZW50LFxuICAgICAgICBTd2lyZUFjY29yZGlhbkNvbXBvbmVudCxcbiAgICAgICAgU3dpcmVOb3RpZmljYXRpb25zQ29tcG9uZW50LFxuICAgICAgICBTd2lyZURyb3Bkb3duQ29tcG9uZW50LFxuICAgICAgICBTd2lyZUxvYWRlckNvbXBvbmVudCxcbiAgICAgICAgU3dpcmVUeXBvZ3JhcGh5Q29tcG9uZW50LFxuICAgICAgICBTd2lyZVN0YXRpY1RhYmxlQ29tcG9uZW50LFxuICAgICAgICBTd2lyZUR5bmFtaWNUYWJsZUNvbXBvbmVudCxcbiAgICAgICAgU3dpcmVTaGFkb3dDb21wb25lbnQsXG4gICAgICAgIFN3aXJlU2Nyb2xsQ29tcG9uZW50LFxuICAgICAgICBTd2lyZUNvbG91ckNvbXBvbmVudCxcbiAgICBdLFxuICAgIC8vIHNjaGVtYXM6W0NVU1RPTV9FTEVNRU5UU19TQ0hFTUFdLFxuICAgIHByb3ZpZGVyczogW1xuICAgICAgICB7IHByb3ZpZGU6IE5nYkRhdGVQYXJzZXJGb3JtYXR0ZXIsIHVzZUNsYXNzOiBDdXN0b21EYXRlUGFyc2VyRm9ybWF0dGVyIH1cbiAgICBdLFxuICAgIGltcG9ydHM6IFtcbiAgICAgICAgQ29tbW9uTW9kdWxlLFxuICAgICAgICBGb3Jtc01vZHVsZSxcbiAgICAgICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgICAgICAgLi4ubW9kdWxlcyxcbiAgICAgICAgU3dpcmVDb21tb25VaU1vZHVsZVxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgU3dpcmVGb3JtQ29udHJvbHNNb2R1bGUgeyB9XG4iXX0=