import { Component } from '@angular/core';
import { Location, PlatformLocation } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  // constructor(private location: Location, private pl: PlatformLocation) {
  //   this.location.onUrlChange(url => this.urlChanged());
  // }

  constructor() {
    window.addEventListener("hashchange", () => this.urlChanged());
  }

  urlChanged() {
    for (const client in this.config) {
      const entry = this.config[client];
      const route = entry.route;
      if (location.hash.startsWith(route)) {
        this.load(client);
        const elm = document.getElementsByTagName(entry.element)[0];
        elm['hidden'] = false;
      }
      else {
        const elm = document.getElementsByTagName(entry.element)[0];
        elm['hidden'] = true;
      }
    }
  }

  

  config = {
    "client-a": {
      loaded: false,
      path: 'assets/micro-frontends/client-a/main.js',
      element: 'client-a',
      route: '#/client-a'
    },
    "client-b": {
      loaded: false,
      path: 'assets/micro-frontends/client-b/main.js',
      element: 'client-b',
      route: '#/client-b'
    },
  };

  ngOnInit() {
      this.load('client-a');
      this.load('client-b');
  }

  load(name: string): void {

    const configItem = this.config[name];

    // Don't load bundle twice
    if (configItem.loaded) return;
    configItem.loaded = true;

    const content = document.getElementById('content');

    // Add script-tag to load bundle
    const script = document.createElement('script');
    script.src = configItem.path;
    content.appendChild(script);
    
    // Add tag for micro frontend, e. g. <client-a></client-a>
    const element = document.createElement(configItem.element);
    element['hidden'] = !location.hash.startsWith(configItem.route);
    content.appendChild(element);
  }

}
