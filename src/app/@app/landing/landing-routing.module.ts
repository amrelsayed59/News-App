import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { LandingComponent } from './landing.component';
import { NewsDetailsComponent } from './news-details/news-details.component';
import { NewsListComponent } from './news-list/news-list.component';

const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
    children: [
      {
        path: 'home',
        component: HomepageComponent,
        pathMatch: 'full',
        data: { title: 'Home' },
      },
      {
        path: 'news-list',
        component: NewsListComponent,
      },
      {
        path: 'news-list/:id',
        component: NewsDetailsComponent,
      },
      { path: '**', redirectTo: 'home' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomepageRoutingModule {}
