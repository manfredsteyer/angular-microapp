import { Observable } from 'rxjs';
import { Component, ViewEncapsulation, Input, Output, EventEmitter, OnInit, OnChanges } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../environments/environment';

@Component({
  selector: 'client-a',
  template: `
    <div id="client-a">
      <div class="card">
        <div class="content">
          <a routerLink="client-a/page1">Flight Search</a> | <a routerLink="client-a/page2">Advanced</a>
        </div>
      </div>
      <router-outlet></router-outlet>
    </div>
  `,
  styles: [`#client-a { border: darkred dashed 5px; padding: 10px }`]
})
export class AppComponent implements OnInit {
  ngOnInit() {
  }
}
