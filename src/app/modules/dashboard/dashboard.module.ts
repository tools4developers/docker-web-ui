import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SidebarService } from '../../services/sidebar.service';
import { SidebarMenuItemModel } from '../../models/sidebar-menu-item.model';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  declarations: [DashboardComponent]
})
export class DashboardModule {
  constructor(private sidebarService: SidebarService) {
    this.sidebarService.registerMenuItem({
      title: 'Dashboard',
      routerLink: 'dashboard',
      order: 0
    } as SidebarMenuItemModel);
  }
}
