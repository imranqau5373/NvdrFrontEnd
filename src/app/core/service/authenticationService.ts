import { Injectable } from '@angular/core';
import { HttpService } from '../../shared/api-service';
import { Router } from '@angular/router';
import { UserModel, UserPermissionModel } from '@core/model/user.model';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private loggedIn = new BehaviorSubject<boolean>(this.isUserLoggedIn());
  private loggedInUser = new BehaviorSubject<UserModel>(this.getUser());
  index = 1;
  constructor(
    private _httpService: HttpService,
    private router: Router
  ) { }

  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  get getUserAsync() {
    return this.loggedInUser.asObservable();
  }

  isUserLoggedIn() {
    let user = this.getUser();
    return user ? true : false;
  }

  getJwtToken() {
    let user = this.getUser();
    return (user && user.authenticationToken) ? user.authenticationToken : "";
  }


  logoutAndRedirectToLogin() {
    this.removeLocalStorageUser();
    this.loggedIn.next(false);
    this.router.navigate(['/auth/login']);
  }

  loginAndRedirectToHome(user: any) {
    this.saveUser(user);
    debugger;
    if (user.permissions) {
      this.saveUserPermissions(user.permissions);
    }
    this.loggedInUser.next(user);
    this.loggedIn.next(true);
    this.router.navigate(['/admin/home']);
  }

  saveUserPermissions(permissions: UserPermissionModel[]) {
    let permissionList = permissions.map(item => {
      let claim = new UserPermissionModel();
      claim.type = item.type;
      claim.value = item.value;
      return claim;
    });
    localStorage.setItem('userClaims', JSON.stringify(permissionList));
  }

  removeLocalStorageUser() {
    localStorage.removeItem('speekioUser');
    localStorage.removeItem('userClaims');
  }

  //method use to store user in local storage
  saveUser(user: any) {
    localStorage.setItem('speekioUser', JSON.stringify(user));
  }

  getUser(): UserModel {
    return JSON.parse(localStorage.getItem('speekioUser')) as UserModel;
  }

  getUserName(): string {
    let user = this.getUser();
    return (user && user.userName) ? user.userName : "";
  }

  getUserPermissions(): UserPermissionModel[] {
    return JSON.parse(localStorage.getItem('userClaims')) as UserPermissionModel[];
  }

  getPictureUrl(): string {
    let user = this.getUser();
    return (user && user.pictureUrl) ? user.pictureUrl : "";
  }




}


