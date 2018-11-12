import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-filter-criteria',
    templateUrl: './app-filter-criteria.component.html'
})
export class FilterCriteriaComponent implements OnInit {
    @Output() change = new EventEmitter<string>();
    constructor() { }

    ngOnInit(): void { }

    onChange(val) {
        this.change.emit(val);
    }
}
