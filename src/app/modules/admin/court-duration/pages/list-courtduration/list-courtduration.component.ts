import { Component, OnInit } from '@angular/core';
import { PagedListingComponentBase } from '@shared/service/page-listing-component-base';
import { CourtsDurationListModelPagged } from '@core/model/courtsDuration-model/CourtsDurationListModelPagged';
import { PagingModel } from '@core/model/common/PagingModel';
import { SpeekioToastService } from '@shared/service/speekio-toast.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CourtsDurationService } from '@core/service/courtsDuration-service';
import { CustomRouter } from '@shared/service/custom-router.service';
import { Subject } from 'rxjs';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-list-courtduration',
  templateUrl: './list-courtduration.component.html',
  styleUrls: ['./list-courtduration.component.css']
})
export class ListCourtdurationComponent extends PagedListingComponentBase<CourtsDurationListModelPagged> implements OnInit {


  paggingModel: PagingModel = new PagingModel();
  courtsDurationList: CourtsDurationListModelPagged = new CourtsDurationListModelPagged();

  destroy$: Subject<boolean> = new Subject<boolean>();
  constructor(
    private courtsDurationService: CourtsDurationService,
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
    this.customRouter.navigateToSibling(this.router, this.activatedRoute, 'courtduration-list', { page: newPage });
    this.refresh();
  }
  changePageSize(pageSize: number) {

    this.paggerConfig.itemsPerPage = pageSize;
    this.customRouter.navigateToSibling(this.router, this.activatedRoute, 'courtduration-list', { itemsPerPage: pageSize });
    this.refresh();
  }
  protected list(
    request: PagingModel,
    finishedCallback: Function) {
      this.courtsDurationService.getCourtsDurationList(request)
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
            debugger;
            this.courtsDurationList.courts = response.items;
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
