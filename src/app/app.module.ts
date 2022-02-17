import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { GaugeModule } from 'angular-gauge';

import { ThemeModule } from '@theme/theme.module';
import { SwiperModule } from 'ngx-swiper-wrapper';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ThemeModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    GaugeModule,
    SwiperModule,
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
