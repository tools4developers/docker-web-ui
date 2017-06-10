import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LayoutComponent } from './components/layout/layout.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

import { ImagesModule } from './modules/images/images.module';
import { ContainersModule } from './modules/containers/containers.module';
import { NetworksModule } from './modules/networks/networks.module';
import { VolumesModule } from './modules/volumes/volumes.module';
import { SettingsModule } from './modules/settings/settings.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LayoutComponent,
    SidebarComponent,
  ],
  imports: [
    BrowserModule,
    ContainersModule,
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
