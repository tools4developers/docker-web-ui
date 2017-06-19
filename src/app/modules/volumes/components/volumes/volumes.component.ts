import { Component, OnInit } from '@angular/core';

import { VolumesService } from '../../services/volumes.service';

import { VolumeModel } from '../../models/volume.model';
import { VolumesPruneResponseModel } from '../../models/volumes-prune-response.model';
import { NotifyService } from '../../../../services/notify.service';
import { HumanizeFileSizePipe } from '../../../common/pipes/humanize-file-size.pipe';

@Component({
  selector: 'app-volumes',
  templateUrl: './volumes.component.html',
  styleUrls: ['./volumes.component.scss']
})
export class VolumesComponent implements OnInit {

  items: Array<VolumeModel>;

  constructor(private volumesService: VolumesService, private notifyService: NotifyService) { }

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

  onPruneVolumes() {
    if (confirm('Are you sure you want to delete all unused volumes?')) {
      this.volumesService.pruneVolumes().subscribe((response: VolumesPruneResponseModel) => {
        if (response.VolumesDeleted) {
          for (let i = 0; i < response.VolumesDeleted.length; i++) {
            const removedItem = this.items.find((item: VolumeModel) => item.Name === response.VolumesDeleted[i]);

            if (removedItem) {
              const removedIndex = this.items.indexOf(removedItem);

              if (removedIndex !== -1) {
                this.items.splice(removedIndex, 1);
              }
            }

            this.notifyService.success(`Deleted network ${response.VolumesDeleted[i]}`);
          }

          if (response.SpaceReclaimed) {
            const humanizeFileSizePipe = new HumanizeFileSizePipe();
            const humanizeFileSize = humanizeFileSizePipe.transform(response.SpaceReclaimed, false);

            this.notifyService.info(`${humanizeFileSize} space reclaimed`);
          }
        }
      });
    }
  }
}
