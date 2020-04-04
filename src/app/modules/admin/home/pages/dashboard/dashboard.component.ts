import { Component, OnInit } from '@angular/core';
import { DashboardService } from '@core/service/dashboard-service';
import { SpeekioToastService } from '@shared/service/speekio-toast.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(
    private _dashboardService: DashboardService,
    private toasterService: SpeekioToastService) { }

  ngOnInit() {

  }

  onLoadJobs() {
    this._dashboardService.Home().subscribe(result => {
      console.log(result);
    });

  }

}
