import { Component, OnInit } from '@angular/core';
import { GlobalService } from '@core/utils/global.service';

@Component({
  selector: 'app-link-header',
  templateUrl: './link-header.component.html',
  styleUrls: ['./link-header.component.scss'],
})
export class LinkHeaderComponent implements OnInit {
  isTransparentNav: boolean;

  constructor(private _globalService: GlobalService) {}

  ngOnInit(): void {
    this._globalService.transparentNav.subscribe((val: boolean) => {
      this.isTransparentNav = val;
    });
  }
}
