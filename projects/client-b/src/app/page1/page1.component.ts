import { Component, OnInit } from '@angular/core';

@Component({
  template: `
  <div class="card">

  <div class="header">
      <h2 class="title">Passenger Search</h2>
  </div>
  <div class="content">
  
 
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
          <button 
              class="btn btn-default">Search</button>
  
          </div>
  
  </div>
  </div>
  `
})
export class Page1Component  {
}
