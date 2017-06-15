import { Injectable } from '@angular/core';
import { Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { DockerService } from '../../../services/docker.service';

import { NetworksListParams } from '../models/networks-list-params.model';
import { NetworkModel } from '../models/network.model';

@Injectable()
export class NetworksService extends DockerService {

  /**
   * List networks
   *
   * @param params
   */
  public getNetworks(params?: NetworksListParams): Observable<Array<NetworkModel>> {
    const url = `${this.getDockerBaseUrl()}networks`;
    const search = params || {};

    return this.http.get(url, {search})
      .map((response: Response) => response.json() as Array<NetworkModel>)
      .catch(this.handleError.bind(this));
  }

  /**
   * Remove network by ID
   *
   * @param id
   */
  public removeNetwork(id: string): Observable<any> {
    const url = `${this.getDockerBaseUrl()}networks/${id}`;

    return this.http.delete(url)
      .map((response: Response) => response.json())
      .catch(this.handleError.bind(this));
  }
}
