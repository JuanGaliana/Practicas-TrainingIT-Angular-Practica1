import { Component, Input, OnInit, Output, ChangeDetectionStrategy, EventEmitter } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-filter-combo',
  templateUrl: './app-filter-combo.component.html'
})
export class FilterComboComponent implements OnInit {
  @Input() items: any;
  @Output() change: EventEmitter<string> = new EventEmitter<string>();
  selectedValue: any = null;
  constructor() {
  }

  ngOnInit() { }

  public onSelectChange = () => {
    this.change.emit(this.selectedValue);
  }
}
