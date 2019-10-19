import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';
import { ShowService } from '../shared/show.service';

@Injectable()
export class ShowRouteActivator implements CanActivate{
    constructor(private showService:ShowService, private router:Router) {

    }

    canActivate(route:ActivatedRouteSnapshot) {
        const showExists = !!this.showService.getShow(+route.params['id'])

        if(!showExists)
        this.router.navigate(['/404'])
        return showExists
    }

}