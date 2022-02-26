import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsRoutingModule } from './news-routing.module';
import { NewsComponent } from './news.component';
import { NewsDetailsComponent } from './components/news-details/news-details.component';
import { NewsFilterComponent } from './components/news-filter/news-filter.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '@shared/shared.module';
import { FilterPipe } from '@core/pipes/filter.pipe';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [NewsComponent, NewsDetailsComponent, NewsFilterComponent, FilterPipe],
  imports: [
    CommonModule,
    NewsRoutingModule,
    FormsModule,
    SharedModule,
    NgbModule,
  ]
})
export class NewsModule { }
