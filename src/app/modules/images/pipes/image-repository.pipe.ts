import { Pipe, PipeTransform } from '@angular/core';
import { ImageModel } from '../models/image.model';

@Pipe({
  name: 'imageRepository'
})
export class ImageRepositoryPipe implements PipeTransform {

  transform(image: ImageModel, args?: any): string {
    if (image.RepoTags && image.RepoTags.length !== 0) {
      const repoTag = image.RepoTags[0].split(':');

      return repoTag.length > 1 ? repoTag[0] : '';
    }

    return '';
  }

}
