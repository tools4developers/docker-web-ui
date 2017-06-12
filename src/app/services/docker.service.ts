import { Injectable } from '@angular/core';
import { Http, Response, ResponseType } from '@angular/http';

import { SettingsService } from './settings.service';
import { NotifyService } from './notify.service';

@Injectable()
export abstract class DockerService {

  constructor(protected http: Http, private settingsService: SettingsService, private notifyService: NotifyService) { }

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

  protected handleError(error: Response): void {
    let message: string;

    // noinspection TsLint
    if (error.type == ResponseType.Error) {
      message = 'Network error';
    } else {
      try {
        const data = error.json();

        if (data && data.message) {
          message = data.message;
        } else {
          message = error.toString();
        }
      } catch (e) {
        if (error.status) {
          message = error.statusText;
        } else {
          message = error.toString();
        }
      }
    }

    this.notifyService.error(message);

    throw new Error(message);
  }
}
