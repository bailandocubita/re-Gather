import { Component } from '@angular/core';
import { faGlobe, faHeart, faSearch } from '@fortawesome/free-solid-svg-icons';
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
  searchEvents: boolean = true;
  bucketEvents: Event[] = [];
  faHeart = faHeart;
  faSearch = faSearch;
  faGlobe = faGlobe;

  constructor(private service: TicketmasterService) { }
  
  ngOnInit() {
    this.events = this.service.searchTicketmaster();
  }

  onSearch(event: any){
    this.searchEvents = false;
  }

}
