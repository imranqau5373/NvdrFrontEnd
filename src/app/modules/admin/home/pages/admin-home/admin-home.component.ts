import { Component, OnInit } from '@angular/core';
import { DashboardService } from '@core/service/dashboard-service';
import { SpeekioToastService } from '@shared/service/speekio-toast.service';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {

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
