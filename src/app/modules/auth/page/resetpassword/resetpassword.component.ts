import { Component, OnInit } from '@angular/core';
import { AccountService } from '@core/service/account-service';
import { ActivatedRoute,Router, ParamMap   } from '@angular/router';
import { AlertService } from '@shared/_alert';
import { ResetPasswordModel } from './resetpassword.model';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css']
})
export class ResetpasswordComponent implements OnInit {

  resetPasswordModel: ResetPasswordModel = new ResetPasswordModel();
  constructor(private _accountService : AccountService,
    private router: ActivatedRoute, 
    private urlRouter: Router, 
    
    private alertService: AlertService) { }

  ngOnInit() {
    //on load verify the token and email to verify that token with email against it is valid or not.
    //before update need to verify that same thing against it.
    //token and email is required.
    let token = this.router.snapshot.paramMap.get('token');
    this.resetPasswordModel.email = null;

  }



  resetPassword(){
    this.alertService.clear();
    this.resetPasswordModel.email = this.router.snapshot.queryParams.email;
    //let newToken = encodeURIComponent(this.router.snapshot.queryParams.token);
    this.resetPasswordModel.resetToken = this.router.snapshot.queryParams.token;
    this.resetPasswordModel.NewPassword = this.resetPasswordModel.password;
    this._accountService.ResetPassword(this.resetPasswordModel).subscribe(result =>{
      if(result && result.body && result.body.successful){
          this.urlRouter.navigate(['/auth/updatepassword']);
      }
      else
      {
        if(result.body.errors){
          this.alertService.error(result.body.errors[0].description);
        }
       
      }

 
    });
  }

  closeDialog(){
    var x = document.getElementById("myDialog");
    
  }

}
