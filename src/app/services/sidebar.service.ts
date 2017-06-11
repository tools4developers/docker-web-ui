import { Injectable } from '@angular/core';
import { SidebarMenuItemModel } from '../models/sidebar-menu-item.model';

@Injectable()
export class SidebarService {

  private menuItems: Array<SidebarMenuItemModel> = [];

  /**
   * Register new menu item
   *
   * @param item
   */
  public registerMenuItem(item: SidebarMenuItemModel): void {
    this.menuItems.push(item);
  }

  /**
   * Get menu items in sorted form
   *
   * @returns {Array<SidebarMenuItemModel>}
   */
  public getMenuItemsSorted(): Array<SidebarMenuItemModel> {
    return this.menuItems
      .sort((a: SidebarMenuItemModel, b: SidebarMenuItemModel) => (a.order - b.order));
  }
}
