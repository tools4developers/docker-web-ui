import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { VolumesComponent } from './components/volumes/volumes.component';

const routes: Routes = [
  { path: 'volumes', component: VolumesComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  declarations: [VolumesComponent]
})
export class VolumesModule { }
