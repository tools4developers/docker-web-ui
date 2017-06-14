import { Component, Input } from '@angular/core';

import { NetworkModel } from '../../models/network.model';

@Component({
  selector: 'app-networks-list',
  templateUrl: './networks-list.component.html',
  styleUrls: ['./networks-list.component.scss']
})
export class NetworksListComponent {

  @Input() items: NetworkModel[];

  constructor() { }

  // TODO: Move in pipe
  getIdTruncated(item: NetworkModel): string {
    return item.Id.substr(0, 12);
  }
}
