import { element } from 'protractor';
import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { StateService } from './state.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(private stateService: StateService) {
  }

  config = {
    "client-a": {
      loaded: false,
      path: 'client-a/main.js',
      element: 'client-a'
    },
    "client-b": {
      loaded: false,
      path: 'client-b/main.js',
      element: 'client-b'
    },
    
  };

  ngOnInit() {
    this.load('client-a');
    this.load('client-b');
  }

  load(name: string): void {

    const configItem = this.config[name];
    if (configItem.loaded) return;

    const content = document.getElementById('content');












    const script = document.createElement('script');
    script.src = configItem.path;
    content.appendChild(script);
    
    const element: HTMLElement = document.createElement(configItem.element);
    content.appendChild(element);








    




    element.addEventListener('message', msg => this.handleMessage(msg));
    element.setAttribute('state', 'init');

    script.onerror = () => console.error(`error loading ${configItem.path}`);


    this.stateService.registerClient(element);

  }

  handleMessage(msg): void {
    console.debug('shell received message: ', msg.detail);
  }

}
