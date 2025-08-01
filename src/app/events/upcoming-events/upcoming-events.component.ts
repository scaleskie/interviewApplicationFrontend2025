import {Component, OnInit} from '@angular/core';
import {EventsService} from "../events.service";
import {Events} from "../events";

@Component({
  selector: 'app-upcoming-events',
  templateUrl: './upcoming-events.component.html',
  styleUrl: './upcoming-events.component.scss'
})
export class UpcomingEventsComponent implements OnInit{
  constructor(private eventService: EventsService) {
  }
  events: Events[] = [];

  ngOnInit() {
    this.getEvents();
  }

  getEvents(){
    this.eventService.getEvents().subscribe(data => {
      this.events = data;
    });
  }
}
