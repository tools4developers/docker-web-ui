import { Component, EventEmitter, Input, Output } from '@angular/core';

import { ImageModel } from '../../models/image.model';

@Component({
  selector: 'app-images-list',
  templateUrl: './images-list.component.html',
  styleUrls: ['./images-list.component.scss']
})
export class ImagesListComponent {

  @Input() items: ImageModel[];
  @Output() deleteImage = new EventEmitter<ImageModel>();
  @Output() forceDeleteImage = new EventEmitter<ImageModel>();

  constructor() { }

  onDelete(item: ImageModel): void {
    if (confirm('Are you sure you want to delete this image?')) {
      this.deleteImage.emit(item);
    }
  }

  onForceDelete(item: ImageModel) {
    if (confirm('Are you sure you want to force delete this image?')) {
      this.forceDeleteImage.emit(item);
    }
  }

  // TODO: Move in pipe
  getIdTruncated(item: ImageModel): string {
    return item.Id.substr(7, 12);
  }

  // TODO: Move in pipe
  getRepository(item: ImageModel): string {
    if (item.RepoTags && item.RepoTags.length !== 0) {
      const repoTag = item.RepoTags[0].split(':');

      return repoTag.length > 1 ? repoTag[0] : '';
    }

    return '';
  }

  // TODO: Move in pipe
  getTag(item: ImageModel): string {
    if (item.RepoTags && item.RepoTags.length !== 0) {
      const repoTag = item.RepoTags[0].split(':');

      return repoTag.length > 1 ? repoTag[1] : '';
    }
  }

  // TODO: Move in pipe
  getCreatedAsString(item: ImageModel): string {
    const date = new Date(item.Created * 1000);

    return date.toDateString();
  }

  // TODO: Move in pipe
  getSizeAsString(item: ImageModel): string {
    return this.humanFileSize(item.Size, true);
  }

  /**
   * TODO: Move in pipe
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
