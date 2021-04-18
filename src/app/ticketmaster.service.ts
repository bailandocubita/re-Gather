import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class TicketmasterService {
  searchKeyword: string = '';
  searchCity: string = '';
  searchDate: string = '';
  searchCategory: string = '';

  constructor(private http: HttpClient) { }


  searchTicketmaster(searchKeyword: string, searchCity: string,searchDate: string, searchCategory: string){
    let keyword = '';
    let city = '';
    let date = '';
    let category = '';
    
    if(searchKeyword){
      keyword = `keyword=${searchKeyword}&`;
    }
    if(searchCity){
      city = `city=${searchCity}&`;
    }
    if(searchDate){
      date = `startDateTime=${searchDate}T04:00:00Z&endDateTime=${searchDate}T23:59:59Z&`;
    }
    if(searchCategory){
      category = `classificationName=${searchCategory}&`;
    }

    // console.log(!keyword? 'keyword is null':keyword);
    // console.log(!city? 'city is null':city);
    // console.log(!date? 'date is null':date);
    // console.log(!category? 'category is null':category);

    if(!keyword && !city && !date && !category){
      return this.http.get(`https://app.ticketmaster.com/discovery/v2/events.json?countryCode=US&apikey=XE560tQ9JSRdRrF3TNLgLzWW7FsgThE6`).pipe(map((data:any) => {
      return data._embedded.events;
      }));

    } else{
      return this.http.get(`https://app.ticketmaster.com/discovery/v2/events.json?${keyword}${city}${date}${category}countryCode=US&apikey=XE560tQ9JSRdRrF3TNLgLzWW7FsgThE6`).pipe(map((data:any) => {
      return data._embedded.events;
      }));
    }
    
  }

}
