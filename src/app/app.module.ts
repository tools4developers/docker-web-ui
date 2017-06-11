import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

import { ContainersModule } from './modules/containers/containers.module';
import { DashboardModule } from './modules/dashboard/dashboard.module';
import { ImagesModule } from './modules/images/images.module';
import { NetworksModule } from './modules/networks/networks.module';
import { VolumesModule } from './modules/volumes/volumes.module';
import { SettingsModule } from './modules/settings/settings.module';

const routes: Routes = [
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),

    ContainersModule,
    DashboardModule,
    ImagesModule,
    NetworksModule,
    SettingsModule,
    VolumesModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
