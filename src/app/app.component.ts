import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'reGather';

  searchEvents: boolean = false;

  keyword: string = '';
  location: string = '';
  date: string = '';
  category: string = '';

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
