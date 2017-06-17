import { Component } from '@angular/core';

import { ImagesService } from '../../services/images.service';
import { ImageModel } from '../../models/image.model';
import { ImagesListFilterDangling, ImagesListFilterModel } from '../../models/images-list-filter.model';
import { ImagesListParamsModel } from '../../models/images-list-params.model';
import { NotifyService } from '../../../../services/notify.service';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.scss']
})
export class ImagesComponent {

  items: Array<ImageModel> = [];

  constructor(private imagesService: ImagesService, private notifyService: NotifyService) { }

  onChangeFilter(filterModel: ImagesListFilterModel): void {
    const params = new ImagesListParamsModel();
    const filters = {};
    const dangling: ImagesListFilterDangling = filterModel.dangling;

    params.all = filterModel.showAll;

    if (filterModel.reference) {
      filters['reference'] = [filterModel.reference];
    }

    if (dangling === ImagesListFilterDangling.YES) {
      filters['dangling'] = ['true'];
    } else if (dangling === ImagesListFilterDangling.NO) {
      filters['dangling'] = ['false'];
    }

    if (Object.keys(filters).length !== 0) {
      params.filters = JSON.stringify(filters);
    }

    this.imagesService.getImages(params).subscribe(this.updateItems.bind(this));
  }

  onDeleteImage(item: ImageModel) {
    this.removeImage(item, false);
  }

  onForceDeleteImage(item: ImageModel) {
    this.removeImage(item, true);
  }

  private updateItems(items: Array<ImageModel>): void {
    this.items = items;
  }

  private removeImage(item: ImageModel, force: boolean): void {
    this.imagesService.removeImage(item.Id, {force}).subscribe((data) => {
      for (let i = 0; i < data.length; i++) {
        if (data[i].hasOwnProperty('Untagged')) {
          this.notifyService.success(`Untagged image ${data[i].Untagged}`);
        } else if (data[i].hasOwnProperty('Deleted')) {
          this.notifyService.success(`Deleted image ${data[i].Deleted}`);
        } else {
          console.warn(`Unknown data item ${JSON.stringify(data[i])}`);
        }
      }

      const index = this.items.indexOf(item);

      if (index !== -1) {
        this.items.splice(index, 1);
      }
    });
  }
}
