import { Component, EventEmitter, Input, Output } from '@angular/core';

import { NetworkModel } from '../../models/network.model';

@Component({
  selector: 'app-networks-list',
  templateUrl: './networks-list.component.html',
  styleUrls: ['./networks-list.component.scss']
})
export class NetworksListComponent {

  @Input() items: NetworkModel[];
  @Output() removeNetwork = new EventEmitter<NetworkModel>();

  constructor() { }

  onRemove(item: NetworkModel): void {
    if (confirm('Are you sure you want to delete this network?')) {
      this.removeNetwork.emit(item);
    }
  }

  // TODO: Move in pipe
  getIdTruncated(item: NetworkModel): string {
    return item.Id.substr(0, 12);
  }
}
