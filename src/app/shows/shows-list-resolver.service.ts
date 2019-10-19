import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { ShowService } from './shared/show.service';
import { map } from 'rxjs/operators';

@Injectable()
export class ShowsListResolver implements Resolve<any> {
    constructor(private showService:ShowService) {

    }
    resolve() {
        return this.showService.getShows().pipe(map(sho => sho))
    }
    
}