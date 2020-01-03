import { Component, OnInit } from '@angular/core';
import { PagedListingComponentBase } from '@shared/service/page-listing-component-base';
import { CourtsBookingListModelPagged } from '@core/model/courtsBooking-model/CourtsBookingListModelPagged';
import { PagingModel } from '@core/model/common/PagingModel';
import { SpeekioToastService } from '@shared/service/speekio-toast.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CourtsBookingService } from '@core/service/courtsBooking-service';
import { CustomRouter } from '@shared/service/custom-router.service';
import { Subject } from 'rxjs';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-list-courtbooking',
  templateUrl: './list-courtbooking.component.html',
  styleUrls: ['./list-courtbooking.component.css']
})
export class ListCourtbookingComponent  extends PagedListingComponentBase<CourtsBookingListModelPagged> implements OnInit {


  paggingModel: PagingModel = new PagingModel();
  courtsBookingList: CourtsBookingListModelPagged = new CourtsBookingListModelPagged();

  destroy$: Subject<boolean> = new Subject<boolean>();
  constructor(
    private courtsBookingService: CourtsBookingService,
    private toastService: SpeekioToastService,
    public activatedRoute: ActivatedRoute,
    public router: Router,
    private customRouter: CustomRouter
  ) {
    super();
  }
  ngOnInit() {
    let currentPage = this.customRouter.getQueryParamByKey(this.activatedRoute, 'page');
    if (currentPage) {
      this.paggerConfig.currentPage = currentPage;
    }
    super.ngOnInit();

  }
  pageChange(newPage: number) {

    this.paggerConfig.currentPage = newPage;
    this.customRouter.navigateToSibling(this.router, this.activatedRoute, 'courtbooking-list', { page: newPage });
    this.refresh();
  }
  changePageSize(pageSize: number) {

    this.paggerConfig.itemsPerPage = pageSize;
    this.customRouter.navigateToSibling(this.router, this.activatedRoute, 'courtbooking-list', { itemsPerPage: pageSize });
    this.refresh();
  }
  protected list(
    request: PagingModel,
    finishedCallback: Function) {
      this.courtsBookingService.getCourtsBookingList(request)
        .pipe(
          finalize(() => {
            finishedCallback();
          })
        )
        .subscribe(result => {
          if (!result || !result.body) {
            return;
          };

          var response = result.body;
          if (!response.successful) {
            this.toastService.showError(response.message);
            return;
          }

          if (response.items && response.items.length > 0) {
            this.courtsBookingList.CourtBooking = response.items;
            this.paggerConfig.totalItems = response.totalCount;
          }

        });
  }
  ngOnDestroy() {
    this.destroy$.next(true);
    // Unsubscribe from the subject
    this.destroy$.unsubscribe();
  }
}
