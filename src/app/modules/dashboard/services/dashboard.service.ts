import { Injectable } from '@angular/core';
import { Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { DockerService } from '../../../services/docker.service';

import { SystemInfoModel } from '../models/system-info.model';

@Injectable()
export class DashboardService extends DockerService {

  /**
   * Get system information
   *
   * @return {Observable<SystemInfoModel>}
   */
  public getInfo(): Observable<SystemInfoModel> {
    const url = `${DashboardService.API_END_POINT}system/info`;

    return this.http.get(url)
      .map((response: Response) => response.json() as SystemInfoModel)
      .catch(this.handleError.bind(this));
  }

}
