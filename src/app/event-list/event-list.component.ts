import { Component, OnInit } from '@angular/core';
import { Event } from '../event';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  //placeholder for now
  events: Event[] = [
    {
      title: 'Art Show',
      location: 'Detroit',
      date: '4-16-2021',
      category: 'art',
      price: 20
    },
    {
      title: 'Concert',
      location: 'Cleveland',
      date: '5-6-2021',
      category: 'music',
      price: 60
    },
    {
      title: 'Play',
      location: 'Grand Rapids',
      date: '6-26-2021',
      category: 'theatre',
      price: 40
    }
  ]

}
