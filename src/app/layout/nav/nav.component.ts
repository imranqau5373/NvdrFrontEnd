import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '@core/service/authenticationService';
import { Router } from '@angular/router';
import { AccountService } from '@core/service/account-service';
import { UserModel } from '@core/model/user.model';
import { Observable } from 'rxjs';
import { ConnectionService } from '@core/service/other/connection.service';
import { MenuService } from '@core/service/other/menu.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  isLoggedIn$: Observable<boolean>;
  loggedInUser$: Observable<UserModel>;
  userName: string = null;
  pictureUrl: string = null;
  name: string;
  completeName: string;
  breadcrumbList: Array<any> = [];
  menu: Array<any> = [];
  constructor(  private _router: Router,
    private _accountService : AccountService,
    private authenticationService: AuthenticationService,
    private connectionService: ConnectionService,
    private menuService: MenuService,
    
    ) {

    this.userName = localStorage.getItem("userName");

  }

  ngOnInit() {

    this.isLoggedIn$ = this.authenticationService.isLoggedIn;
    this.setUserDetail();
  }

  setUserDetail() {
    // userModel = this.authenticationService.getUser();
    this.authenticationService.getUserAsync.subscribe(user => {
      this.pictureUrl = null;
      this.completeName = user.userName;
      let apiUrl = this.connectionService.getApiUrl();
      if (user.pictureUrl == null) {
        this.pictureUrl = 'assets/img/img_avatar.png';
      }
      ++this.authenticationService.index;
    });

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

          target = target.find(page => page.path.slice(2) === router);

          this.breadcrumbList.push({
            name: target.name,

            path: (index === 0) ? target.path : `${this.breadcrumbList[index - 1].path}/${target.path.slice(2)}`
          });


          if (index + 1 !== routerList.length) {
            target = target.children;
          }
        });

      }
    });
  }

  userLogOff(){
    this._accountService.UserLogOff().subscribe(result => {
      console.log(result);
      this.authenticationService.logoutAndRedirectToLogin();
    });



  }

  openChangePasswordModal(){
    
  }

}
