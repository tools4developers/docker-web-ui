export enum NOTIFY_MODEL_TYPE {
  SUCCESS,
  INFO,
  WARNING,
  ERROR
}

export class NotifyModel {
  public type: NOTIFY_MODEL_TYPE;
  public message: string;
  public closable? = true;
}
