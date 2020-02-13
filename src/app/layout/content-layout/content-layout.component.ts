import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { MenuService } from '@core/service/other/menu.service';
import { AuthenticationService } from '@core/service/authenticationService';

@Component({
  selector: 'app-content-layout',
  templateUrl: './content-layout.component.html',
  styleUrls: ['./content-layout.component.css']
})
export class ContentLayoutComponent implements OnInit {

  isLoggedIn$: Observable<boolean>;
  isLoggedInValue: boolean;
  name: string;
  menu: Array<any> = [];
  breadcrumbList: Array<any> = [];

  constructor(private _router: Router,
    private authenticationService: AuthenticationService,
    private menuService: MenuService,) { }

  ngOnInit() {
  }

  setPadding() {
    if (this.isLoggedInValue)
      return '0px';
    else
      return '3.125rem';

  }

  listenRouting() {
    let routerUrl: string, routerList: Array<any>, target: any;
    this._router.events.subscribe((router: any) => {

      routerUrl = router.urlAfterRedirects;
      if (routerUrl && typeof routerUrl === 'string') {

        target = this.menu;
        this.breadcrumbList.length = 0;

        routerList = routerUrl.slice(7).split('/');
        routerList.forEach((router, index) => {
          if (target != null) {
            target = target.find(page => page.key === router);

            if (target != null) {
              this.breadcrumbList.push({
                name: target.name,
                path: (index === 0) ? target.path : `${this.breadcrumbList[index - 1].path}/${target.path.slice(2)}`
              });

              if (index + 1 !== routerList.length) {
                target = target.children;
              }
            }
          }
        });
      }
    });
  }

}
