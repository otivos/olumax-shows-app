import { Component } from '@angular/core';

@Component({
  selector: 'shows-app',
  template: `
      <nav-bar></nav-bar>
      <shows-list></shows-list>
      `
})
export class ShowsAppComponent {
  title = 'olumax-app';
}
