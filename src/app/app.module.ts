import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { SettingsFormComponent } from './components/settings-form/settings-form.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

import { SidebarService } from './services/sidebar.service';
import { SettingsService } from './services/settings.service';

import { SidebarMenuItemModel } from './models/sidebar-menu-item.model';

import { ContainersModule } from './modules/containers/containers.module';
import { DashboardModule } from './modules/dashboard/dashboard.module';
import { ImagesModule } from './modules/images/images.module';
import { NetworksModule } from './modules/networks/networks.module';
import { VolumesModule } from './modules/volumes/volumes.module';

const routes: Routes = [
  { path: 'settings', component: SettingsFormComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    NotFoundComponent,
    SettingsFormComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),

    ContainersModule,
    DashboardModule,
    ImagesModule,
    NetworksModule,
    VolumesModule,
  ],
  providers: [
    SidebarService,
    SettingsService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private sidebarService: SidebarService) {
    this.sidebarService.registerMenuItem({
      title: 'Settings',
      routerLink: 'settings',
      order: 50,
    } as SidebarMenuItemModel);
  }
}
