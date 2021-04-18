import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { TicketmasterService } from '../ticketmaster.service';

@Component({
  selector: 'app-search-criteria',
  templateUrl: './search-criteria.component.html',
  styleUrls: ['./search-criteria.component.css']
})
export class SearchCriteriaComponent implements OnInit {
  events: Observable<any> | null = null;
  search: {} | null = null;

  keyword: string = '';
  location: string = '';
  date: string = '';
  category: string = '';

  searchEvents: boolean = false;

  @Output() searched = new EventEmitter<any>();
  @Output() cancel = new EventEmitter<any>();

  constructor(private service: TicketmasterService) { }

  ngOnInit(): void {
  }

  searchEvent(keyword: string, location: string, date: string, category: string){
    this.service.searchKeyword = keyword;
    this.service.searchCity = location;
    this.service.searchDate = date;
    this.service.searchCategory = category;
  }

}
