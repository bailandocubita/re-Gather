import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import {Event} from '../event'; 


@Component({
  selector: 'app-bucket-list-page',
  templateUrl: './bucket-list-page.component.html',
  styleUrls: ['./bucket-list-page.component.css']
})
export class BucketListPageComponent implements OnInit {
  bucketEvents: Event [ ] = [ ];

  constructor() {
   }

  ngOnInit(): void {
  }
}
