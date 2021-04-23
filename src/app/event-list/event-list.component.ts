
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons';

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
  searchDate: string | null = this.service.searchDate;
  searchCategory: string| null = this.service.searchCategory;
  event: Event[] = [];


  faHeart = faHeart;
  farHeart = farHeart;


  constructor(private service: TicketmasterService) { }

  ngOnInit(): void {

  this.eventList = this.service.searchTicketmaster(this.searchKeyword, this.searchCity, this.searchDate, this.searchCategory);
  
  }

  saveEvent(eventItem: any){
    
    console.log(eventItem);
    if (!eventItem.favorite) {
      console.log("in the first if")
      eventItem.favorite = true;
      this.service.addBucketListEvent(eventItem);
    }
    
    else if (eventItem.favorite === true) {
      console.log("in the second if")
      eventItem.favorite = false;
      this.service.removeBucketListEvent(eventItem);
    }
    
  }

}
