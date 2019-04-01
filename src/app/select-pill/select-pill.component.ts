import { Component, OnInit, Input, ViewEncapsulation, Output, EventEmitter } from '@angular/core';
import { pipe } from '@angular/core/src/render3';

@Component({
  selector: 'select-pill',
  templateUrl: './select-pill.component.html',
  styleUrls: ['./select-pill.component.scss']
})
export class SelectPillComponent implements OnInit {
  @Input() imgLink: string;
  @Output() select = new EventEmitter();
  @Input() pillName: string;
  @Input() pillID: string;
  @Input() selected: boolean;
  constructor() { }

  ngOnInit() {
  }

  onSelect() {
    console.log(this.pillID);
    this.select.emit(this.pillID);
    this.selected = !this.selected;
  }
}
