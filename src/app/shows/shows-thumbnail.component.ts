import { Component, Input } from '@angular/core';

@Component({
    selector: 'show-thumbnail',
    template: `
        <div class ="well hoverwell thumbnail" >
            <div>
                <img [src]="show.imageUrl"/>
                <h3>{{show.title}}</h3>
                Released: {{show.dateReleased}}
            </div>
        </div>
    `
})

export class ShowsThumbnailComponent {
    @Input() show:any

}