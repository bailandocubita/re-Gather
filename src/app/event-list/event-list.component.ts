
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
  [x: string]: any;

  eventList: any;
  id: string | null = '';
  searchKeyword: string| null = this.service.searchKeyword;
  searchCity: string| null = this.service.searchCity;
  searchDate: string | null = this.service.searchDate;
  searchCategory: string| null = this.service.searchCategory;
  event: Event[] = [];
  favoritedList: any;


  faHeart = faHeart;
  farHeart = farHeart;


  constructor(private service: TicketmasterService) { }

  ngOnInit(): void {
    this.favoritedList = this.service.getBucketListEvents()
    this.service.searchTicketmaster(this.searchKeyword, this.searchCity, this.searchDate, this.searchCategory).subscribe(response => {
      this.eventList = response;
      this.eventList?.forEach((gathering: any) => {gathering.favorite = this.isFavorited(gathering.id)})
    });

  }

  saveEvent(eventItem: any){
    if (!eventItem.favorite) {
      eventItem.favorite = true;
      let isSelected = this.isFavorited(eventItem.id);
      if (!isSelected) {
        this.service.addBucketListEvent(eventItem);
      }
      
    }
    
    else if (eventItem.favorite === true) {
      eventItem.favorite = false;
      this.service.removeBucketListEvent(eventItem);
    }
    
  }

  isFavorited(id: string) {
    let item = this.favoritedList.find((gathering: any) => gathering.id === id);
    if (item) {
      return true;
    }
    return false;
  }

}
