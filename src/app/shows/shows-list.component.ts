import { Component, OnInit } from '@angular/core';
import { ShowService } from './shared/show.service';
import { ToastrService } from '../common/toastr.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    template:
    `
        <div>
            <h1>Olumax New Releases</h1>
            <hr/>
            <div class="row">
                <div *ngFor="let show of shows1" class="col-md-4" >
                    <show-thumbnail (click)="handleThumbnailClick(show.title)"  [show] = "show"> </show-thumbnail>
                </div>
            <div>
        </div>
    `
})
export class ShowsListComponent implements OnInit {
   shows1:any
   constructor(private toastr:ToastrService, private route:ActivatedRoute) {
      
   }

   ngOnInit(){
    this.shows1 = this.route.snapshot.data ['shows']
   }

   handleThumbnailClick(showTitle) {
       this.toastr.success(showTitle)
   }
}