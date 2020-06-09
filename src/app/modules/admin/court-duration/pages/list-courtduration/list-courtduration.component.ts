import { Component, OnInit } from '@angular/core';
import { PagedListingComponentBase } from '@shared/service/page-listing-component-base';
import { CourtsDurationListModelPagged,FilterCourtDurationRequestDto } from '@core/model/courtsDuration-model/CourtsDurationListModelPagged';
import { PagingModel } from '@core/model/common/paging.model';
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
public filter: FilterCourtDurationRequestDto = new FilterCourtDurationRequestDto();
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
    this.customRouter.navigateToSibling(this.router, this.activatedRoute, 'facilitiesduration-list', { page: newPage });
    this.refresh();
  }
  changePageSize(pageSize: number) {

    this.paggerConfig.itemsPerPage = pageSize;
    this.customRouter.navigateToSibling(this.router, this.activatedRoute, 'facilitiesduration-list', { itemsPerPage: pageSize });
    this.refresh();
  }
  protected list(
    request: PagingModel,
    finishedCallback: Function) {
      this.courtsDurationService.getCourtsDurationList(this.filter.Name.value, this.filter.AddedQuestions.value,
        this.filter.LastUpdated.value, this.filter.CreatedBy.value, this.filter.StatusId.value,
        this.sorting, this.sortDirection ? 'ASC' : 'DESC', request.currentPage, request.itemsPerPage)
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
