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

  keyword: string = '';
  location: string = '';
  date: string = '';
  category: string = '';

  constructor(private service: TicketmasterService) { }
  
  ngOnInit() {
    this.events = this.service.searchTicketmaster();
  }

  onSearch(event: any){
    this.keyword = event.keyword;
    this.location = event.location;
    this.date = event.date;
    this.category = event.category;

    this.searchEvents = false;
  }

  onCancel(){
    this.searchEvents = false;
  }
}
