import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ContainersComponent } from './components/containers/containers.component';
import { SidebarService } from '../../services/sidebar.service';
import { SidebarMenuItemModel } from '../../models/sidebar-menu-item.model';

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
export class ContainersModule {
  constructor(private sidebarService: SidebarService) {
    this.sidebarService.registerMenuItem({
      title: 'Containers',
      routerLink: 'containers',
      order: 20
    } as SidebarMenuItemModel);
  }
}
