import { Component, OnInit } from '@angular/core';

import { ImagesService } from '../../services/images.service';
import { ImageModel } from '../../models/image.model';
import { FILTER_DANGLING, ImagesListFilterModel } from '../../models/images-list-filter.model';
import { ImagesListParamsModel } from '../../models/images-list-params.model';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.scss']
})
export class ImagesComponent implements OnInit {

  items: Array<ImageModel> = [];

  constructor(private imagesService: ImagesService) { }

  ngOnInit() {
    this.imagesService.getImages().subscribe(this.updateItems.bind(this));
  }

  onChangeFilter(filterModel: ImagesListFilterModel): void {
    const params = new ImagesListParamsModel();
    const filters = {};

    params.all = filterModel.showAll;

    if (filterModel.reference) {
      filters['reference'] = [filterModel.reference];
    }

    // noinspection TsLint
    if (filterModel.dangling == FILTER_DANGLING.YES) {
      filters['dangling'] = ['true'];
    }

    // noinspection TsLint
    if (filterModel.dangling == FILTER_DANGLING.NO) {
      filters['dangling'] = ['false'];
    }

    if (Object.keys(filters).length !== 0) {
      params.filters = JSON.stringify(filters);
    }

    this.imagesService.getImages(params).subscribe(this.updateItems.bind(this));
  }

  private updateItems(items: Array<ImageModel>): void {
    this.items = items;
  }
}
