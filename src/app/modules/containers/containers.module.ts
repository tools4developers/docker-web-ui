import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ContainersComponent } from './components/containers/containers.component';

const routes: Routes = [
  { path: 'containers', component: ContainersComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  declarations: [ContainersComponent]
})
export class ContainersModule { }
