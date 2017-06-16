import { Pipe, PipeTransform } from '@angular/core';
import { ExposedPortModel } from '../models/container.model';

@Pipe({
  name: 'containerPort'
})
export class ContainerPortPipe implements PipeTransform {

  transform(port: ExposedPortModel, args?: any): string {
    let result = '';

    if (port.hasOwnProperty('IP')) {
      result += port.IP + ':';
    }

    if (port.hasOwnProperty('PublicPort')) {
      result += port.PublicPort + '->';
    }

    result += port.PrivatePort + '/' + port.Type;

    return result;
  }

}
