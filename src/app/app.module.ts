import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ShowsAppComponent } from './shows-app.component';
import { ShowsListComponent } from './shows/shows-list.component';
import { ShowsThumbnailComponent } from './shows/shows-thumbnail.component';
import { NavBarComponent } from './nav/navbar.component';
import { ShowService } from './shows/shared/show.service';
import { ToastrService } from './common/toastr.service';
import { ShowDetailsComponent } from './shows/show-details/show-details.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from 'src/routes';
import { Error404Component } from './errors/404.component';
import { ShowRouteActivator } from './shows/show-details/show-route-activator.service';
import { ShowsListResolver } from './shows/shows-list-resolver.service';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    ShowsAppComponent,
    ShowsListComponent,
    NavBarComponent,
    ShowDetailsComponent,
    Error404Component,
    ShowsThumbnailComponent
  ],
  providers: [ShowService, ToastrService, ShowRouteActivator, ShowsListResolver],
  bootstrap: [ShowsAppComponent]
})
export class AppModule { }
