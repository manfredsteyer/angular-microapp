import { Injectable } from '@angular/core';
import { ClientConfigs, ShellConfig } from './config';

@Injectable({
  providedIn: 'root'
})
export class ShellService {

  constructor() { }

  private config: ShellConfig;
  
  init(config: ShellConfig) {
    this.config = config;
    if (!location.hash && config.initialRoute) {
      location.hash = config.initialRoute;
    }
    window.addEventListener("hashchange", () => this.urlChanged());
  }

  urlChanged() {
    for (const client in this.config.clients) {
      const entry = this.config.clients[client];
      const route = '#' + entry.route;
      if (location.hash.startsWith(route)) {
        // Lazy load module if still not loaded
        this.load(client);
        this.showClient(client);
      }
      else {
        this.hideClient(client);
      }
    }
  }

  showClient(clientName: string) {
    this.setClientVisibility(clientName, true);
  }

  hideClient(clientName: string) {
    this.setClientVisibility(clientName, false);
  }

  setClientVisibility(clientName: string, show: boolean) {
    const entry = this.config.clients[clientName];

    if (!entry) {
      throw new Error(`Client ${clientName} is not configured.`);
    }

    const elms = document.getElementsByTagName(entry.element);
    
    if (elms.length === 0) {
      throw new Error(`Client ${clientName} is not loaded.`);
    }

    if (elms.length > 1) {
      throw new Error(`Client ${clientName} is loaded several times.`);
    }

    const elm = elms[0];
    elm['hidden'] = !show;
  }

  load(name: string): void {

    const configItem = this.config.clients[name];

    // Don't load bundle twice
    if (configItem.loaded) return;
    configItem.loaded = true;

    const content = document.getElementById(this.config.outletId || 'content');

    // Add script-tag to load bundle
    const script = document.createElement('script');
    script.src = configItem.src;
    content.appendChild(script);
    
    // Add tag for micro frontend, e. g. <client-a></client-a>
    const element = document.createElement(configItem.element);
    element['hidden'] = !location.hash.startsWith('#' + configItem.route);
    content.appendChild(element);
  }

  preloadClients() {
    for (const client in this.config.clients) {
      this.load(client);
    }
  }

  navigate(url: string) {
    const pos = location.hash.indexOf('?');
    const query = pos !== -1? location.hash.substr(pos): '';
    location.hash = url + query;
  }


}
