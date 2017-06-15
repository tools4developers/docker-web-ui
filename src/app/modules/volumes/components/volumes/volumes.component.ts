import { Component, OnInit } from '@angular/core';

import { VolumesService } from '../../services/volumes.service';

import { VolumeModel } from '../../models/volume.model';

@Component({
  selector: 'app-volumes',
  templateUrl: './volumes.component.html',
  styleUrls: ['./volumes.component.scss']
})
export class VolumesComponent implements OnInit {

  items: Array<VolumeModel>;

  constructor(private volumesService: VolumesService) { }

  ngOnInit() {
    this.volumesService.getVolumes().subscribe((items: Array<VolumeModel>) => {
      this.items = items
    });
  }

  onRemoveVolume(item: VolumeModel): void {
    this.volumesService.removeVolume(item.Name).subscribe(() => {
      const index = this.items.indexOf(item);

      if (index !== -1) {
        this.items.splice(index, 1);
      }
    })
  }

}
