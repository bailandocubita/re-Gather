import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SearchCriteriaComponent } from './search-criteria/search-criteria.component';
import { EventListComponent } from './event-list/event-list.component';
import { BucketListPageComponent } from './bucket-list-page/bucket-list-page.component';
import { EventDetailsComponent } from './event-details/event-details.component';
import { FormsModule } from '@angular/forms';
import { EventFilterPipe } from './event-filter.pipe';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
// import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons';
// import { faHeart } from '@fortawesome/free-solid-svg-icons';

@NgModule({
  declarations: [
    AppComponent,
    SearchCriteriaComponent,
    EventListComponent,
    BucketListPageComponent,
    EventDetailsComponent,
    EventFilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
