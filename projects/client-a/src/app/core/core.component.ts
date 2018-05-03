import { Component, OnInit } from '@angular/core';

@Component({
  template: `
    <div id="client-a">
      <div>
        <a routerLink="page1">Page 1</a> | <a routerLink="page2">Page 2</a>
      </div>
      <router-outlet></router-outlet>
    </div>
  `,
  styles: [`
    #client-a { border: darkred dashed 5px; padding: 10px }
  `],
})
export class CoreComponent {
}
