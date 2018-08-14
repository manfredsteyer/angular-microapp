import { Component, OnInit } from '@angular/core';

@Component({
  template: `
  <div class="card">

  <div class="header">
      <h2 class="title">Advanced Flight Search</h2>
  </div>
  <div class="content">
  
  
      <div class="form-group">
          <label>From:</label>
          <input name="from" class="form-control">
      </div>
      <div class="form-group">
          <label>To:</label>
          <input name="to" class="form-control">
      </div>
      <div class="form-group">
          <label>To:</label>
          <input name="to" class="form-control">
      </div>
      <div class="form-group">
          <label>To:</label>
          <input name="to" class="form-control">
      </div>
  
      <div class="form-group">
          <button 
              class="btn btn-default">Search</button>
  
          </div>
  
  </div>
  
  </div>
  `
})
export class Page2Component {
}
