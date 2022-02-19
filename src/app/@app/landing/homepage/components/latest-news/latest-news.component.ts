import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { LandingService } from '@app/landing/landing.service';
import { APIResponse, NewsList } from '@core/data/newsList';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-latest-news',
  templateUrl: './latest-news.component.html',
  styleUrls: ['./latest-news.component.scss'],
})
export class LatestNewsComponent implements OnInit, OnDestroy {
  latestNews: Array<NewsList> = [];
  newsFilterd: Array<NewsList> = [];

  loader: boolean = false;
  disabled: boolean = false;
  config: SwiperConfigInterface = {
    a11y: true,
    slidesPerView: 4,
    keyboard: true,
    mousewheel: true,
    scrollbar: false,
    navigation: false,
    spaceBetween: 30,
    observeParents: true,
    centeredSlides: false,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      1199: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      767: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
    },
  };

  $subs: Subscription[] = [];

  constructor(
    private _landingService: LandingService,
    private _router: Router
  ) {}

  public onIndexChange(index: number): void {
    console.log('Swiper index: ', index);
  }

  public onSwiperEvent(event: string): void {
    console.log('Swiper event: ', event);
  }

  ngOnInit(): void {
    this.getNews();
  }

  getNews(): void {
    this.loader = true;
    const sub = this._landingService.getNewsList().subscribe(
      (newsList: APIResponse<NewsList>) => {
        // News are Filtered by showing in home page
        this.newsFilterd = newsList.News.filter(
          (el) => el.showOnHomepage === 'yes'
        );

        this.latestNews = this.newsFilterd
          .map((item: any) => {
            item.published = new Date(item.published);
            return item;
          })
          .filter((item) => this.isValidDate(item.published))
          .sort((a: any, b: any) => b.published - a.published);
        this.loader = false;
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

  gotToNewsList(): void {
    this._router.navigate([`/news-list`]);
  }

  openNewsDetails(id: string): void {
    this._router.navigate(['news-list', id]);
  }

  ngOnDestroy() {
    this.$subs.forEach((sub) => sub.unsubscribe());
  }
}
