import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { APIResponse, NewsList } from '@core/data/newsList';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { Subscription } from 'rxjs';
import { LandingService } from '../landing.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent implements OnInit, OnDestroy {
  latestNews: Array<any> = [];
  newsFilterd: Array<any> = [];

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

  constructor(private _router: Router) {}

  ngOnInit(): void {}

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
