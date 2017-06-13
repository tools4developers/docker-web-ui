import { Component, OnInit } from '@angular/core';
import { ContainerModel } from '../../models/container.model';
import { ContainersService } from '../../services/containers.service';

@Component({
  selector: 'app-containers',
  templateUrl: './containers.component.html',
  styleUrls: ['./containers.component.scss']
})
export class ContainersComponent implements OnInit {

  items: Array<ContainerModel> = [];

  constructor(private containersService: ContainersService) { }

  ngOnInit() {
    this.containersService.getContainers().subscribe(this.updateItems.bind(this));
  }

  private updateItems(items: Array<ContainerModel>): void {
    this.items = items;
  }
}
