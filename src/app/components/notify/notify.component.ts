import { Component, OnInit } from '@angular/core';

import { NotifyService } from '../../services/notify.service';

import { NOTIFY_MODEL_TYPE, NotifyModel } from '../../models/notify.model';

@Component({
  selector: 'app-notify',
  templateUrl: './notify.component.html',
  styleUrls: ['./notify.component.scss']
})
export class NotifyComponent implements OnInit {

  // FIXME: Limit notifications
  notifyStack: Array<NotifyModel> = [];

  constructor(private notifyService: NotifyService) {}

  ngOnInit() {
    this.notifyService.listenNotify((notify: NotifyModel) => {
      this.notifyStack.push(notify);

      const index = this.notifyStack.indexOf(notify);

      if (index !== -1) {
        setTimeout(() => {
          this.onClose(index);
        }, 2000);
      }
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

  public onClose(index: number): void {
    this.notifyStack.splice(index, 1);
  }
}
