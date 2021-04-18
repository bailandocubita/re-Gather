
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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
  searchKeyword: string = this.service.searchKeyword;
  searchCity: string = this.service.searchCity;
  searchDate: string = this.service.searchDate;
  searchCategory: string = this.service.searchCategory;

  constructor(private service: TicketmasterService) { }

  ngOnInit(): void {

  this.events = this.service.searchTicketmaster(this.searchKeyword, this.searchCity, this.searchDate, this.searchCategory);
    
  }


}
