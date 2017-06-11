import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ImagesComponent } from './components/images/images.component';

const routes: Routes = [
  { path: 'images', component: ImagesComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  declarations: [ImagesComponent]
})
export class ImagesModule { }
