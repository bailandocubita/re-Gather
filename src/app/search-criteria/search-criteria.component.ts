import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {Router} from '@angular/router';
import { Event } from 'src/app/event';

@Component({
  selector: 'app-search-criteria',
  templateUrl: './search-criteria.component.html',
  styleUrls: ['./search-criteria.component.css']
})
export class SearchCriteriaComponent implements OnInit {
  event: Event | null = null;
  search: {} | null = null;
  @Input() events: Event[] = [];

  keyword: string = '';
  location: string = '';
  date: string = '';
  category: string = '';

  searchEvents: boolean = false;

  @Output() searched = new EventEmitter<any>();
  @Output() cancel = new EventEmitter<any>();

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  searchEvent(keyword:string, location: string, date: string, category: string){
    this.search = {
      keyword,
      location,
      date,
      category
    }
    this.searched.emit(this.search);
  }

  cancelSearch(){
    this.cancel.emit(true);
  }

  getRandom(){

    let randomInt = Math.floor(Math.random() * this.events.length);

    console.log(randomInt);
    console.log(this.events.length);

    this.router.navigate(['/events', this.events[randomInt].id]);
  }

}
