import { Observable } from 'rxjs';
import { Component, ViewEncapsulation, Input, Output, EventEmitter, OnInit, OnChanges } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../environments/environment';

@Component({
  selector: 'client-a',
  template: `
      <router-outlet></router-outlet>
  `,
  encapsulation: ViewEncapsulation.Emulated
})
export class AppComponent implements OnInit {

 
  constructor(
    private router: Router) {
  }

  ngOnInit() {

    // this.router.initialNavigation(); // Manually triggering initial navigation for @angular/elements ?
    
    // // Standalone mode
    // if (environment.standalone) {
    //   this.router.navigate(['/client-a/page1']);
    // }

  }
}
