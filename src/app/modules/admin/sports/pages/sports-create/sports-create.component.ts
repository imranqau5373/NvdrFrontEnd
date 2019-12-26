import { Component, OnInit } from '@angular/core';
import { SportsService } from '@core/service/sports-service';
import { SpeekioToastService } from '@shared/service/speekio-toast.service';

@Component({
  selector: 'app-sports-create',
  templateUrl: './sports-create.component.html',
  styleUrls: ['./sports-create.component.css']
})
export class SportsCreateComponent implements OnInit {

  constructor(
    private sportsService: SportsService,
    private toastService: SpeekioToastService,
  ) { }

  ngOnInit() {

    this.getSportsCompany();


  }

  getSportsCompany(){
    this.sportsService.getSportsCompany().subscribe(result => {
      debugger;
      if (result && result.body && result.body.successful) {
        this.toastService.showSuccess(result.body.message);
      }
      else {
        this.toastService.showError(result.body.message);
      }
    });

  }

  addSports(){
    alert('add sports')
  }

}
