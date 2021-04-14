import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-criteria',
  templateUrl: './search-criteria.component.html',
  styleUrls: ['./search-criteria.component.css']
})
export class SearchCriteriaComponent implements OnInit {
  event: Event | null = null;

  searchEvents: boolean = false;

  @Output() searched = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  searchEvent(){
    
    
    this.searched.emit(true);
    
    
  }

}
