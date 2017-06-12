export enum FILTER_DANGLING {
  NONE,
  NO,
  YES,
}

export class ImagesListFilterModel {
  showAll: boolean;
  reference: string;
  dangling: FILTER_DANGLING;

  constructor() {
    this.showAll = false;
    this.reference = '';
    this.dangling = FILTER_DANGLING.NONE;
  }
}

