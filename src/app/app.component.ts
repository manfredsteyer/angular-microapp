import { element } from 'protractor';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
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
    
    const element = document.createElement(configItem.element);
    document.body.appendChild(element);

  }

}
