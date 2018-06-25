import {Component, OnDestroy, OnInit} from '@angular/core';
import {NavigationStart, Router} from '@angular/router';
import {LoadService} from './load.service';
import {Subscription} from 'rxjs';
import {StateService} from './state.service';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html'
})
export class ShellComponent implements OnInit, OnDestroy {
  subscription: Subscription;

  constructor(private router: Router, private loadService: LoadService, private stateService: StateService) {
  }

  ngOnInit(): void {
    this.subscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        if (event.url.indexOf('client-a') >= 0) {
          this.loadService.load('client-a');
        }
        if (event.url.indexOf('client-b') >= 0) {
          this.loadService.load('client-b');
        }

        this.stateService.setUrl(event.url);
      }
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
