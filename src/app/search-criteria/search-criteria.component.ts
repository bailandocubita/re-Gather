
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { TicketmasterService } from '../ticketmaster.service';
import { Router } from '@angular/router';
import { Event } from 'src/app/event';


@Component({
  selector: 'app-search-criteria',
  templateUrl: './search-criteria.component.html',
  styleUrls: ['./search-criteria.component.css'],

})
export class SearchCriteriaComponent implements OnInit {

  search: {} | null = null;
  @Input() events: Event[] = [];

  keyword: string = '';
  location: string = '';
  date: Date | null = null;
  category: string = '';

  @Output() searched = new EventEmitter<any>();
  

  constructor(private service: TicketmasterService, private router: Router) { }


  ngOnInit(): void {

  }

  searchEvent(keyword: string | null, location: string| null, date: Date | null, category: string| null){
    if(date){

      let dd = String(date.getDate()).padStart(2, '0');
      let mm = String(date.getMonth() + 1).padStart(2, '0');
      let yyyy = date.getFullYear();
      let parsedDate: string | null = yyyy + '-' + mm + '-' + dd
    
      this.service.searchDate = parsedDate;
    }else{
      this.service.searchDate = '';
    }
  
    this.service.searchKeyword = keyword;
    this.service.searchCity = location;
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


}
