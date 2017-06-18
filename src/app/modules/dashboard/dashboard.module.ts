import { NgModule } from '@angular/core';
import { CommonModule as NgCommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { CommonModule } from '../common/common.module';

import { SidebarService } from '../../services/sidebar.service';
import { DashboardService } from './services/dashboard.service';

import { SidebarMenuItemModel } from '../../models/sidebar-menu-item.model';

import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
];

@NgModule({
  imports: [
    NgCommonModule,
    CommonModule,
    RouterModule.forChild(routes),
  ],
  providers: [DashboardService],
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
