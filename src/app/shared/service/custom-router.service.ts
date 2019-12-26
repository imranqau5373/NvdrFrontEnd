import { ActivatedRoute, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class CustomRouter {
    constructor(
        // public router: Router,
        // public activatedRoute: ActivatedRoute
    ) {
    }

    //function to get queryParam value by key
    getQueryParamByKey(activatedRoute: ActivatedRoute, key: string): any {
        return activatedRoute.snapshot.queryParamMap.get(key);
    }

    //function to redirect to sibling route
    navigateToSibling(router: Router, activatedRoute: ActivatedRoute, siblingRoute: string, queryParam?: any, routeParam?: any) {
        if (routeParam) {
            router.navigate([siblingRoute, routeParam], { queryParams: queryParam, relativeTo: activatedRoute.parent });
        }
        else {
            router.navigate([siblingRoute], { queryParams: queryParam, relativeTo: activatedRoute.parent });
        }
    }
}