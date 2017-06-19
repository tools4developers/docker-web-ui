export class VolumesPruneResponseModel {
  /**
   * Volumes that were deleted
   */
  VolumesDeleted: Array<string>;

  /**
   * Disk space reclaimed in bytes.
   */
  SpaceReclaimed: number;
}
