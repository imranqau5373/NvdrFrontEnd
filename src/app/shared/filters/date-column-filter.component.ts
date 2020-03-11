import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { NgbDropdownConfig, NgbDropdown, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { DateFilterDto, StatusModelDto } from '@shared/service/page-listing-component-base';

@Component({
  selector: 'date-column-filter',
  templateUrl: './date-column-filter.component.html',
  // tslint:disable-next-line: use-host-property-decorator
  host: { '(document:keyup)': 'handleKeyboardEvent($event)' }
})
export class DateColumnFilterComponent implements OnInit {
  @Output() onApply: EventEmitter<any> = new EventEmitter();
  @Output() onClear: EventEmitter<any> = new EventEmitter();
  @Input() model: any;
  @Input() placeHolder: string;
  @Input() id: string;
  @Input() placement: string;
  internalModel: DateFilterDto = new DateFilterDto();
  compareList: StatusModelDto[] = [
    new StatusModelDto(1, 'Equal to'),
    new StatusModelDto(2, 'Less than'),
    new StatusModelDto(3, 'Greater than')
  ];

  @ViewChild(NgbDropdown, null)
  private dropdown: NgbDropdown;

  constructor(config: NgbDropdownConfig, private el: ElementRef) {
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
      this.internalModel = { ...this.model } as DateFilterDto;
      const txtElem = this.el.nativeElement.querySelector('input');
      if (this.internalModel && !this.internalModel.CompareType) {
        this.internalModel = new DateFilterDto();
        this.internalModel.CompareType = 1;
      }

      setTimeout(() => txtElem.focus(), 0);
    } else {
      // console.log('is closed');
    }
  }

  onInternalClear(): void {
    this.internalModel = new DateFilterDto();
    this.dropdown.close();
    this.onClear.emit();
  }

  onInternalApply(): void {
    this.dropdown.close();
    this.onApply.emit([this.internalModel]);
  }
}
