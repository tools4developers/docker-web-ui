import { NgModule } from '@angular/core';
import { CommonModule as NgCommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { CommonModule } from '../common/common.module';

import { ImagesComponent } from './components/images/images.component';
import { ImagesListComponent } from './components/images-list/images-list.component';
import { ImagesListFilterComponent } from './components/images-list-filter/images-list-filter.component';

import { ImagesService } from './services/images.service';
import { SidebarService } from '../../services/sidebar.service';

import { SidebarMenuItemModel } from '../../models/sidebar-menu-item.model';
import { ImageRepositoryPipe } from './pipes/image-repository.pipe';
import { ImageTagPipe } from './pipes/image-tag.pipe';
import { ImageIdTruncatePipe } from './pipes/image-id-truncate.pipe';

const routes: Routes = [
  { path: 'images', component: ImagesComponent },
];

@NgModule({
  imports: [
    NgCommonModule,
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
  ],
  providers: [ImagesService],
  declarations: [ImagesComponent, ImagesListComponent, ImagesListFilterComponent, ImageRepositoryPipe, ImageTagPipe, ImageIdTruncatePipe],
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
