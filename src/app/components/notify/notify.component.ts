import { Component, OnInit } from '@angular/core';

import { NotifyService } from '../../services/notify.service';

import { NotifyModel } from '../../models/notify.model';

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

  public onClose(notify: NotifyModel): void {
    const index = this.notifyStack.indexOf(notify);

    if (index !== -1) {
      this.notifyStack.splice(index, 1);
    }
  }
}
