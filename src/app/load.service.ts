import {Injectable} from '@angular/core';
import {StateService} from './state.service';
import {AppModule} from './app.module';

@Injectable({ providedIn: 'root' })
export class LoadService {

  constructor(private stateService: StateService) {
  }

  config = {
    'client-a': {
      loaded: false,
      path: 'client-a/main.bundle.js',
      element: 'client-a'
    },
    'client-b': {
      loaded: false,
      path: 'client-b/main.bundle.js',
      element: 'client-b'
    },

  };

  load(name: string): void {

    const configItem = this.config[name];
    if (configItem.loaded) {
      return;
    }

    console.log('loading ' + name);

    const content = document.getElementById('content');

    const script = document.createElement('script');
    script.src = configItem.path;
    script.onerror = () => console.error(`error loading ${configItem.path}`);
    content.appendChild(script);

    const htmlElement: HTMLElement = document.createElement(configItem.element);
    htmlElement.addEventListener('message', msg => this.handleMessage(msg));
    content.appendChild(htmlElement);
    htmlElement.setAttribute('state', 'init');

    configItem.loaded = true;

    this.stateService.registerClient(htmlElement);

  }

  handleMessage(msg): void {
    console.debug('shell received message: ', msg.detail);
  }
}
