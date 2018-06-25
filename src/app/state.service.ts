import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({providedIn: 'root'})
export class StateService {

  constructor() {
  }

  private state$ = new Subject();
  private clients: HTMLElement[] = [];

  public registerClient(client: HTMLElement) {
    this.clients.push(client);
  }

  public setState(state: string) {
    this.setAttr('state', state);
  }

  public setUrl(url: string) {
    this.setAttr('url', url);
  }

  private setAttr(attrName: string, attrValue: string) {
    for (const client of this.clients) {
      client.setAttribute(attrName, attrValue);
    }
  }
}
