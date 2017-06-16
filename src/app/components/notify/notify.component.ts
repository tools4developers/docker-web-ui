import { Component, OnInit } from '@angular/core';

import { NotifyService } from '../../services/notify.service';

import { NOTIFY_MODEL_TYPE, NotifyModel } from '../../models/notify.model';

@Component({
  selector: 'app-notify',
  templateUrl: './notify.component.html',
  styleUrls: ['./notify.component.scss']
})
export class NotifyComponent implements OnInit {

  public static readonly TIME_TO_CLOSE = 5000;

  notifyStack: Array<NotifyModel> = [];

  constructor(private notifyService: NotifyService) {}

  ngOnInit() {
    this.notifyService.listenNotify((notify: NotifyModel) => {
      this.notifyStack.push(notify);

      setTimeout(() => {
        this.onClose(notify);
      }, NotifyComponent.TIME_TO_CLOSE);
    });
  }

  // TODO: Refactoring, create one method for detect CSS class
  public isSuccess(notify: NotifyModel): boolean {
    return notify.type === NOTIFY_MODEL_TYPE.SUCCESS;
  }

  // TODO: Refactoring, create one method for detect CSS class
  public isDanger(notify: NotifyModel): boolean {
    return notify.type === NOTIFY_MODEL_TYPE.ERROR;
  }

  // TODO: Refactoring, create one method for detect CSS class
  public isWarning(notify: NotifyModel): boolean {
    return notify.type === NOTIFY_MODEL_TYPE.WARNING;
  }

  // TODO: Refactoring, create one method for detect CSS class
  public isInfo(notify: NotifyModel): boolean {
    return notify.type === NOTIFY_MODEL_TYPE.INFO;
  }

  public onClose(notify: NotifyModel): void {
    const index = this.notifyStack.indexOf(notify);

    if (index !== -1) {
      this.notifyStack.splice(index, 1);
    }
  }
}
