import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { NetworksComponent } from './componentss/networks/networks.component';

const routes: Routes = [
  { path: 'networks', component: NetworksComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  declarations: [NetworksComponent]
})
export class NetworksModule { }
