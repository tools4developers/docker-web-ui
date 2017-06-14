import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { SidebarService } from '../../services/sidebar.service';
import { VolumesService } from './services/volumes.service';

import { SidebarMenuItemModel } from '../../models/sidebar-menu-item.model';

import { VolumesComponent } from './components/volumes/volumes.component';
import { VolumesListComponent } from './components/volumes-list/volumes-list.component';

const routes: Routes = [
  { path: 'volumes', component: VolumesComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  declarations: [
    VolumesComponent,
    VolumesListComponent,
  ],
  providers: [VolumesService],
})
export class VolumesModule {
  constructor(private sidebarService: SidebarService) {
    this.sidebarService.registerMenuItem({
      title: 'Volumes',
      routerLink: 'volumes',
      order: 50,
    } as SidebarMenuItemModel);
  }
}
