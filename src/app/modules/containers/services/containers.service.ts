import { Injectable } from '@angular/core';
import { Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { DockerService } from '../../../services/docker.service';

import { ContainersListParamsModel } from '../models/containers-list-params.model';
import { ContainerModel } from '../models/container.model';

@Injectable()
export class ContainersService extends DockerService {

  /**
   * Stop a container
   *
   * @param id
   * @param params
   */
  public stopContainer(id: string, params?: {}): Observable<any> {
    const url = `${this.getDockerBaseUrl()}containers/${id}/stop`;
    const search = params || {};

    return this.http.post(url, {}, {search})
      .map((response: Response) => response.json())
      .catch(this.handleError.bind(this));
  }

  /**
   * Get list of containers
   *
   * Returns a list of containers on the server.
   *
   * @param params
   * @return {any}
   */
  public getContainers(params?: ContainersListParamsModel): Observable<Array<ContainerModel>> {
    const url = `${this.getDockerBaseUrl()}containers/json`;
    const search = params || {};

    return this.http.get(url, {search})
      .map((response: Response) => response.json() as Array<ContainerModel>)
      .catch(this.handleError.bind(this));
  }
}
