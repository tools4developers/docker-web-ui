import { Component } from '@angular/core';
import { ContainerModel } from '../../models/container.model';
import { ContainersService } from '../../services/containers.service';
import { ContainersListFilterModel } from '../../models/containers-list-filter.model';
import { ContainersListParamsModel } from '../../models/containers-list-params.model';

@Component({
  selector: 'app-containers',
  templateUrl: './containers.component.html',
  styleUrls: ['./containers.component.scss']
})
export class ContainersComponent {

  items: Array<ContainerModel> = [];

  private listParams: ContainersListParamsModel;

  constructor(private containersService: ContainersService) { }

  onChangeFilter(filterModel: ContainersListFilterModel): void {
    this.listParams = new ContainersListParamsModel();
    this.listParams.all = filterModel.showAll;

    this.updateItems();
  }

  onStopContainer(item: ContainerModel) {
    this.containersService.stopContainer(item.Id).subscribe(() => {
      // TODO: update stoped item and replace in items list
      this.updateItems();
    });
  }

  private updateItems(): void {
    this.containersService.getContainers(this.listParams).subscribe((items: Array<ContainerModel>) => {
      this.items = items;
    });
  }
}
