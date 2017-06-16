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

}
