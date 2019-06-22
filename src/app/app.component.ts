import { Component } from '@angular/core';
import { ShellService } from './shell/shell.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private shellService: ShellService) {
    shellService.init({ 
      initialRoute: '/home',
      outletId: 'content',
      clients: {
        "client-a": {
          loaded: false,
          src: 'assets/micro-frontends/client-a/main.js',
          element: 'client-a',
          route: '/client-a'
        },
        "client-b": {
          loaded: false,
          src: 'assets/micro-frontends/client-b/main.js',
          element: 'client-b',
          route: '/client-b'
        }
      }});
  }

  ngOnInit() {
    this.shellService.preloadClients();
  }

}
