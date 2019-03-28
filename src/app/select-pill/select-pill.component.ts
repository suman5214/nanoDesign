import { Component, OnInit, Input, ViewEncapsulation, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'select-pill',
  templateUrl: './select-pill.component.html',
  styleUrls: ['./select-pill.component.scss']
})
export class SelectPillComponent implements OnInit {
  @Input() imgLink: string;
  @Output() select = new EventEmitter();
  @Input() pillName: string;
  @Input() selected: boolean;
  constructor() { }

  ngOnInit() {
  }

  onSelect() {
    this.select.emit(this.pillName);
    this.selected = !this.selected;
  }
}
