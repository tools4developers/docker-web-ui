import { Component, Input } from '@angular/core';

import { ImageModel } from '../../models/image.model';

@Component({
  selector: 'app-images-list',
  templateUrl: './images-list.component.html',
  styleUrls: ['./images-list.component.scss']
})
export class ImagesListComponent {

  @Input() items: ImageModel[];

  constructor() { }

  getIdTruncated(item: ImageModel): string {
    return item.Id.substr(7, 12);
  }

  getRepository(item: ImageModel): string {
    if (item.RepoTags && item.RepoTags.length !== 0) {
      const repoTag = item.RepoTags[0].split(':');

      return repoTag.length > 1 ? repoTag[0] : '';
    }

    return '';
  }

  getTag(item: ImageModel): string {
    if (item.RepoTags && item.RepoTags.length !== 0) {
      const repoTag = item.RepoTags[0].split(':');

      return repoTag.length > 1 ? repoTag[1] : '';
    }
  }

  getCreatedAsString(item: ImageModel): string {
    const date = new Date(item.Created * 1000);

    return date.toDateString();
  }

  getSizeAsString(item: ImageModel): string {
    return this.humanFileSize(item.Size, true);
  }

  /**
   * TODO: make pipe
   * @param bytes
   * @param si
   * @returns {string}
   */
  private humanFileSize(bytes: number, si?: boolean): string {
    const thresh = si ? 1000 : 1024;
    if (Math.abs(bytes) < thresh) {
      return bytes + ' B';
    }
    const units = si
      ? ['kB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
      : ['KiB', 'MiB', 'GiB', 'TiB', 'PiB', 'EiB', 'ZiB', 'YiB'];
    let u = -1;
    do {
      bytes /= thresh;
      ++u;
    } while (Math.abs(bytes) >= thresh && u < units.length - 1);
    return bytes.toFixed(1) + ' ' + units[u];
  }
}
