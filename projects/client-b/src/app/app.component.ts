import { environment } from './../environments/environment';
import { Observable } from 'rxjs';
import { Component, ViewEncapsulation, Input, Output, EventEmitter, OnInit, OnChanges } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'client-b',
  template: `
  <div id="client-b">
    <div class="card">
      <div class="content">
        <a routerLink="client-b/page1">Passenger Search</a> | <a routerLink="client-b/page2">Details</a>
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
}
