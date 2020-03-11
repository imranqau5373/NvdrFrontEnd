import { Component, OnInit } from '@angular/core';
import { PagedListingComponentBase } from '@shared/service/page-listing-component-base';
import { UserListModelPagged } from '@core/model/users-model/UsersListModelPagged';
import { PagingModel } from '@core/model/common/paging.model';
import { SpeekioToastService } from '@shared/service/speekio-toast.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from '@core/service/user-service';
import { CustomRouter } from '@shared/service/custom-router.service';
import { Subject } from 'rxjs';
import { finalize } from 'rxjs/operators';
@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent extends PagedListingComponentBase<UserListModelPagged> implements OnInit {

    paggingModel: PagingModel = new PagingModel();
    usersList: UserListModelPagged = new UserListModelPagged();

    destroy$: Subject<boolean> = new Subject<boolean>();
    constructor(
      private usersService: UsersService,
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

    getUsersList(){

    }

    pageChange(newPage: number) {

      this.paggerConfig.currentPage = newPage;
      this.customRouter.navigateToSibling(this.router, this.activatedRoute, 'users-list', { page: newPage });
      this.refresh();
    }

    changePageSize(pageSize: number) {

      this.paggerConfig.itemsPerPage = pageSize;
      this.customRouter.navigateToSibling(this.router, this.activatedRoute, 'users-list', { itemsPerPage: pageSize });
      this.refresh();
    }

    protected list(
      request: PagingModel,
      finishedCallback: Function) {
        this.usersService.getUsersList(request)
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
              this.usersList.users = response.items;
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
