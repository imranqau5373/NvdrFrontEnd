import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { AccountService } from '@core/service/account-service';
import { LoginModel } from './login.model';
import { Router } from '@angular/router';
import { AlertService } from '../../../../shared/_alert';
import { ForgetPasswordModel } from './forgetpassword.model';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isLoading: boolean;
  loginForm: FormGroup;
  ForgetPasswordModel : ForgetPasswordModel = new ForgetPasswordModel();
  signInModel: LoginModel = new LoginModel();

  constructor(
    private _accountService : AccountService,
    private router: Router, 
    private alertService: AlertService
  ) {

  
  }


  ngOnInit() { 

  }

  login() {
    this.alertService.clear();
    localStorage.setItem('authenticationToken', "asdftse234324234234234");
    localStorage.setItem('userName', "Jermey");
  
    this.router.navigate(['/admin/home']);

  }

  RecoverAccount(){
    this.alertService.clear();
    this._accountService.RecoverAccount(this.ForgetPasswordModel).subscribe(result =>{
      document.getElementById("closeDialog").click();
      if(result && result.body && result.body.sentPasswordResetLinkToEmail){
        this.alertService.success("Reset Password Email Sent Successfully.");
      }
      else
      {
        this.alertService.error(result.body.message);
      }

 
    });

  }

 

  

}
