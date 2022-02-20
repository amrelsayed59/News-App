import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-link-app.layout',
  template: `
    <div class="container-fluid">
      <div class="row">
        <div class="col-12 p-0">
          <app-link-header></app-link-header>
        </div>
        <div class="col-md-12 p-0">
          <router-outlet></router-outlet>
        </div>
        <div class="col-md-12 p-0">
          <app-link-footer></app-link-footer>
        </div>
      </div>
    </div>
  `,
})
export class LinkAppLayoutComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
