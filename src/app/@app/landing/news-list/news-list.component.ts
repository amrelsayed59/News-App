import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { APIResponse, NewsList } from '@core/data/newsList';
import { GlobalService } from '@core/utils/global.service';
import { Subscription } from 'rxjs';
import { LandingService } from '../landing.service';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss'],
})
export class NewsListComponent implements OnInit, OnDestroy {
  latestNews: Array<any> = [];
  allLatestNews: Array<NewsList> = [];
  currentOffset: number = 0;
  loader: boolean = false;
  $subs: Subscription[] = [];

  page_size: number = 6
  page_number: number = 1;

  newsShowMore: Boolean = true;

  constructor(
    private _landingService: LandingService,
    private _router: Router,
    private _globalService: GlobalService
  ) {}

  ngOnInit(): void {
    this._globalService.transparentNav.next(false);
    this.getNews();
  }

  getNews(): void {
    this.loader = true;
    const sub = this._landingService.getNewsList().subscribe(
      (newsList: APIResponse<NewsList>) => {
        this.loader = false;

        this.allLatestNews = newsList.News.map((item: any) => {
          item.published = new Date(item.published);
          return item;
        })
          .filter((item) => this.isValidDate(item.published))
          .sort((a: any, b: any) => b.published - a.published);
          this.showMore();
      },
      (err) => {
        this.loader = false;
      }
    );
    this.$subs.push(sub);
  }

  isValidDate(date: Date): Boolean {
    return date instanceof Date && !isNaN(date.valueOf());
  }

  showMore () {
      let newItem = this.paginate(this.allLatestNews, this.page_size, this.page_number)
     if (newItem.length > 0) {
       this.page_number += 1;
     }
    this.latestNews = [...this.latestNews, ...newItem];
    
    if (this.latestNews.length === this.allLatestNews.length) this.newsShowMore = false;
    
  }

  paginate(array, page_size, page_number) {
    // human-readable page numbers usually start with 1, so we reduce 1 in the first argument
    return array.slice((page_number - 1) * page_size, page_number * page_size);
  }
  

  openNewsDetails(id: string): void {
    this._router.navigate(['news-list', id]);
  }

  ngOnDestroy() {
    this.$subs.forEach((sub) => sub.unsubscribe());
  }
}
