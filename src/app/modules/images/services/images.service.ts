import { Injectable } from '@angular/core';
import { Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { DockerService } from '../../../services/docker.service';

import { ImageModel } from '../models/image.model';
import { ImagesListParamsModel } from '../models/images-list-params.model';

@Injectable()
export class ImagesService extends DockerService {

  /**
   * Get list of images
   *
   * Returns a list of images on the server. Note that it uses a different,
   * smaller representation of an image than inspecting a single image.
   *
   * @param params
   * @returns {any}
   */
  public getImages(params?: ImagesListParamsModel): Observable<Array<ImageModel>> {
    const url = `${this.getDockerBaseUrl()}images/json`;
    const search = params || {};

    return this.http.get(url, {search})
      .map((response: Response) => response.json() as Array<ImageModel>)
      .catch(this.handleError.bind(this));
  }
}
