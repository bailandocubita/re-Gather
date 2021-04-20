
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

  eventList: Observable<any> | null = null;
  id: string | null = '';
  searchKeyword: string| null = this.service.searchKeyword;
  searchCity: string| null = this.service.searchCity;
  searchDate: string| null = this.service.searchDate;
  searchCategory: string| null = this.service.searchCategory;

  constructor(private service: TicketmasterService) { }

  ngOnInit(): void {

  this.eventList = this.service.searchTicketmaster(this.searchKeyword, this.searchCity, this.searchDate, this.searchCategory);
  
  }

  addTask(eventItem: any){
    this.service.addBucketListEvent(eventItem);
  }

}
