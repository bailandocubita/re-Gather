import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
    // this.route.parent.paramMap
		// 	.pipe(switchMap(p => this.service.getFood(+p.get('id'))))
		// 	.subscribe(food => this.food = food);
  }

}
