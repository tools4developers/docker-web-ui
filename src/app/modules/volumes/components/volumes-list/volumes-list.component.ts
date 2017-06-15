import { Component, EventEmitter, Input, Output } from '@angular/core';
import { VolumeModel } from '../../models/volume.model';

@Component({
  selector: 'app-volumes-list',
  templateUrl: './volumes-list.component.html',
  styleUrls: ['./volumes-list.component.scss']
})
export class VolumesListComponent {

  @Input() items: VolumeModel[];
  @Output() removeVolume = new EventEmitter<VolumeModel>();

  constructor() { }

  onRemove(item: VolumeModel): void {
    if (confirm('Are you sure you want to force delete this volume?')) {
      this.removeVolume.emit(item);
    }
  }
}
