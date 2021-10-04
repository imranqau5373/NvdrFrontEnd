import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NvdrModel } from '@core/model/nvdr-model';
import { NvdrService } from '@core/service/nvdr-service';
import { CustomRouter } from '@shared/service/custom-router.service';
import { SpeekioToastService } from '@shared/service/speekio-toast.service';

@Component({
  selector: 'app-nvdr-add',
  templateUrl: './nvdr-add.component.html',
  styleUrls: ['./nvdr-add.component.css']
})
export class NvdrAddComponent implements OnInit {

  constructor(    private toastService: SpeekioToastService,
    public activatedRoute: ActivatedRoute,
    public router: Router,
    private nvdrService : NvdrService,
    private customRouter: CustomRouter) { }
    addNvdrData : NvdrModel;
    nvdrId : number;
    isUpdated : boolean;
  ngOnInit() {
    this.addNvdrData = new NvdrModel();
    this.nvdrId = this.activatedRoute.snapshot.params['id'];
    if(this.nvdrId > 0){
      this.isUpdated = true;
      this.getNvdrDevice(this.nvdrId);
    }
  }

  getNvdrDevice(nvdrId){
    this.nvdrService.getNvdr(nvdrId).subscribe(result => {
      debugger;
      if (result) {
        this.addNvdrData = result;
      }
      else {
        this.toastService.showError("not able to get nvdr device data.");
      }
    });
  }

  updateNvdrDevice(){
    this.nvdrService.updatevdr(this.addNvdrData).subscribe(result => {
      if (result) {
        this.toastService.showSuccess("Successfully updated nvdr device.");
        this.customRouter.navigateToSibling(this.router, this.activatedRoute, 'nvdr-list');

      }
      else {
        this.toastService.showError("Not able to update nvdr device.");
      }
    });
  }

  addNvdrDevice(){
    if(this.isUpdated == true)
    this.updateNvdrDevice();
    else{
    this.nvdrService.addNvdr(this.addNvdrData).subscribe(result => {
      if (result.body) {
        this.toastService.showSuccess("nvdr device added successfully");
        this.customRouter.navigateToSibling(this.router, this.activatedRoute, 'nvdr-list');
      }
      else {
        this.toastService.showError(result.message);
      }
    });
  }
  }

}
