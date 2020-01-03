import { Component, OnInit } from '@angular/core';
import { PagedListingComponentBase } from '@shared/service/page-listing-component-base';
import { SportsListModelPagged } from '@core/model/sports-model/SportsListModelPagged';
import { PagingModel } from '@core/model/common/PagingModel';
import { SpeekioToastService } from '@shared/service/speekio-toast.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SportsService } from '@core/service/sports-service';
import { CustomRouter } from '@shared/service/custom-router.service';
import { Subject } from 'rxjs';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-sports-list',
  templateUrl: './sports-list.component.html',
  styleUrls: ['./sports-list.component.css']
})
export class SportsListComponent extends PagedListingComponentBase<SportsListModelPagged> implements OnInit {


  paggingModel: PagingModel = new PagingModel();
  sportsList: SportsListModelPagged = new SportsListModelPagged();

  destroy$: Subject<boolean> = new Subject<boolean>();
  constructor(
    private sportsService: SportsService,
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

  getSportsList(){

  }

  pageChange(newPage: number) {

    this.paggerConfig.currentPage = newPage;
    this.customRouter.navigateToSibling(this.router, this.activatedRoute, 'sports-list', { page: newPage });
    this.refresh();
  }

  changePageSize(pageSize: number) {

    this.paggerConfig.itemsPerPage = pageSize;
    this.customRouter.navigateToSibling(this.router, this.activatedRoute, 'sports-list', { itemsPerPage: pageSize });
    this.refresh();
  }

  protected list(
    request: PagingModel,
    finishedCallback: Function) {
      this.sportsService.getSportsList(request)
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
            this.sportsList.Sports = response.items;
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
