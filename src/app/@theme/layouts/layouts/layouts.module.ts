import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LinkAppLayoutComponent } from './link-app/link-app.layout';
import { LinkHeaderComponent } from '@theme/components/link-header/link-header.component';
import { RouterModule } from '@angular/router';
import { LinkFooterComponent } from '@theme/components/link-footer/link-footer.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

@NgModule({
  declarations: [
    LinkAppLayoutComponent,
    LinkHeaderComponent,
    LinkFooterComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient],
      },
    
    }),
  ],
})
export class LayoutsModule {}

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}