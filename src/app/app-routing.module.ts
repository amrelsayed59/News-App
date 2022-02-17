import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LinkAppLayoutComponent } from '@theme/layouts/layouts/link-app/link-app.layout';

const routes: Routes = [
  {
    path: '',
    redirectTo: '',
    pathMatch: "full",
  },

  {
    path: '',
    component: LinkAppLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('@app/landing/landing.module')
        .then(m => m.HomepageModule),
      }
    ]
  },

  { path: '**', redirectTo: 'home'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
