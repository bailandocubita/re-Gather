import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TicketmasterService } from '../ticketmaster.service';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {
  event: Observable<any> | any | null = null;
  p: Event | null = null;

  constructor(private service: TicketmasterService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    // this.route.parent.paramMap
		// 	.pipe(switchMap(p => this.service.getFood(+p.get('id'))))
		// 	.subscribe(food => this.food = food);

    // this.event = this.service.getEventById('vvG1HZpdeUZdW6');

    this.route.paramMap.pipe(switchMap(p => this.service.getEventById(p?.get('id')))).subscribe(event => this.event = event);
  }

}
