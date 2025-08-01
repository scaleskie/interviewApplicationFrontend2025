import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Events} from "./events";

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  columns: Object[] = [];
  events: Events[] = [];

  constructor(private http: HttpClient) { }

  getEvents(): Observable<Events[]> {
    return this.http.get<Events[]>('/api/event/allEvents');
  }
}
