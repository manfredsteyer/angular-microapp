import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { createCustomElement } from '@angular/elements';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';

import { RouterModule } from '@angular/router';
import { ClientAWidgetComponent } from './client-a-widget/client-a-widget.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ErrorComponent } from './error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', pathMatch: 'full', redirectTo: 'client-a/page1'},
      { 
        path: 'client-a', children: [
          { path: 'page1', component: Page1Component },
          { path: 'page2', component: Page2Component },
        ]
      },
      { path: '**', component: ErrorComponent }
    ], { useHash: true  }),
    ReactiveFormsModule
  ],
  declarations: [
    AppComponent,
    Page1Component,
    Page2Component,
    ErrorComponent,
    ClientAWidgetComponent
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  entryComponents: [
    ClientAWidgetComponent
  ]
})
export class AppModule { 

  constructor(private injector: Injector) {
    const widgetElement = createCustomElement(ClientAWidgetComponent, { injector: this.injector})
    customElements.define('client-a-widget', widgetElement);
  }

}
