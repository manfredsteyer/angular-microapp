import { NavbarComponent } from './navbar/navbar.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { EmptyComponent } from './empty/empty.component';

@NgModule({
   declarations: [
      AppComponent,
      SidebarComponent,
      NavbarComponent,
      EmptyComponent
   ],
   imports: [
      BrowserModule,
      // RouterModule.forRoot([
      //   { path: '', pathMatch: 'full', redirectTo: 'home'},
      //   {
      //     path: '**',
      //     component: EmptyComponent
      //   }
      // ], { useHash: true })
   ],
   schemas: [
      CUSTOM_ELEMENTS_SCHEMA
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
