import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsDetailsComponent } from './components/news-details/news-details.component';
import { NewsComponent } from './news.component';

const routes: Routes = [
  { path: '', component: NewsComponent },
  {
    path: 'news/:id',
    component: NewsDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewsRoutingModule { }
