import { Component, OnInit, } from '@angular/core';

@Component({
  selector: 'client-a',
  template: `
    <div id="client-a">
      <div class="card">
        <div class="content">
          <a routerLink="client-a/page1" queryParamsHandling="merge">Flight Search</a> | <a routerLink="client-a/page2" queryParamsHandling="merge">Advanced</a>
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
