import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomepageRoutingModule } from './landing-routing.module';
import { HomepageComponent } from './homepage/homepage.component';
import { ThemeModule } from '@theme/theme.module';

import { SwiperModule, SwiperConfigInterface,SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { LandingComponent } from './landing.component';
import { NewsListComponent } from './news-list/news-list.component';
import { NewsDetailsComponent } from './news-details/news-details.component';
import { SharedModule } from '@shared/shared.module';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { NewsFilterComponent } from './news-filter/news-filter.component';
import { BannerComponent } from './homepage/components/banner/banner.component';
import { LatestNewsComponent } from './homepage/components/latest-news/latest-news.component';
import { OpportunitiesComponent } from './homepage/components/opportunities/opportunities.component';

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  observer: true,
  direction: 'horizontal',
  threshold: 50,
  spaceBetween: 5,
  slidesPerView: 1,
  centeredSlides: true
};

@NgModule({
  declarations: [HomepageComponent, LandingComponent, NewsListComponent, NewsDetailsComponent, NewsFilterComponent, BannerComponent, LatestNewsComponent, OpportunitiesComponent],
  imports: [
    CommonModule,
    ThemeModule,
    HomepageRoutingModule,
    SwiperModule,
    SharedModule,
    MatProgressSpinnerModule,
  ],
  providers: [
    {
      provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG
    }
  ]
})
export class LandingModule { }
