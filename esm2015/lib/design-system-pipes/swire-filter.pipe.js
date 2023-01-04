import { Pipe } from '@angular/core';
import * as i0 from "@angular/core";
export class SwireFilterPipe {
    transform(value, filterdata) {
        if (!value) {
            return [];
        }
        if (!filterdata) {
            return value;
        }
        filterdata = filterdata.toString().toLowerCase();
        return value.filter((it) => {
            return JSON.stringify(it).toLowerCase().includes(filterdata);
        });
    }
}
SwireFilterPipe.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.0.5", ngImport: i0, type: SwireFilterPipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe });
SwireFilterPipe.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "12.0.0", version: "12.0.5", ngImport: i0, type: SwireFilterPipe, name: "swireFilter" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.0.5", ngImport: i0, type: SwireFilterPipe, decorators: [{
            type: Pipe,
            args: [{
                    name: 'swireFilter'
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3dpcmUtZmlsdGVyLnBpcGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zd2lyZS1saWIvc3JjL2xpYi9kZXNpZ24tc3lzdGVtLXBpcGVzL3N3aXJlLWZpbHRlci5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDOztBQUtwRCxNQUFNLE9BQU8sZUFBZTtJQUMxQixTQUFTLENBQUMsS0FBWSxFQUFFLFVBQWU7UUFDckMsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUFFLE9BQU8sRUFBRSxDQUFDO1NBQUU7UUFDMUIsSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUFFLE9BQU8sS0FBSyxDQUFDO1NBQUU7UUFDbEMsVUFBVSxHQUFHLFVBQVUsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNqRCxPQUFPLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRTtZQUN6QixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQy9ELENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7NEdBUlUsZUFBZTswR0FBZixlQUFlOzJGQUFmLGVBQWU7a0JBSDNCLElBQUk7bUJBQUM7b0JBQ0osSUFBSSxFQUFFLGFBQWE7aUJBQ3BCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AUGlwZSh7XG4gIG5hbWU6ICdzd2lyZUZpbHRlcidcbn0pXG5leHBvcnQgY2xhc3MgU3dpcmVGaWx0ZXJQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIHRyYW5zZm9ybSh2YWx1ZTogYW55W10sIGZpbHRlcmRhdGE6IGFueSk6IGFueVtdIHtcbiAgICBpZiAoIXZhbHVlKSB7IHJldHVybiBbXTsgfVxuICAgIGlmICghZmlsdGVyZGF0YSkgeyByZXR1cm4gdmFsdWU7IH1cbiAgICBmaWx0ZXJkYXRhID0gZmlsdGVyZGF0YS50b1N0cmluZygpLnRvTG93ZXJDYXNlKCk7XG4gICAgcmV0dXJuIHZhbHVlLmZpbHRlcigoaXQpID0+IHtcbiAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShpdCkudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhmaWx0ZXJkYXRhKTtcbiAgICB9KTtcbiAgfVxuXG59XG4iXX0=