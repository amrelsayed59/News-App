import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { ThemeModule } from '@theme/theme.module';
import { SwiperModule } from 'ngx-swiper-wrapper';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateModule, TranslateLoader } from "@ngx-translate/core";
import { TranslationService } from '@core/utils/translation.service';
import { LanguageInterceptor } from '@core/utils/language.interceptor';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ThemeModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    SwiperModule,
    NgbModule,
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient],
      },
    
    }),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LanguageInterceptor,
      multi: true
    },
    TranslationService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
