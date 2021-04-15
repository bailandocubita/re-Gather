import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { Event } from '../event';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {
 
  id: string | null = '';

  constructor(private data: DataService, private route: ActivatedRoute) { 

  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => this.id = params.get('id'));
  }

  viewDetails() {
    this.data
  }

  getEvents() {
    return event;
  }
}
