import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomepageRoutingModule } from './landing-routing.module';
import { ThemeModule } from '@theme/theme.module';
import { SwiperModule } from 'ngx-swiper-wrapper';
import { LandingComponent } from './landing.component';
import { SharedModule } from '@shared/shared.module';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    LandingComponent,

  ],
  imports: [
    CommonModule,
    ThemeModule,
    HomepageRoutingModule,
    SwiperModule,
    SharedModule,
    FormsModule,
    NgbModule,
  ],
  providers: [],
})
export class LandingModule {}
