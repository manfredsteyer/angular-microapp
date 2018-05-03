import { Component, OnInit } from '@angular/core';

@Component({
  template: `
    <div id="client">
      <div>
        <a routerLink="/client-a/page1">Page 1</a> | <a routerLink="/client-a/page2">Page 2</a>
      </div>
      <router-outlet></router-outlet>
    </div>
  `,
  styles: [`
    #client { border: darkred dashed 5px; padding: 10px }
  `],
})
export class CoreComponent {
}
