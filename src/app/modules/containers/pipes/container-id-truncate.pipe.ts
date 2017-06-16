import { Pipe, PipeTransform } from '@angular/core';
import { ContainerModel } from '../models/container.model';

@Pipe({
  name: 'containerIdTruncated'
})
export class ContainerIdTruncatePipe implements PipeTransform {

  transform(container: ContainerModel, args?: any): string {
    return container.Id.substr(0, 12);
  }

}
