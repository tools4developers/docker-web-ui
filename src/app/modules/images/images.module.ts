import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ImagesComponent } from './components/images/images.component';
import { SidebarService } from '../../services/sidebar.service';
import { SidebarMenuItemModel } from '../../models/sidebar-menu-item.model';

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
export class ImagesModule {
  constructor(private sidebarService: SidebarService) {
    this.sidebarService.registerMenuItem({
      title: 'Images',
      routerLink: 'images',
      order: 10,
    } as SidebarMenuItemModel);
  }
}
