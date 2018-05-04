import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { createCustomElement } from '@angular/elements';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';

import { RouterModule } from '@angular/router';
import { EmptyComponent } from './empty/empty.component';
import { ClientAWidgetComponent } from './client-a-widget/client-a-widget.component';
import { ReactiveFormsModule, FormControl } from '@angular/forms';
import { CoreComponent } from './core/core.component';
import { PushPipe } from './push.pipe';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: 'client-a', component: CoreComponent, children: [
        { path: 'page1', component: Page1Component },
        { path: 'page2', component: Page2Component },
      ]},
      { path: '**', component: EmptyComponent }
    ], { useHash: true }),
    ReactiveFormsModule
  ],
  declarations: [
    AppComponent,
    Page1Component,
    Page2Component,
    EmptyComponent,
    ClientAWidgetComponent,
    CoreComponent,
    PushPipe
  ],
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  entryComponents: [
    AppComponent,
    ClientAWidgetComponent
  ]
})
export class AppModule { 

  constructor(private injector: Injector) {
  }

  ngDoBootstrap() {
    const appElement = createCustomElement(AppComponent, { injector: this.injector})
    customElements.define('client-a', appElement);

    const widgetElement = createCustomElement(ClientAWidgetComponent, { injector: this.injector})
    customElements.define('client-a-widget', widgetElement);
  }
}
