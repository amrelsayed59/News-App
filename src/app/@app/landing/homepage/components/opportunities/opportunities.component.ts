import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-opportunities',
  templateUrl: './opportunities.component.html',
  styleUrls: ['./opportunities.component.scss'],
})
export class OpportunitiesComponent implements OnInit {

  countries: Array<any> = [];
  sectors: Array<any> = [];

  constructor() {}

  getOpportunities(): void {
    this.sectors = [
      {
        id: 1,
        country: 'Nigeria',
        sector: "Real estate, Tourism",
        oppor: 446
      },
      {
        id: 2,
        country: 'Ethiopia',
        sector: "Agriculture, Healthtech",
        oppor: 557
      },
      {
        id: 3,
        country: 'Egypt',
        sector: "Real Estate, Tourism",
        oppor: 586
      },
      {
        id: 4,
        country: 'Tanzania',
        sector: "Fintech",
        oppor: 226
      },  
      {
        id: 5,
        country: 'Kenya',
        sector: "Healthtech",
        oppor: 287
      },
      {
        id: 7,
        country: 'Uganda',
        sector: "Agriculture, Healthtech",
        oppor: 27
      },
      {
        id: 8,
        country: 'Sudan',
        sector: "Tourism",
        oppor: 775
      },
    ]
  }

  ngOnInit(): void {
    this.getOpportunities();
  }
}
