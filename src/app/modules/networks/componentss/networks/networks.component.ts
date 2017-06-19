import { Component, OnInit } from '@angular/core';
import { NetworksService } from '../../services/networks.service';
import { NetworkModel } from '../../models/network.model';
import { NetworksPruneResponseModel } from '../../models/networks-prune-response.model';
import { NotifyService } from '../../../../services/notify.service';

@Component({
  selector: 'app-networks',
  templateUrl: './networks.component.html',
  styleUrls: ['./networks.component.scss']
})
export class NetworksComponent implements OnInit {

  items: Array<NetworkModel>;

  constructor(private networksService: NetworksService, private notifyService: NotifyService) { }

  ngOnInit() {
    this.networksService.getNetworks().subscribe((items: Array<NetworkModel>) => {
      this.items = items;
    });
  }

  onRemoveNetwork(item: NetworkModel): void {
    this.networksService.removeNetwork(item.Id).subscribe(() => {
      const index = this.items.indexOf(item);

      if (index !== -1) {
        this.items.splice(index, 1);
      }
    });
  }

  onPruneNetworks() {
    if (confirm('Are you sure you want to delete all unused networks?')) {
      this.networksService.pruneNetworks().subscribe((response: NetworksPruneResponseModel) => {
        if (response.NetworksDeleted) {
          for (let i = 0; i < response.NetworksDeleted.length; i++) {
            const removedItem = this.items.find((item: NetworkModel) => item.Name === response.NetworksDeleted[i]);

            if (removedItem) {
              const removedIndex = this.items.indexOf(removedItem);

              if (removedIndex !== -1) {
                this.items.splice(removedIndex, 1);
              }
            }

            this.notifyService.success(`Deleted network ${response.NetworksDeleted[i]}`);
          }
        }
      });
    }
  }
}
