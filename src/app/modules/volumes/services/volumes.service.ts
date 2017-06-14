import { Injectable } from '@angular/core';
import { Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { DockerService } from '../../../services/docker.service';

import { VolumeModel } from '../models/volume.model';
import { VolumesListParamsModel } from '../models/volumes-list-params.model';
import { VolumesListResponseModel } from '../models/volumes-list-response.model';

@Injectable()
export class VolumesService extends DockerService {

  /**
   * List volumes
   *
   * @param params
   */
  public getVolumes(params?: VolumesListParamsModel): Observable<Array<VolumeModel>> {
    const url = `${this.getDockerBaseUrl()}volumes`;
    const search = params || {};

    return this.http.get(url, params)
      .map((response: Response) => response.json() as VolumesListResponseModel)
      .map((response: VolumesListResponseModel) => {
        if (response.Warnings && response.Warnings.length !== 0) {
          for (let i = 0; i < response.Warnings.length; i++) {
            this.notifyService.warning(response.Warnings[i]);
          }
        }

        return response.Volumes;
      }).catch(this.handleError.bind(this));
  }

}
