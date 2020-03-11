import { Injector, OnInit, HostListener } from '@angular/core';
import { NgbDateStruct, NgbTimeStruct } from '@ng-bootstrap/ng-bootstrap';
import { PagingModel } from '@core/model/common/paging.model';

declare var $: any;

export class PagedResultDto {
    items: any[];
    totalCount: number;
}

export class EntityDto {
    id: number;
}

export class PagedRequestDto {
    skipCount: number;
    maxResultCount: number;
}

export class StatusModelDto {
    id: number;
    status: string;
    checked: boolean;
    constructor(id: number, status: string) {
        this.id = id;
        this.status = status;
        this.checked = false;
    }
}

export class DateFilterDto {
    Date: NgbDateStruct;
    CompareType: number;
}

export class TimeFilterDto {
    Time: NgbTimeStruct;
    CompareType: number;
}

export class SearchModelDto {
    key: string;
    defaultValue: string;
    value: any;
    isOptionType: boolean;
    options: StatusModelDto[] | undefined | null;
}

export interface ISearchModel {
    Id: SearchModelDto;
}

export abstract class PagedListingComponentBase<TEntityDto> implements OnInit {

    public pageSize = 10;
    // public pageNumber = 1;
    // public totalPages = 1;
    public totalItems: number;
    public sorting: string = "";
    public sortDirection = true;
    public isTableLoading = false;
    public filterApplied = false;
    public selectAllCheckboxList = false;
    public filter: ISearchModel;
    public pageSizeList: number[] = [10, 25, 50, 100, 250];
    public bulkList: number[] = [];
    // initializing pagger config with default values
    paggerConfig: PagingModel = {
        currentPage: 1,
        itemsPerPage: this.pageSizeList[0],
        totalItems: 1
    };
    constructor() {
        // super(injector);
    }

    @HostListener('click') onclicking() {
        $(document).on('show.bs.dropdown', '.table td .dropdown', function (e) {
            $(this).closest('tr').addClass('active');
        });
        $(document).on('hidden.bs.dropdown', '.table td .dropdown', function (e) {
            $(this).closest('tr').removeClass('active');
        });
    }

    public changeModel(ev, val, arrayLength): void {
        if (ev.target.checked) {
            this.bulkList.push(val);
            $(ev.target.parentElement).closest('tr').addClass('active');
        } else {
            const i = this.bulkList.indexOf(val);
            this.bulkList.splice(i, 1);
            $(ev.target.parentElement).closest('tr').removeClass('active');

        }
        this.selectAllCheckboxList = arrayLength === this.bulkList.length;
    }


    ngOnInit(): void {
        this.refresh();
    }

    public changePageSize(event): void {
        this.refresh();
    }

    public sort(sortBy: string): void {
        if (sortBy === this.sorting) {
            this.sortDirection = !this.sortDirection;
        } else {
            this.sortDirection = true;
        }

        this.sorting = sortBy;

        this.refresh();
    }

    public searchInList(searchType: string, newValue: any) {
        debugger;
        const obj = this.filter[searchType];
        const storageKey = obj.key;
        let valueToStore = newValue;
        if (obj.isOptionType) {
            const filtered = obj.options.filter(x => newValue.some(y => x.id === y));
            valueToStore = JSON.stringify(filtered);
        }

        obj.value = newValue;

        // localStorageService.set(storageKey, valueToStore);
        this.filterApplied = true;
        this.refresh();
    }

    public searchInDynamicList(key: string, searchType: string, newValue: any) {
        const obj = this.filter[searchType];

        var existFilter = obj.filter(x => x.key === key);
        if (existFilter != null && existFilter.length > 0) {
            existFilter[0].value = newValue;
        } else {
            obj.push({
                key: key,
                value: newValue,
            });
        }
        // localStorageService.set(storageKey, valueToStore);
        this.filterApplied = true;
        this.refresh();
    }

    public clearSearch(searchType: string) {
        const obj = this.filter[searchType];
        const storageKey = obj.key;
        obj.value = obj.isOptionType ? [] : obj.defaultValue;

        // localStorageService.remove(storageKey);
        $('#' + searchType + ' span').removeClass('active');

        let valueFound = false;
        const objectKeys = Object.keys(this.filter);
        for (const key of objectKeys) {
            const filter = this.filter[key];
            if ((!filter.isOptionType && filter.value) || (filter.isOptionType && filter.value.length > 0)) {
                valueFound = true;
            }
        }
        this.filterApplied = valueFound;
        this.refresh();
    }

    public clearDynamicSearch(key: string, searchType: string) {
        var obj = this.filter[searchType];
        obj = obj.filter(x => x.key != key);
        this.filter[searchType] = obj;

        $('#' + key + ' span').removeClass('active');

        this.filterApplied = true;
        this.refresh();
    }

    public clearAll(): void {
        const objectKeys = Object.keys(this.filter);
        for (const key of objectKeys) {
            if (key != 'DynamicFilter') {
                const filter = this.filter[key];
                filter.value = filter.isOptionType ? [] : filter.defaultValue;
            } else {
                for (let item of this.filter[key]) {
                    $('#' + item.key + ' span').removeClass('active');
                }
                this.filter[key] = [];
            }
            $('#' + key + ' span').removeClass('active');
        }
        this.filterApplied = false;
        this.refresh();
    }

    public refresh(): void {
        this.getDataPage(this.paggerConfig);
    }

    public showPaging(result: PagedResultDto, pageNumber: number): void {
        // this.totalPages = ((result.totalCount - (result.totalCount % this.pageSize)) / this.pageSize) + 1;
        this.paggerConfig.itemsPerPage = Math.ceil(result.totalCount / this.paggerConfig.itemsPerPage);
        this.totalItems = result.totalCount;
        this.paggerConfig.currentPage = pageNumber;
    }

    public getDataPage(config: PagingModel): void {
        this.isTableLoading = true;
        this.list(config, () => {
            this.isTableLoading = false;
        });
    }

    public getOptionText(options: StatusModelDto[], id: number): string {
        for (let index = 0; index < options.length; index++) {
            if (options[index].id === id) {
                return options[index].status;
            }
        }
    }

    protected abstract list(request: PagingModel, finishedCallback: Function): void;
    // protected abstract delete(entity: TEntityDto): void;
}
