import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef, Injector } from '@angular/core';
import { NgbDropdownConfig, NgbDropdown } from '@ng-bootstrap/ng-bootstrap';
import { StatusModelDto } from '@shared/service/page-listing-component-base';
import * as _ from 'lodash';

@Component({
    selector: 'options-column-filter',
    templateUrl: './options-column-filter.component.html',
    // tslint:disable-next-line: use-host-property-decorator
    host: { '(document:keyup)': 'handleKeyboardEvent($event)' }
})
export class OptionsColumnFilterComponent implements OnInit {
    @Output() onApply: EventEmitter<any> = new EventEmitter();
    @Output() onClear: EventEmitter<any> = new EventEmitter();
    @Input() model: any;
    @Input() idLabel: string;
    @Input() isStatus: string;
    @Input() statusType: string;
    @Input() items: StatusModelDto[];
    @Input() id: string;
    @Input() placement: string;

    internalModel: any;
    forLabelId: number = Math.floor(Math.random() * 100) + 1;
    internalIdLabel: string;
    selectAllCheckbox = false;
    selectedItems: StatusModelDto[] = [];
    @ViewChild(NgbDropdown, null)
    dropdown: NgbDropdown;

    constructor(config: NgbDropdownConfig, private el: ElementRef, injector: Injector) {
        this.placement = this.placement || 'bottom-right';
        config.autoClose = 'outside';
    }

    // tslint:disable-next-line: use-life-cycle-interface
    ngOnInit() {
    }

    selectAll(): void {
        const parentSelectAllCheckbox = this.selectAllCheckbox;
        _.each(this.items, function (item) { item.checked = parentSelectAllCheckbox; });

        this.selectedItems = parentSelectAllCheckbox ? this.items : [];
    }

    onRowSelect(item): void {
        if (!item.checked) {
            this.selectAllCheckbox = false;
            const parentIdLabel = this.idLabel;
            this.selectedItems = _.filter(this.selectedItems, function (i) {
                return i[parentIdLabel] !== item[parentIdLabel];
            });
        } else {
            const checkedItems = _.filter(this.items, (item) => (item.checked === true));
            if (checkedItems.length === this.items.length) {
                this.selectAllCheckbox = true;
            }

            this.selectedItems = checkedItems;
        }
    }

    handleKeyboardEvent(event: KeyboardEvent): void {
        if (event.key === 'Escape') {
            this.dropdown.close();
        }
    }

    toggled(event): void {
        if (event) {
            const parentModel = this.model;
            const parentSelectedItems = [];
            _.each(this.items, function (item) {
                const itemFound = _.find(parentModel, function (i) {
                    return item.id === i;
                });
                item.checked = !!itemFound;
                if (itemFound) {
                    parentSelectedItems.push(itemFound);
                }
            });
            this.selectedItems = parentSelectedItems;
        } else {
            // console.log('is closed');
        }
    }

    onInternalClear(): void {
        this.selectAllCheckbox = false;
        _.each(this.items, function (item) { item.checked = false; });
        this.dropdown.close();
        this.onClear.emit();
    }

    onInternalApply(): void {
        const selectedItems = _.filter(this.items, function (item) { return item.checked });
        const selectedIds = _.map(selectedItems, this.idLabel);
        this.dropdown.close();
        this.onApply.emit([selectedIds]);
    }
}
