import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '@core/service/authenticationService';
import { Router } from '@angular/router';
import { AccountService } from '@core/service/account-service';
import { UserModel } from '@core/model/user.model';
import { Observable } from 'rxjs';
import { ConnectionService } from '@core/service/other/connection.service';

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
  constructor(  private router: Router,
    private _accountService : AccountService,
    private authenticationService: AuthenticationService,
    private connectionService: ConnectionService
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
    //  this.userName = user.userName;
      this.completeName = user.completeName;
      let apiUrl = this.connectionService.getApiUrl();
      if (user.pictureUrl == null) {
        this.pictureUrl = 'assets/img/img_avatar.png';
      }
      ++this.authenticationService.index;
    });

  }

  userLogOff(){
    this._accountService.UserLogOff().subscribe(result => {
      console.log(result);
      this.authenticationService.logoutAndRedirectToLogin();
    });



  }

}
