import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { LandingService } from '@app/landing/landing.service';
import { NewsList } from '@core/data/newsList';
import { GlobalService } from '@core/utils/global.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.component.html',
  styleUrls: ['./news-details.component.scss'],
})
export class NewsDetailsComponent implements OnInit, OnDestroy {

  newsDetails: NewsList;
  newsId: string;
  loader: boolean = false;
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
    this.loader = true;
    const newsSub = this._landingService.getNewsDetails(id).subscribe((newsResp: NewsList) => {
      this.loader = false;
      this.newsDetails = newsResp;
    },(err) => {
      this.loader = false;
    });
    this.$subs.push(newsSub);
  }

  ngOnDestroy() {
    this.$subs.forEach(sub => sub.unsubscribe());
  }

}
