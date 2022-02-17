import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LinkAppLayoutComponent } from './link-app/link-app.layout';
import { LinkHeaderComponent } from '@theme/components/link-header/link-header.component';
import { RouterModule } from '@angular/router';
import { LinkFooterComponent } from '@theme/components/link-footer/link-footer.component';



@NgModule({
  declarations: [LinkAppLayoutComponent, LinkHeaderComponent, LinkFooterComponent],
  imports: [
    CommonModule,
    RouterModule,
  ]
})
export class LayoutsModule { }
