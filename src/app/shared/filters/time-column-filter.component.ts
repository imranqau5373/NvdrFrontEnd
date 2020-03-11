import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { NgbDropdownConfig, NgbDropdown } from '@ng-bootstrap/ng-bootstrap';
import * as moment from 'moment';
import { TimeFilterDto, StatusModelDto } from '@shared/service/page-listing-component-base';
import { CommonService } from '@shared/service/common.service';

@Component({
  selector: 'time-column-filter',
  templateUrl: './time-column-filter.component.html',
  // tslint:disable-next-line: use-host-property-decorator
  host: { '(document:keyup)': 'handleKeyboardEvent($event)' }
})
export class TimeColumnFilterComponent implements OnInit {
  @Output() onApply: EventEmitter<any> = new EventEmitter();
  @Output() onClear: EventEmitter<any> = new EventEmitter();
  @Input() model: any;
  @Input() placeHolder: string;
  @Input() id: string;
  @Input() placement: string;
  internalModel: TimeFilterDto = new TimeFilterDto();
  compareList: StatusModelDto[] = [
    new StatusModelDto(1, 'Equal to'),
    new StatusModelDto(2, 'Less than'),
    new StatusModelDto(3, 'Greater than')
  ];

  @ViewChild(NgbDropdown, null)
  private dropdown: NgbDropdown;

  constructor(config: NgbDropdownConfig,
    private commonService: CommonService, private el: ElementRef) {
    this.placement = this.placement || 'bottom-right';
    config.autoClose = 'outside';
  }

  ngOnInit() {

  }

  handleKeyboardEvent(event: KeyboardEvent) {
    // const key = event.which || event.keyCode;
    if (event.key === 'Escape') {
      this.dropdown.close();
    }
  }

  toggled(event): void {
    if (event) {
      const tempModel = { ...this.model } as TimeFilterDto;

      if (tempModel && !tempModel.CompareType) {
        this.internalModel = new TimeFilterDto();
        const now = moment().local();
        this.internalModel.Time = { hour: now.hour(), minute: now.minutes(), second: 0 };
        this.internalModel.CompareType = 1;
      } else {
        this.internalModel = tempModel;
      }

      const txtElem = this.el.nativeElement.querySelector('input');
      setTimeout(() => txtElem.focus(), 0);
    } else {
      // console.log('is closed');
    }
  }

  onInternalClear(): void {
    this.internalModel = new TimeFilterDto();
    this.dropdown.close();
    this.onClear.emit();
  }

  onInternalApply(): void {
    this.dropdown.close();
    this.onApply.emit([this.internalModel]);
  }
}
