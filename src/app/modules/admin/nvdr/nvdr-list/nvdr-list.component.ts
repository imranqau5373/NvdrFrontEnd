import { Component, OnInit } from '@angular/core';
import { NvdrService } from '@core/service/nvdr-service';

@Component({
  selector: 'app-nvdr-list',
  templateUrl: './nvdr-list.component.html',
  styleUrls: ['./nvdr-list.component.css']
})
export class NvdrListComponent implements OnInit {

  constructor(private nvdrService : NvdrService) { }
  nvdrList : any = [];
  ngOnInit() {
    this.getNvdrData();

  }

  getNvdrData(){
    this.nvdrService.getNvdrList().subscribe(result => {
      this.nvdrList = result;
    });
  }

}
