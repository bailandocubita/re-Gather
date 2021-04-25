import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class TicketmasterService {
  searchKeyword: string | null = null;
  searchCity: string | null = null;
  searchDate: string | null = null;
  searchCategory: string | null = null;
  bucketListEvents: Event[] | null = [];
  paramMap: any;

  constructor(private http: HttpClient) { }

  searchTicketmaster(searchKeyword: string | null = null, searchCity: string| null = null,searchDate: string| null = null, searchCategory: string| null = null):Observable<any>{
    let keyword = '';
    let city = '';
    let date = '';
    let category = '';
    let sortDates = '';

    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
		let mm = String(today.getMonth() + 1).padStart(2, '0');
		let yyyy = today.getFullYear();
		let todaysDate: string = yyyy + '-' + mm + '-' + dd
    
    if(searchKeyword){
      keyword = `keyword=${searchKeyword}&`;
    }
    if(searchCity){
      city = `city=${searchCity}&`;
    }
    if(searchDate){
      date = `startDateTime=${searchDate}T04:00:00Z&endDateTime=${searchDate}T23:59:59Z&`;
    }else{
      date = `startDateTime=${todaysDate}T04:00:00Z&`;
      sortDates = `sort=date,asc&`
    }
    if(searchCategory){
      category = `classificationName=${searchCategory}&`;
    }

    // console.log(!keyword? 'keyword is null':keyword);
    // console.log(!city? 'city is null':city);
    // console.log(!date? 'date is null':date);
    // console.log(!category? 'category is null':category);

    if(!keyword && !city && !date && !category){
      return this.http.get(`https://app.ticketmaster.com/discovery/v2/events.json?${date}countryCode=US&sort=date,asc&apikey=XE560tQ9JSRdRrF3TNLgLzWW7FsgThE6`).pipe(map((data:any) => {
      return data._embedded.events;
      }));

    } else{
      return this.http.get(`https://app.ticketmaster.com/discovery/v2/events.json?${keyword}${city}${date}${category}countryCode=US&${sortDates}apikey=XE560tQ9JSRdRrF3TNLgLzWW7FsgThE6`).pipe(map((data:any) => {
      return data._embedded.events;
      }));
    }
    
  }
  
  getBucketListEvents(){
    return this.bucketListEvents;
  }

  addBucketListEvent(event:Event){
    this.bucketListEvents?.push(event);
  }

  removeBucketListEvent(event: Event){
    this.bucketListEvents?.splice(this.bucketListEvents?.indexOf(event),1);
  }

  getEventById(id: string | null){
    return this.http.get(`https://app.ticketmaster.com/discovery/v2/events/${id}?apikey=XE560tQ9JSRdRrF3TNLgLzWW7FsgThE6`);
  }

}
