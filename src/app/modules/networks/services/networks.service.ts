import { Injectable } from '@angular/core';
import { Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { DockerService } from '../../../services/docker.service';

import { NetworksListParamsModel } from '../models/networks-list-params.model';
import { NetworkModel } from '../models/network.model';
import { NetworksPruneParamsModel } from '../models/networks-prune-params.model';
import { NetworksPruneResponseModel } from '../models/networks-prune-response.model';

@Injectable()
export class NetworksService extends DockerService {

  /**
   * List networks
   *
   * @param params
   */
  public getNetworks(params?: NetworksListParamsModel): Observable<Array<NetworkModel>> {
    const url = `${NetworksService.API_END_POINT}networks`;
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
    const url = `${NetworksService.API_END_POINT}networks/${id}`;

    return this.http.delete(url)
      .map((response: Response) => response.json())
      .catch(this.handleError.bind(this));
  }

  /**
   * Delete unused networks
   *
   * @param params
   */
  public pruneNetworks(params?: NetworksPruneParamsModel): Observable<NetworksPruneResponseModel> {
    const url = `${NetworksService.API_END_POINT}networks/prune`;
    const search = params || {};

    return this.http.post(url, {search})
      .map((response: Response) => response.json() as Array<NetworksPruneResponseModel>)
      .catch(this.handleError.bind(this));
  }
}
