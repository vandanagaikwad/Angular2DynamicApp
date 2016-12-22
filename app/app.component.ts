import { Component } from '@angular/core';

import { Nav } from './nav';

@Component({
  selector: 'my-app',
  template: '<my-nav></my-nav><div class="main-content"><upper-nav></upper-nav><div class="main-content-view posRel"><router-outlet></router-outlet></div></div>'
})
export class AppComponent {
    title = 'CCR';
}