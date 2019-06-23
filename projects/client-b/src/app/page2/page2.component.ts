import { Component, OnInit } from '@angular/core';

@Component({
  template: `
  <div class="card">

  <div class="header">
      <h2 class="title">Details</h2>
  </div>
  <div class="content">

      <div class="row">
          <div class="col-md-9">

              <div class="form-group">
                  <label>Id:</label>
                  <input name="from" value="0001" class="form-control">
              </div>

              <div class="form-group">
                  <label>Title:</label>
                  <input name="to" value="Mag." class="form-control">
              </div>

              <div class="form-group">
                  <label>First Name:</label>
                  <input name="from" value="Manu" class="form-control">
              </div>
              <div class="form-group">
                  <label>Last Name:</label>
                  <input name="to" value="" class="form-control">
              </div>

              <div class="form-group">
                  <button class="btn btn-default">Search</button>

              </div>
              <client-a-widget></client-a-widget>
          </div>
      
          <div class="col-md-3">
            <miles-card miles="400"></miles-card>  
            <p>&nbsp;</p>
            <flight-basket flights='[{"id": 1, "from": "Munich", "to": "Berlin", "date": "Today"}, {"id": 1, "from": "Berlin", "to": "Graz", "date": "Tomorrow"}]'></flight-basket>
          </div>
      </div>
    </div>
  </div>
    `
})
export class Page2Component {
}
