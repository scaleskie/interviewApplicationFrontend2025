import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Events} from "../../events";

@Component({
  selector: 'app-upcoming-events-table',
  templateUrl: './upcoming-events-table.component.html',
  styleUrl: './upcoming-events-table.component.scss'
})
export class UpcomingEventsTableComponent implements OnInit {
  @Input() events: Events[] = [];
  @Output() viewRowEvent = new EventEmitter<any>();

  cols: Object[] = [];

  ngOnInit() {
    this.cols = this.getColumns();
    console.log(this.events)
  }

  getColumns(): Object[] {
    return this.cols = [
      {field: 'id', header: 'ID'},
      {field: 'name', header: 'Name'},
      {field: 'type', header: 'Type'},
    ];
  }
}
