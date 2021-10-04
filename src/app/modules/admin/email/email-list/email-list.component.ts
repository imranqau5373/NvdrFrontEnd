import { Component, OnInit } from '@angular/core';
import { EmailService } from '@core/service/email-service';

@Component({
  selector: 'app-email-list',
  templateUrl: './email-list.component.html',
  styleUrls: ['./email-list.component.css']
})
export class EmailListComponent implements OnInit {

  constructor(private emailService : EmailService) { }
  emailList : any = [];
  ngOnInit() {
  }

  
  getNvdrData(){
    this.emailService.getEmailsList().subscribe(result => {
      this.emailList = result;
    });
  }

}
