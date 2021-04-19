import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { TicketmasterService } from './ticketmaster.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'reGather';
  events: Observable <any> | null = null;
  searchEvents: boolean = false;
  bucketEvents: Event[] = [];

  constructor(private service: TicketmasterService) { }
  
  ngOnInit() {
    this.events = this.service.searchTicketmaster();
  }

  onSearch(event: any){
    this.searchEvents = false;
  }

}
