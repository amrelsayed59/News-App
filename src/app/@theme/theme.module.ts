import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutsModule } from './layouts/layouts/layouts.module';
import { RouterModule } from '@angular/router';

const COMPONENTS = [
 
]


@NgModule({
 
  imports: [
    CommonModule,
    RouterModule,
    LayoutsModule,
  ],
  exports: [CommonModule, ...COMPONENTS],
  declarations: [...COMPONENTS],
})
export class ThemeModule { }



