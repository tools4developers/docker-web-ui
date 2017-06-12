import { Component, Input, OnInit } from '@angular/core';
import { ImageModel } from '../../models/image.model';

@Component({
  selector: 'app-images-list',
  templateUrl: './images-list.component.html',
  styleUrls: ['./images-list.component.scss']
})
export class ImagesListComponent implements OnInit {

  @Input() items: ImageModel[];

  constructor() { }

  ngOnInit() {
  }

}
