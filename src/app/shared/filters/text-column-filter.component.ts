import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { NgbDropdownConfig, NgbDropdown } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'text-column-filter',
  templateUrl: './text-column-filter.component.html',
  // tslint:disable-next-line: use-host-property-decorator
  host: { '(document:keyup)': 'handleKeyboardEvent($event)' }
})
export class TextColumnFilterComponent implements OnInit {
  @Output() onApply: EventEmitter<any> = new EventEmitter();
  @Output() onClear: EventEmitter<any> = new EventEmitter();
  @Input() model: any;
  @Input() placeHolder: string;
  @Input() id: string;
  @Input() placement: string;
  internalModel: string;
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
      this.internalModel = this.model;
      const txtElem = this.el.nativeElement.querySelector('input');
      setTimeout(() => txtElem.focus(), 0);
    } else {
      // console.log('is closed');
    }
  }

  onInternalClear(): void {
    this.internalModel = '';
    this.dropdown.close();
    this.onClear.emit();
  }

  onInternalApply(): void {
    debugger;
    this.dropdown.close();
    this.onApply.emit([this.internalModel]);
  }
}
