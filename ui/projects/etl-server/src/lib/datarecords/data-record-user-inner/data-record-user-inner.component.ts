import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'lib-data-record-user-inner',
  templateUrl: './data-record-user-inner.component.html',
  styleUrls: ['./data-record-user-inner.component.less']
})
export class DataRecordUserInnerComponent implements OnInit {

  @Output() update = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

}
