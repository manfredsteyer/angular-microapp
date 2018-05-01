import { element } from 'protractor';
import { Component } from '@angular/core';
import { Subject } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  clientA: HTMLElement;

  config = {
    "client-a": {
      loaded: false,
      path: 'client-a/main.bundle.js',
      element: 'client-a'
    }
  };

  ngOnInit() {
    this.load('client-a');
  }

  load(name: string): void {

    const configItem = this.config[name];
    if (configItem.loaded) return;

    const script = document.createElement('script');
    script.src = configItem.path;
    script.onerror = () => console.error(`error loading ${configItem.path}`);
    document.body.appendChild(script);
    
    const element: HTMLElement = document.createElement(configItem.element);
    element.addEventListener('message', msg => this.handleMessage(msg));
    document.body.appendChild(element);

    this.clientA = element;

  }

  handleMessage(msg): void {
    console.debug('shell received message: ', msg.detail);
  }

  sendState(): void {
    this.clientA.setAttribute('state', 'message from shell');
  }

}
