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
    title: 'Art Show',
    description: 'This is an abstract modernism show.',
    location: 'Detroit',
    date: '4-16-2021',
    category: 'art',
    price: 20,
    tickets: 'https://www.google.com/',
    accessibility: 'wheelchair accessible'
  },
  {
    title: 'Concert',
    description: 'This is a music concert. Yay!',
    location: 'Cleveland',
    date: '5-6-2021',
    category: 'music',
    price: 60,
    tickets: 'https://www.google.com/',
    accessibility: 'venue is not wheelchair accessible'
  },
  {
    title: 'Play',
    description: 'This is going to be a great play to see!',
    location: 'Grand Rapids',
    date: '6-26-2021',
    category: 'theatre',
    price: 40,
    tickets: 'https://www.google.com/',
    accessibility: 'wheelchair accessible'
  }
]
}
