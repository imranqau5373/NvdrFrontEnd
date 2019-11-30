import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '@core/service/authenticationService';
import { Router } from '@angular/router';
import { AccountService } from '@core/service/account-service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  userName: string = "";
  constructor(  private router: Router,
    private _accountService : AccountService,
    
    ) {
    
    this.userName = localStorage.getItem("userName");

  }

  ngOnInit() {
    
  }

  UserLogOff(){
    this._accountService.UserLogOff().subscribe(result =>{
      localStorage.removeItem('authenticationToken');
      localStorage.removeItem('userName');
      this.router.navigate(['/auth/login']);
    });



  }

}
