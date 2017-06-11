import { Component, Input, OnInit } from '@angular/core';
import { SidebarService } from '../../services/sidebar.service';
import { SidebarMenuItemModel } from '../../models/sidebar-menu-item.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  @Input() items: Array<SidebarMenuItemModel>;

  constructor(private sidebarService: SidebarService) { }

  ngOnInit() {
    this.items = this.sidebarService.getMenuItemsSorted()
  }

}
