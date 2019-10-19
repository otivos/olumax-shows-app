import { Component } from '@angular/core';

@Component({
  selector: 'shows-app',
  template: `
      <nav-bar></nav-bar>
      <router-outlet></router-outlet>
      `
})
export class ShowsAppComponent {
  title = 'olumax-app';
}
