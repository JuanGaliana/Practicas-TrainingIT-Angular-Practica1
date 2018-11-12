import { Component, Input, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-display',
  templateUrl: './app-display.component.html'
})
export class DisplayComponent implements OnInit {
  @Input() launches: any;
  @Input() total: any;

  constructor() {
  }

  ngOnInit() { }

}
