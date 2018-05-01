import { Observable } from 'rxjs';
import { Component, ViewEncapsulation, Input, Output, EventEmitter, OnInit, OnChanges } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  // selector: 'client-a',
  template: `
    <div id="client">
      <router-outlet></router-outlet>
      <a (click)="sendMessage()">send</a>
    </div>
  `,
  styles: [`
    #client { border: darkred dashed 5px; padding: 10px }
  `],
  encapsulation: ViewEncapsulation.Native
})
export class AppComponent implements OnInit {

  @Input('state') 
  set state(state: string) {
      console.debug('client-a received state', state);
  }

  @Output() message = new EventEmitter<any>();

  constructor(private router: Router) {
  }

  ngOnInit() {
    this.router.initialNavigation(); // Manually triggering initial navigation for @angular/elements ?
  }

  sendMessage(): void {
    this.message.next(['message from client-a']);
  }

}
