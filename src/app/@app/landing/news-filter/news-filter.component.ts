import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-filter',
  templateUrl: './news-filter.component.html',
  styleUrls: ['./news-filter.component.scss']
})
export class NewsFilterComponent implements OnInit {

  searchValue: string;
  filterData: any = {};

  constructor() { }

  ngOnInit(): void {
  }

  searchChanged(searchValue) {
    console.log('===', searchValue)
    this.searchValue = searchValue;
    this.searchValue = this.filterData.search;
    console.log('filter data',this.filterData)
    // this.getUsers();
  }

}
