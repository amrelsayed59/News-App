import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageRoutingModule } from './home-page-routing.module';
import { SharedModule } from '@shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomepageComponent } from './home-page.component';
import { BannerComponent } from './components/banner/banner.component';
import { OpportunitiesComponent } from './components/opportunities/opportunities.component';
import { LatestNewsComponent } from './components/latest-news/latest-news.component';
import { SwiperModule } from 'ngx-swiper-wrapper';


@NgModule({
  declarations: [HomepageComponent, BannerComponent, OpportunitiesComponent, LatestNewsComponent],
  imports: [
    CommonModule,
    HomePageRoutingModule,
    SharedModule,
    NgbModule,
    SwiperModule,
  ]
})
export class HomePageModule { }
