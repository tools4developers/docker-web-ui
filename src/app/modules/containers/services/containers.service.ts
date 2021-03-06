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
   * Start a container
   *
   * @param id
   * @param params
   */
  public startContainer(id: string, params?: {}): Observable<any> {
    const url = `${ContainersService.API_END_POINT}containers/${id}/start`;
    const search = params || {};

    return this.http.post(url, {}, {search})
      .map((response: Response) => response.json())
      .catch(this.handleError.bind(this));
  }

  /**
   * Stop a container
   *
   * @param id
   * @param params
   */
  public stopContainer(id: string, params?: {}): Observable<any> {
    const url = `${ContainersService.API_END_POINT}containers/${id}/stop`;
    const search = params || {};

    return this.http.post(url, {}, {search})
      .map((response: Response) => response.json())
      .catch(this.handleError.bind(this));
  }

  /**
   * Remove a container
   *
   * @param id
   * @param params
   */
  public removeContainer(id: string, params?: {}): Observable<any> {
    const url = `${ContainersService.API_END_POINT}containers/${id}`;
    const search = params || {};

    return this.http.delete(url, {search})
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
    const url = `${ContainersService.API_END_POINT}containers`;
    const search = params || {};

    return this.http.get(url, {search})
      .map((response: Response) => response.json() as Array<ContainerModel>)
      .catch(this.handleError.bind(this));
  }
}
