import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'client-b',
  template: `
  <div id="client-b">
    <div class="card">
      <div class="content">
        <a routerLink="client-b/page1" queryParamsHandling="merge">Passenger Search</a> | <a routerLink="client-b/page2" queryParamsHandling="merge">Details</a>
      </div>
    </div>
    <router-outlet></router-outlet>
  </div>
`,
styles: [`
  #client-b { border: navy dashed 5px; padding: 10px }
`],
})
export class AppComponent {
  constructor(private route: ActivatedRoute) {
    route.queryParams.subscribe(params => {
      console.debug('params', params);
    });

    window.addEventListener('client-message', e => console.debug('client-message event', e));
  }
}
