import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { SettingsComponent } from './components/settings/settings.component';
import { SidebarService } from '../../services/sidebar.service';
import { SidebarMenuItemModel } from '../../models/sidebar-menu-item.model';

const routes: Routes = [
  { path: 'settings', component: SettingsComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  declarations: [SettingsComponent]
})
export class SettingsModule {
  constructor(private sidebarService: SidebarService) {
    this.sidebarService.registerMenuItem({
      title: 'Settings',
      routerLink: 'settings',
      order: 60
    } as SidebarMenuItemModel);
  }
}
