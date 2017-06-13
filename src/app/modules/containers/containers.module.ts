import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { SidebarService } from '../../services/sidebar.service';
import { ContainersService } from './services/containers.service';

import { SidebarMenuItemModel } from '../../models/sidebar-menu-item.model';

import { ContainersComponent } from './components/containers/containers.component';
import { ContainersListComponent } from './components/containers-list/containers-list.component';
import { ContainersListFilterComponent } from './components/containers-list-filter/containers-list-filter.component';

const routes: Routes = [
  { path: 'containers', component: ContainersComponent },
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
  ],
  providers: [ContainersService],
  declarations: [
    ContainersComponent,
    ContainersListComponent,
    ContainersListFilterComponent,
  ]
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
