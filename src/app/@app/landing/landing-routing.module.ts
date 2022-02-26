import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing.component';
import { NewsDetailsComponent } from './news/components/news-details/news-details.component';

const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
    children: [
      {
        path: 'home',
        loadChildren: () => import('@app/landing/home-page/home-page.module')
          .then(m => m.HomePageModule),
      },
      {
        path: 'news',
        loadChildren: () => import('@app/landing/news/news.module')
          .then(m => m.NewsModule),
      },
      {
        path: 'news/:id',
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
