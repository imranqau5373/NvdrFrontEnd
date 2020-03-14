import { OnInit, OnDestroy, Directive, Input, ViewContainerRef, TemplateRef } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { PermissionService } from '@shared/service/permission.service';

@Directive({
    selector: '[userHasPermission]'
})
export class HasPermissionDirective implements OnInit {
    // the role the user must have 
    // @Input() userHasPermission: string;
    // isVisible = false;

    constructor(
        private viewContainerRef: ViewContainerRef,
        private templateRef: TemplateRef<any>,
        private permissionService: PermissionService
    ) { }

    ngOnInit() {
    }

    @Input()
    set userHasPermission(permissionName: string) {
        debugger;
        const isVisible = this.permissionService.hasPermission(permissionName);
        if (isVisible) {
            this.viewContainerRef.createEmbeddedView(this.templateRef);
        }
        else {
            this.viewContainerRef.clear();
        }
    }
}