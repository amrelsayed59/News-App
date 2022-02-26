import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsCardComponent } from './news-card/news-card.component';
import { SearchComponent } from './search/search.component';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

const COMPONENTS = [
  NewsCardComponent,
  SearchComponent,
]

@NgModule({
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS, TranslateModule],
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule
  ]
})
export class SharedModule { }
