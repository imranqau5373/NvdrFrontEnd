import { Component, OnInit } from '@angular/core';
import { PagedListingComponentBase } from '@shared/service/page-listing-component-base';
import { CompanysListModelPagged } from '@core/model/company-model/CompanyListModelPagged';
import { PagingModel } from '@core/model/common/PagingModel';
import { SpeekioToastService } from '@shared/service/speekio-toast.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CompanyService } from '@core/service/company-service';
import { CustomRouter } from '@shared/service/custom-router.service';
import { Subject } from 'rxjs';
import { finalize } from 'rxjs/operators';
@Component({
  selector: 'app-list-company',
  templateUrl: './list-company.component.html',
  styleUrls: ['./list-company.component.css']
})
export class ListCompanyComponent extends PagedListingComponentBase<CompanysListModelPagged> implements OnInit {
  paggingModel: PagingModel = new PagingModel();
  companyList: CompanysListModelPagged = new CompanysListModelPagged();
destroy$: Subject<boolean> = new Subject<boolean>();
constructor(
  private companyService: CompanyService,
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
  getCompanyList(){

  }

  pageChange(newPage: number) {

    this.paggerConfig.currentPage = newPage;
    this.customRouter.navigateToSibling(this.router, this.activatedRoute, 'company-list', { page: newPage });
    this.refresh();
  }

  changePageSize(pageSize: number) {

    this.paggerConfig.itemsPerPage = pageSize;
    this.customRouter.navigateToSibling(this.router, this.activatedRoute, 'company-list', { itemsPerPage: pageSize });
    this.refresh();
  }

  protected list(
    request: PagingModel,
    finishedCallback: Function) {
      this.companyService.getCompanyList(request)
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
            this.companyList.Company = response.items;
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
