
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';

import { Event } from '../event';
import { TicketmasterService } from '../ticketmaster.service';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {
 

  events: Observable<any> | null = null;
  id: string | null = '';
  searchKeyword: string = '';

  constructor(private service: TicketmasterService) { }

  ngOnInit(): void {
    this.events = this.service.searchTicketmaster(this.searchKeyword);
  }

  updateSearch(): void {
    this.events = this.service.searchTicketmaster(this.searchKeyword);
  }


}
