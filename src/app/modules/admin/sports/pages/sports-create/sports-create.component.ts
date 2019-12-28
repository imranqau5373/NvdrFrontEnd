import { Component, OnInit } from '@angular/core';
import { SportsService } from '@core/service/sports-service';
import { SpeekioToastService } from '@shared/service/speekio-toast.service';
import { AddSportsModel } from '@core/model/sports-model/add-sports.mode';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomRouter } from '@shared/service/custom-router.service';
@Component({
  selector: 'app-sports-create',
  templateUrl: './sports-create.component.html',
  styleUrls: ['./sports-create.component.css']
})
export class SportsCreateComponent implements OnInit {

  constructor(
    private sportsService: SportsService,
    private toastService: SpeekioToastService,
    public activatedRoute: ActivatedRoute,
    public router: Router,
    private customRouter: CustomRouter,
  ) { }

  companyList: any[];
  addSportsData : AddSportsModel;

  ngOnInit() {
    this.addSportsData = new AddSportsModel();
    this.getSportsCompany();
    this.getSports(2);


  }

  getSportsCompany(){
    this.sportsService.getSportsCompany().subscribe(result => {
      if (result && result.successful) {
        this.companyList = result.companyList;
      }
      else {
        this.toastService.showError(result.message);
      }
    });

  }

  selectCompany(companyId){
    this.addSportsData.CompanyId = companyId;
  }

  addSports(){
    this.sportsService.addSports(this.addSportsData).subscribe(result => {
      debugger;
      if (result && result.successful) {
        this.toastService.showSuccess(result.body.message);
        this.customRouter.navigateToSibling(this.router, this.activatedRoute, 'sports-list');
        
      }
      else {
        this.toastService.showError(result.message);
      }
    });
  }

  getSports(sportsId:number){
    debugger;
    this.sportsService.getSports(sportsId).subscribe(result => {
      debugger;
      if (result && result.successful) {
        this.toastService.showSuccess(result.body.message);
        this.customRouter.navigateToSibling(this.router, this.activatedRoute, 'sports-list');
        
      }
      else {
        this.toastService.showError(result.message);
      }
    });
  }

}
