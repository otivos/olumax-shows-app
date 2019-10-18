import { Component } from '@angular/core';

@Component({
    selector: 'nav-bar',
    templateUrl: './navbar.component.html',
    styles: [`
        .nav.navbar-nav {font-size: 15px; background-color: #333333;}
        #searchForm {margin-right: 100px;}
        .container-fluid {background-color: #333333;}
        .container-fluid:hover {background-color: #333333;}
        @media (max-widht: 1200px) {#searchForm {display:none}}
    `]
})

export class NavBarComponent {

}