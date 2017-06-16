import { Pipe, PipeTransform } from '@angular/core';
import { ImageModel } from '../models/image.model';

@Pipe({
  name: 'imageIdTruncate'
})
export class ImageIdTruncatePipe implements PipeTransform {

  transform(image: ImageModel, args?: any): string {
    return image.Id.substr(7, 12);
  }

}
