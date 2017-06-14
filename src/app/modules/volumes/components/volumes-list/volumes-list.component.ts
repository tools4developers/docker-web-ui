import { Component, Input } from '@angular/core';
import { VolumeModel } from '../../models/volume.model';

@Component({
  selector: 'app-volumes-list',
  templateUrl: './volumes-list.component.html',
  styleUrls: ['./volumes-list.component.scss']
})
export class VolumesListComponent {

  @Input() items: VolumeModel[];

  constructor() { }

}
