import { Injectable } from '@angular/core';

import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription';

import { NOTIFY_MODEL_TYPE, NotifyModel } from '../models/notify.model';

@Injectable()
export class NotifyService {

  private notifyNew = new Subject<NotifyModel>();

  private notifyNew$ = this.notifyNew.asObservable();

  constructor() { }

  /**
   * New application notification
   *
   * @param notify
   */
  public newNotify(notify: NotifyModel): void {
    this.notifyNew.next(notify);
  }

  /**
   * Listen app notifications
   *
   * @param listener
   * @returns {Subscription}
   */
  public listenNotify(listener: (notify: NotifyModel) => void): Subscription {
    return this.notifyNew$.subscribe(listener);
  }

  /**
   * Send success notify
   *
   * @param message
   * @param closable
   */
  public success(message: string, closable?: boolean): void {
    this.newNotify({
      type: NOTIFY_MODEL_TYPE.SUCCESS,
      message: message,
      closable: closable || true
    });
  }

  /**
   * Send info notify
   *
   * @param message
   * @param closable
   */
  public info(message: string, closable?: boolean): void {
    this.newNotify({
      type: NOTIFY_MODEL_TYPE.INFO,
      message: message,
      closable: closable || true
    });
  }

  /**
   * Send warning notify
   *
   * @param message
   * @param closable
   */
  public warning(message: string, closable?: boolean): void {
    this.newNotify({
      type: NOTIFY_MODEL_TYPE.WARNING,
      message: message,
      closable: closable || true
    });
  }

  /**
   * Send error notify
   *
   * @param message
   * @param closable
   */
  public error(message: string, closable?: boolean): void {
    this.newNotify({
      type: NOTIFY_MODEL_TYPE.ERROR,
      message: message,
      closable: closable || true
    });
  }
}
