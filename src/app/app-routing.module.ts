import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BucketListPageComponent } from './bucket-list-page/bucket-list-page.component';
import { EventDetailsComponent } from './event-details/event-details.component';
import { EventListComponent } from './event-list/event-list.component';
import { SearchCriteriaComponent } from './search-criteria/search-criteria.component';


const routes: Routes = [
  { path: 'search', component: SearchCriteriaComponent},
  { path: 'events', component: EventListComponent},
  { path: 'events/:id', component: EventDetailsComponent},
  { path: 'my-events', component: BucketListPageComponent},
  { path: '', redirectTo: '/search', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
