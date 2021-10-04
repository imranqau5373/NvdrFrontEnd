import { Component, OnInit } from '@angular/core';
import { FaultEmailService } from '@core/service/fault-email.service';

@Component({
  selector: 'app-fault-email-list',
  templateUrl: './fault-email-list.component.html',
  styleUrls: ['./fault-email-list.component.css']
})
export class FaultEmailListComponent implements OnInit {

  constructor(private faultEmailService : FaultEmailService) { }
  faultEmailList : any = [];
  ngOnInit() {
  }

  
  getNvdrData(){
    this.faultEmailService.getFaultEmailsList().subscribe(result => {
      this.faultEmailList = result;
    });
  }

}
