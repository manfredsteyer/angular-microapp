import { Component, Input } from '@angular/core';
import { ViewEncapsulation, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs';

@Component({
  //selector: 'client-a-widget',
  template: `
  <div id="widget">
  <div class="card">
    <div class="header">
      <h1>Your Flights</h1>
    </div>
    <div class="content">
  <table class="table table-contensed">
      <thead>
      <tr>
          <th>Id</th>
          <th>From</th>
          <th>To</th>
      </tr>
      </thead>
      <tr>
          <td>4711</td>
          <td>Graz</td>
          <td>Frankfurt</td>
      </tr>
      <tr>
          <td>4712</td>
          <td>Frankfurt</td>
          <td>Graz</td>
      </tr>

      </table>
  </div>
</div>
</div>


  `,
  styles: [`
        #widget { padding:10px; border: 2px darkred dashed }
  `],
  encapsulation: ViewEncapsulation.Emulated
})
export class ClientAWidgetComponent implements OnInit {
    control = new FormControl();
    value$: Observable<string>;
  
    ngOnInit(): void {
      this.control.valueChanges.subscribe(x => console.debug(x));
      this.value$ = this.control.valueChanges;
    }

    clickMe(): void {
      console.debug('ouch!');
    }
}
