import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ContainerModel, ExposedPortModel } from '../../models/container.model';

@Component({
  selector: 'app-containers-list',
  templateUrl: './containers-list.component.html',
  styleUrls: ['./containers-list.component.scss']
})
export class ContainersListComponent {

  @Input() items: Array<ContainerModel>;
  @Output() startContainer = new EventEmitter<ContainerModel>();
  @Output() stopContainer = new EventEmitter<ContainerModel>();

  constructor() { }

  onStart(item: ContainerModel) {
    this.startContainer.emit(item);
  }

  onStop(item: ContainerModel) {
    if (confirm('Are you sure you want to stop this container?')) {
      this.stopContainer.emit(item);
    }
  }

  // TODO: Move in pipe
  getIdTruncated(item: ContainerModel): string {
    return item.Id.substr(0, 12);
  }

  // TODO: Move in pipe
  getCreatedAsString(item: ContainerModel): string {
    const date = new Date(item.Created * 1000);

    return date.toDateString();
  }

  // TODO: Move in pipe
  renderPortItem(port: ExposedPortModel): string {
    let result = '';

    if (port.hasOwnProperty('IP')) {
      result += port.IP + ':';
    }

    if (port.hasOwnProperty('PublicPort')) {
      result += port.PublicPort + '->';
    }

    result += port.PrivatePort + port.Type;

    return result;
  }
}
