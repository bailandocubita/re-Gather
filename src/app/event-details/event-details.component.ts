import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TicketmasterService } from '../ticketmaster.service';
import { Event } from '../event';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {

  id: string | null = '';
  @Input() events: Event[] = [];
  eventList: Event[] | null = null;
  event: Observable<any> | null = null;
  p: Event | null = null;
  

  constructor(private service: TicketmasterService, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

}
