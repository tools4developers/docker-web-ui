import { Component, OnInit } from '@angular/core';
import { NetworksService } from '../../services/networks.service';
import { NetworkModel } from '../../models/network.model';

@Component({
  selector: 'app-networks',
  templateUrl: './networks.component.html',
  styleUrls: ['./networks.component.scss']
})
export class NetworksComponent implements OnInit {

  items: Array<NetworkModel>;

  constructor(private networksService: NetworksService) { }

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

}
