import { SidebarService } from './sidebar.service';
import { SidebarMenuItemModel } from '../models/sidebar-menu-item.model';

describe('SidebarService', () => {
  let service: SidebarService;

  beforeEach(() => {
    service = new SidebarService();
  });

  it('getMobileMenuCollapseStatus() default true', () => {
    expect(service.getMobileMenuCollapseStatus()).toBeTruthy();
  });

  it('mobileMenuCollapseToggle() x1 should be false', () => {
    service.mobileMenuCollapseToggle();

    expect(service.getMobileMenuCollapseStatus()).toBeFalsy();
  });

  it('mobileMenuCollapseToggle() x2 should be true', () => {
    service.mobileMenuCollapseToggle();
    service.mobileMenuCollapseToggle();

    expect(service.getMobileMenuCollapseStatus()).toBeTruthy();
  });

  it('registerMenuItem() should add new menu item', () => {
    const item = new SidebarMenuItemModel();

    item.title = 'Test item';
    item.routerLink = '/test-item';
    item.order = 0;

    service.registerMenuItem(item);

    const itemsSorted = service.getMenuItemsSorted();

    expect(itemsSorted.indexOf(item)).toEqual(0);
  });

  it('getMenuItemsSorted() return sorted menu items', () => {
    const item2 = {
      title: 'Item 2',
      routerLink: '/item-2',
      order: 10
    } as SidebarMenuItemModel;
    const item3 = {
      title: 'Item 3',
      routerLink: '/item-3',
      order: 20
    } as SidebarMenuItemModel;
    const item1 = {
      title: 'Item 1',
      routerLink: '/item-1',
      order: 0
    } as SidebarMenuItemModel;

    service.registerMenuItem(item1);
    service.registerMenuItem(item2);
    service.registerMenuItem(item3);

    const itemsSorted = service.getMenuItemsSorted();

    expect(itemsSorted.indexOf(item1)).toEqual(0);
    expect(itemsSorted.indexOf(item2)).toEqual(1);
    expect(itemsSorted.indexOf(item3)).toEqual(2);
  });
});
