import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CourtsDurationService } from '@core/service/courtsDuration-service';
import { SpeekioToastService } from '@shared/service/speekio-toast.service';
import { CustomRouter } from '@shared/service/custom-router.service';
import { ViewDurationSlots } from '@core/model/courtsDuration-model/view-duration-slots.model';

@Component({
  selector: 'app-view-courtduration',
  templateUrl: './view-courtduration.component.html',
  styleUrls: ['./view-courtduration.component.css']
})
export class ViewCourtdurationComponent implements OnInit {

  constructor(   private courtsDurationService: CourtsDurationService,
    private toastService: SpeekioToastService,
    public activatedRoute: ActivatedRoute,
    public router: Router,
    private customRouter: CustomRouter,
    ) { }

  durationId : number;
  durationSlotsList : ViewDurationSlots[] ;

  ngOnInit() {

    this.durationId = this.activatedRoute.snapshot.params['durationId'];

    this.getDurationList();
  }

  getDurationList(){
    debugger;
    this.courtsDurationService.getDurationSlots(this.durationId).subscribe(result => {
      debugger;
      if (result && result.successful) {
        this.durationSlotsList = result.slotsList;
        if(this.durationSlotsList && this.durationSlotsList.length > 0){

        }
  
      }
      else {
        this.toastService.showError(result.message);
      }
    });
    

  }

}
