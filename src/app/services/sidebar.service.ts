import { Injectable } from '@angular/core';
import { SidebarMenuItemModel } from '../models/sidebar-menu-item.model';

@Injectable()
export class SidebarService {

  private menuItems: Array<SidebarMenuItemModel> = [];
  private mobileMenuCollapsed = true;

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

  /**
   * Toggle mobile menu collapse status
   */
  public mobileMenuCollapseToggle(): void {
    this.mobileMenuCollapsed = !this.mobileMenuCollapsed;
  }

  /**
   * Get mobile menu collapse status
   *
   * @returns {boolean}
   */
  public getMobileMenuCollapseStatus(): boolean {
    return this.mobileMenuCollapsed;
  }
}
