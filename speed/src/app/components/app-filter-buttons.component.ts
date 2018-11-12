import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-buttons-filter',
    templateUrl: './app-filter-buttons.component.html'
})
export class ButtonsFilterComponent implements OnInit {
    constructor() { }
    @Output() search = new EventEmitter();
    ngOnInit(): void { }

    onSearch() {
        this.search.next();
    }
}
