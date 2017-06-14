import { VolumeModel } from './volume.model';

export class VolumesListResponseModel {
  Volumes: Array<VolumeModel>;
  Warnings: Array<string>;
}
