import { Routes } from '@angular/router';
import { ShowsListComponent } from './app/shows/shows-list.component';
import { ShowDetailsComponent } from './app/shows/show-details/show-details.component';
import { Error404Component } from './app/errors/404.component';
import { ShowRouteActivator } from './app/shows/show-details/show-route-activator.service';
import { ShowsListResolver } from './app/shows/shows-list-resolver.service';

export const appRoutes:Routes = [
    {path: 'shows', component: ShowsListComponent, resolve: {shows:ShowsListResolver}},
    {path: 'shows/:id', component: ShowDetailsComponent, canActivate: [ShowRouteActivator]},
    {path: '404', component: Error404Component},
    {path: '', redirectTo: '/shows', pathMatch: 'full'}
    
]