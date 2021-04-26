import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';
import { DataService } from '../data.service';

import { TicketmasterService } from '../ticketmaster.service';


@Component({
  selector: 'app-bucket-list-page',
  templateUrl: './bucket-list-page.component.html',
  styleUrls: ['./bucket-list-page.component.css']
})


export class BucketListPageComponent implements OnInit {
  bucketEvents: any[] | null = [];
  faTrash = faTrashAlt;

  
  constructor(private service: TicketmasterService) { }

  ngOnInit(): void {
    this.bucketEvents = this.service.getBucketListEvents();
  }

  removeEvent(bucketEvent: any){
    this.service.removeBucketListEvent(bucketEvent);
  }

 printSaved() {
    window.print();
 }
}

