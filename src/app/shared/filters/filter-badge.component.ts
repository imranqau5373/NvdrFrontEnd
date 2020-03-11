import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'filter-badge',
    templateUrl: './filter-badge.component.html'
})
export class FilterBadgeComponent implements OnInit {
    @Output() onClear: EventEmitter<any> = new EventEmitter();
    @Input() model: any;
    @Input() label: string;

    constructor() {
    }

    ngOnInit() {
    }

    onInternalClear(): void {
        this.onClear.emit();
    }
}
