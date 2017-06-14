import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { NetworksService } from './services/networks.service';
import { SidebarService } from '../../services/sidebar.service';

import { SidebarMenuItemModel } from '../../models/sidebar-menu-item.model';

import { NetworksComponent } from './componentss/networks/networks.component';
import { NetworksListComponent } from './componentss/networks-list/networks-list.component';

const routes: Routes = [
  { path: 'networks', component: NetworksComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  declarations: [
    NetworksComponent,
    NetworksListComponent,
  ],
  providers: [NetworksService],
})
export class NetworksModule {
  constructor(private sidebarService: SidebarService) {
    this.sidebarService.registerMenuItem({
      title: 'Networks',
      routerLink: 'networks',
      order: 40
    } as SidebarMenuItemModel);
  }
}
