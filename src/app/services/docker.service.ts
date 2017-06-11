import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { SettingsService } from './settings.service';

@Injectable()
export abstract class DockerService {

  constructor(private http: Http, private settingsService: SettingsService) { }

  /**
   * Get docker base url
   *
   * @returns {string}
   */
  protected getDockerBaseUrl(): string {
    const settingsModel = this.settingsService.model;
    const protocol = settingsModel.isHttps ? 'https' : 'http';

    return `${protocol}://${settingsModel.dockerHost}:${settingsModel.dockerPort}/`;
  }
}
