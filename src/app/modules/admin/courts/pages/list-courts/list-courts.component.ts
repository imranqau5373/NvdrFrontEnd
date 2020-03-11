import { Component, OnInit } from '@angular/core';
import { PagedListingComponentBase } from '@shared/service/page-listing-component-base';
import { CourtsListModelPagged } from '@core/model/courts-model/CourtsListModelPagged';
import { PagingModel } from '@core/model/common/paging.model';
import { SpeekioToastService } from '@shared/service/speekio-toast.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CourtsService } from '@core/service/courts-service';
import { CustomRouter } from '@shared/service/custom-router.service';
import { Subject } from 'rxjs';
import { finalize } from 'rxjs/operators';
@Component({
  selector: 'app-list-courts',
  templateUrl: './list-courts.component.html',
  styleUrls: ['./list-courts.component.css']
})
export class ListCourtsComponent extends PagedListingComponentBase<CourtsListModelPagged> implements OnInit {


  paggingModel: PagingModel = new PagingModel();
  courtsList: CourtsListModelPagged = new CourtsListModelPagged();

  destroy$: Subject<boolean> = new Subject<boolean>();
  constructor(
    private courtsService: CourtsService,
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
    this.customRouter.navigateToSibling(this.router, this.activatedRoute, 'courts-list', { page: newPage });
    this.refresh();
  }
  changePageSize(pageSize: number) {

    this.paggerConfig.itemsPerPage = pageSize;
    this.customRouter.navigateToSibling(this.router, this.activatedRoute, 'courts-list', { itemsPerPage: pageSize });
    this.refresh();
  }
  protected list(
    request: PagingModel,
    finishedCallback: Function) {
      this.courtsService.getCourtsList(request)
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
            this.courtsList.courts = response.items;
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
