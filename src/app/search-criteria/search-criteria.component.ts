import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-criteria',
  templateUrl: './search-criteria.component.html',
  styleUrls: ['./search-criteria.component.css']
})
export class SearchCriteriaComponent implements OnInit {
  event: Event | null = null;
  search: {} | null = null;

  keyword: string = '';
  location: string = '';
  date: string = '';
  category: string = '';

  searchEvents: boolean = false;

  @Output() searched = new EventEmitter<any>();
  @Output() cancel = new EventEmitter<any>();

  constructor() { }

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

}
