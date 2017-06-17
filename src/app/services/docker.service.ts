import { Injectable } from '@angular/core';
import { Http, Response, ResponseType } from '@angular/http';

import { NotifyService } from './notify.service';

@Injectable()
export abstract class DockerService {

  public static readonly API_END_POINT = '/apis/';

  constructor(protected http: Http, protected notifyService: NotifyService) { }

  protected handleError(error: Response): void {
    let message: string;

    if (error instanceof SyntaxError) {
      message = 'Communication error';
    } else if (error instanceof Response) {
      if (error.type === ResponseType.Error) {
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
    }

    this.notifyService.error(message);

    throw new Error(message);
  }
}
