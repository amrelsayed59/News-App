import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { NewsList } from '@core/data/newsList';
import { Subscription } from 'rxjs';
import { LandingService } from '../landing.service';

@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.component.html',
  styleUrls: ['./news-details.component.scss']
})
export class NewsDetailsComponent implements OnInit, OnDestroy {

  news: NewsList;
  newsId: string;
  $subs: Subscription[] = [];

  constructor( private _activatedRoute: ActivatedRoute, private _landingService: LandingService) { }

  ngOnInit(): void {
    const routeSub = this._activatedRoute.params.subscribe((params: Params) => {
      this.newsId = params['id'];
      this.getNewsDetails(this.newsId);
    });
    this.$subs.push(routeSub);
  }

  getNewsDetails(id: string): void {
    const newsSub = this._landingService.getNewsDetails(id).subscribe((newsResp: NewsList) => {
      this.news = newsResp;
      console.log('---', this.news)
    });
    this.$subs.push(newsSub);
  }

  ngOnDestroy() {
    this.$subs.forEach(sub => sub.unsubscribe());
  }

}
