import { Component, Input, OnInit } from '@angular/core';
import { Observable, SubscribableOrPromise, Subscription } from 'rxjs';
import { TicketmasterService } from '../ticketmaster.service';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { faMapMarkerAlt, faTicketAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {
  event: Observable<any> | any | null = null;
  p: Event | null = null;
  subscription: any;
  faTicket = faTicketAlt;
  faMap = faMapMarkerAlt;


  constructor(private service: TicketmasterService, private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.subscription = this.route.paramMap.pipe(switchMap(p => this.service.getEventById(p?.get('id')))).subscribe(event => this.event = event);
  }

  ngOnDestroy():void{
    this.subscription.unsubscribe();
  }

}
