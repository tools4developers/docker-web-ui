export enum ImagesListFilterDangling {
  NONE,
  NO,
  YES,
}

export class ImagesListFilterModel {
  showAll: boolean;
  reference: string;
  dangling: ImagesListFilterDangling;

  constructor() {
    this.showAll = false;
    this.reference = '';
    this.dangling = ImagesListFilterDangling.NONE;
  }
}

