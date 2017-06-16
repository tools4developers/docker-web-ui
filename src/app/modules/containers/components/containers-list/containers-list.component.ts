import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ContainerModel } from '../../models/container.model';

@Component({
  selector: 'app-containers-list',
  templateUrl: './containers-list.component.html',
  styleUrls: ['./containers-list.component.scss']
})
export class ContainersListComponent {

  @Input() items: Array<ContainerModel>;
  @Output() startContainer = new EventEmitter<ContainerModel>();
  @Output() stopContainer = new EventEmitter<ContainerModel>();
  @Output() removeContainer = new EventEmitter<ContainerModel>();
  @Output() forceRemoveContainer = new EventEmitter<ContainerModel>();

  constructor() { }

  onStart(item: ContainerModel) {
    this.startContainer.emit(item);
  }

  onStop(item: ContainerModel) {
    if (confirm('Are you sure you want to stop this container?')) {
      this.stopContainer.emit(item);
    }
  }

  onRemove(item: ContainerModel) {
    if (confirm('Are you sure you want to remove this container?')) {
      this.removeContainer.emit(item);
    }
  }

  onForceRemove(item: ContainerModel) {
    if (confirm('Are you sure you want to force remove this container?')) {
      this.forceRemoveContainer.emit(item);
    }
  }
}
