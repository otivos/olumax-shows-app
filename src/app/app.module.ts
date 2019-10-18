import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ShowsAppComponent } from './shows-app.component';
import { ShowsListComponent } from './shows/shows-list.component';
import { ShowsThumbnailComponent } from './shows/shows-thumbnail.component';
import { NavBarComponent } from './nav/navbar.component';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    ShowsAppComponent,
    ShowsListComponent,
    NavBarComponent,
    ShowsThumbnailComponent
  ],
  bootstrap: [ShowsAppComponent]
})
export class AppModule { }
