import { Component, OnInit } from '@angular/core';
import {Event} from '../event'; 

@Component({
  selector: 'app-bucket-list-page',
  templateUrl: './bucket-list-page.component.html',
  styleUrls: ['./bucket-list-page.component.css']
})
export class BucketListPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

bucketEvents: Event [] = [
//   {
//     title: 'Music Festivle',
//     location:'Chicago',
//     date: 'April 27th 2021', 
//     category: 'Music', 
//     price: 200
//   },
//   {
//     title: 'Air Show',
//     location:'Chicago',
//     date: 'May 5th 2021', 
//     category: 'Aviation', 
//     price: 10
//   },
//   {
//     title: 'Art Gallery',
//     location:'Chicago',
//     date: 'April 27th 2021', 
//     category: 'Art', 
//     price: 60
//   }
]

}
