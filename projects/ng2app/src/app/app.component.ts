import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  //templateUrl: './app.component.html',
  //styleUrls: ['./app.component.scss']
  template: `
  <h1 class="text-center">
    <span class="title">{{ title }}</span>
    <p class="sub-title">{{ subtitle }}</p>
  </h1>
  <router-outlet></router-outlet>
  `,
  styles: [
    '.title { color: #ee6e73;}',
    '.sub-title { font-size: small; }'
  ],
})
export class AppComponent {
  //title = 'ng2app';
  title = 'Simple Todo';
  subtitle = 'Angular2 + Django Rest Framework'
}
