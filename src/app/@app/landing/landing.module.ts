import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomepageRoutingModule } from './landing-routing.module';
import { HomepageComponent } from './homepage/homepage.component';
import { ThemeModule } from '@theme/theme.module';

import { SwiperModule } from 'ngx-swiper-wrapper';
import { LandingComponent } from './landing.component';
import { NewsListComponent } from './news-list/news-list.component';
import { NewsDetailsComponent } from './news-details/news-details.component';
import { SharedModule } from '@shared/shared.module';
import { NewsFilterComponent } from './news-filter/news-filter.component';
import { BannerComponent } from './homepage/components/banner/banner.component';
import { LatestNewsComponent } from './homepage/components/latest-news/latest-news.component';
import { OpportunitiesComponent } from './homepage/components/opportunities/opportunities.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FilterPipe } from '@core/pipes/filter.pipe';
// import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
// import { HttpClient } from '@angular/common/http';
// import { TranslateHttpLoader } from '@ngx-translate/http-loader';

@NgModule({
  declarations: [
    HomepageComponent,
    LandingComponent,
    NewsListComponent,
    NewsDetailsComponent,
    NewsFilterComponent,
    BannerComponent,
    LatestNewsComponent,
    OpportunitiesComponent,
    FilterPipe,
  ],
  imports: [
    CommonModule,
    ThemeModule,
    HomepageRoutingModule,
    SwiperModule,
    SharedModule,
    FormsModule,
    NgbModule,
    // TranslateModule.forRoot({
    //   defaultLanguage: 'en',
    //   loader: {
    //     provide: TranslateLoader,
    //     useFactory: createTranslateLoader,
    //     deps: [HttpClient],
    //   },
    // }),
  ],
  providers: [],
})
export class LandingModule {}

// export function createTranslateLoader(http: HttpClient) {
//   return new TranslateHttpLoader(http, './assets/i18n/', '.json');
// }
