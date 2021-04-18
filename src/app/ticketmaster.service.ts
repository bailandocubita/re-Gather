import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class TicketmasterService {

  constructor(private http: HttpClient) { }

  searchTicketmaster(searchKeyword: string | null = null){
    return this.http.get(`https://app.ticketmaster.com/discovery/v2/events.json?countryCode=US&apikey=XE560tQ9JSRdRrF3TNLgLzWW7FsgThE6`).pipe(map((data:any) => {
      return data._embedded.events;
    }));
  }
}
