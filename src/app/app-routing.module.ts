import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BucketListPageComponent } from './bucket-list-page/bucket-list-page.component';
import { EventDetailsComponent } from './event-details/event-details.component';
import { EventListComponent } from './event-list/event-list.component';


const routes: Routes = [
  { path: 'events', component: EventListComponent},
  { path: 'events/:name', component: EventDetailsComponent},
  { path: 'my-events', component: BucketListPageComponent},
  { path: '', redirectTo: '/events', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
