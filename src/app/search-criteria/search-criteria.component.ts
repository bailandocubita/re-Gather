
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { TicketmasterService } from '../ticketmaster.service';
import { Router } from '@angular/router';
import { Event } from 'src/app/event';


@Component({
  selector: 'app-search-criteria',
  templateUrl: './search-criteria.component.html',
  styleUrls: ['./search-criteria.component.css']
})
export class SearchCriteriaComponent implements OnInit {

  // events: Observable<any[]> | null = null;
  search: {} | null = null;
  @Input() events: Event[] = [];

  keyword: string = '';
  location: string = '';
  date: string = '';
  category: string = '';

  @Output() searched = new EventEmitter<any>();
  

  constructor(private service: TicketmasterService, private router: Router) { }


  ngOnInit(): void {

  }

  searchEvent(keyword: string | null, location: string| null, date: string| null, category: string| null){
    this.service.searchKeyword = keyword;
    this.service.searchCity = location;
    this.service.searchDate = date;
    this.service.searchCategory = category;
    this.searched.emit(true);
    this.router.navigate(['/events']);
  }

  getRandom(){
    
    let randomInt = Math.floor(Math.random() * this.events.length);

    console.log(randomInt);
    console.log(this.events.length);
    this.searched.emit(true);

    this.router.navigate(['/events', this.events[randomInt].id]);
  }

//   searchEvent(){
    
    
//     this.searched.emit(true);
    
    
//   }

}
