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
  {
    title: 'Music Festivle',
    description: 'Music festivle for all ages',
    location:'Chicago',
    date: 'April 27th 2021', 
    category: 'Music', 
    price: 200,
    tickets: 'www.google.com/music',
    accessibility: 'facility is not wheelchair accesbile'
  },
  {
    title: 'Air Show',
    description: 'public aviation show where exhibitted aircaft demonstrate aerobactic demonstrations.',
    location:'Chicago',
    date: 'May 5th 2021', 
    category: 'Aviation', 
    price: 10,
    tickets: 'www.google.com/aviation',
    accessibility: 'wheelchair accesbile'
  },
  {
    title: 'Art Gallery',
    description: 'skilled painters, photographers, and artist of all kind came ',
    location:'Chicago',
    date: 'April 27th 2021', 
    category: 'Art', 
    price: 60,
    tickets: 'www.google.com/art',
    accessibility: 'wheelchair accesbile'
  }
]
}
