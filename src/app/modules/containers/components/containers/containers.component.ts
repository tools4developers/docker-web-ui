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

  constructor(private containersService: ContainersService) { }

  onChangeFilter(filterModel: ContainersListFilterModel): void {
    const params = new ContainersListParamsModel();

    params.all = filterModel.showAll;

    this.containersService.getContainers(params).subscribe(this.updateItems.bind(this));
  }

  private updateItems(items: Array<ContainerModel>): void {
    this.items = items;
  }
}
