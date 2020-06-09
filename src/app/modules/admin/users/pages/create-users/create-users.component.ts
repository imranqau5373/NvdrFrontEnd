import { Component, OnInit } from '@angular/core';
import { UsersService } from '@core/service/user-service';
import { SpeekioToastService } from '@shared/service/speekio-toast.service';
import { AddUserModel } from '@core/model/users-model/add-users.model';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomRouter } from '@shared/service/custom-router.service';
@Component({
  selector: 'app-create-users',
  templateUrl: './create-users.component.html',
  styleUrls: ['./create-users.component.css']
})
export class CreateUsersComponent implements OnInit {
  constructor(
    private usersService: UsersService,
    private toastService: SpeekioToastService,
    public activatedRoute: ActivatedRoute,
    public router: Router,
    private customRouter: CustomRouter,
  ) { }

  companyList: any[];
  addUsersData : AddUserModel;
  userId : number = 0;
  isUpdated : boolean = false;
  //companyId: number = +localStorage.getItem('companyId');
  ngOnInit() {
    this.addUsersData = new AddUserModel();
    this.userId = this.activatedRoute.snapshot.params['id'];
    if(this.userId > 0){
      this.isUpdated = true;
      this.getUser(this.userId);
    }
  }

  addUser(){
    if(this.isUpdated == true)
    this.updateUser();
    else{
    this.usersService.addUser(this.addUsersData).subscribe(result => {
      if (result && result.body.successful) {
        this.toastService.showSuccess(result.body.message);
        this.customRouter.navigateToSibling(this.router, this.activatedRoute, 'users-list');

      }
      else {
        this.toastService.showError(result.message);
      }
    });
  }
}
  getUser(userId:number){
    this.usersService.getUser(userId).subscribe(result => {
      if (result && result.successful) {
        this.addUsersData = result;
      }
      else {
        this.toastService.showError(result.message);
      }
    });
  }

  updateUser(){
    this.usersService.updateUser(this.addUsersData).subscribe(result => {
      if (result && result.body.successful) {
        this.toastService.showSuccess(result.body.message);
        this.customRouter.navigateToSibling(this.router, this.activatedRoute, 'users-list');

      }
      else {
        this.toastService.showError(result.message);
      }
    });
  }

}
