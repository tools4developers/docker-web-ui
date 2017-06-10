import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { ImagesModule } from './modules/images/images.module';
import { ContainersModule } from './modules/containers/containers.module';
import { NetworksModule } from './modules/networks/networks.module';
import { VolumesModule } from './modules/volumes/volumes.module';
import { SettingsModule } from './modules/settings/settings.module';

@NgModule({
  declarations: [
    AppComponent
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
