import { Component, OnInit } from '@angular/core';
import { ShowService } from '../shared/show.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    templateUrl: './show-details.component.html',
    styles: [`
        .container {padding-left:20px; padding-right:20px;}
        .show-image {height: 100px;}
    `]
})
export class ShowDetailsComponent implements OnInit {
    show:any
    constructor(private showService:ShowService, private route:ActivatedRoute) {

    }

    ngOnInit() {
        this.show = this.showService.getShow(+this.route.snapshot.params['id'])
    }

}