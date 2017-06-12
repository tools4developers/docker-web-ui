import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { ImagesComponent } from './components/images/images.component';
import { ImagesListComponent } from './components/images-list/images-list.component';
import { ImagesListFilterComponent } from './components/images-list-filter/images-list-filter.component';

import { ImagesService } from './services/images.service';
import { SidebarService } from '../../services/sidebar.service';

import { SidebarMenuItemModel } from '../../models/sidebar-menu-item.model';

const routes: Routes = [
  { path: 'images', component: ImagesComponent },
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
  ],
  providers: [ImagesService],
  declarations: [ImagesComponent, ImagesListComponent, ImagesListFilterComponent],
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
