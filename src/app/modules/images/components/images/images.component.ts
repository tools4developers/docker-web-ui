import { Component, OnInit } from '@angular/core';

import { ImagesService } from '../../services/images.service';
import { ImageModel } from '../../models/image.model';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.scss']
})
export class ImagesComponent implements OnInit {

  items: Array<ImageModel> = [];

  constructor(private imagesService: ImagesService) { }

  ngOnInit() {
    this.imagesService.getImages().subscribe((items: Array<ImageModel>) => this.items = items);
  }

}
