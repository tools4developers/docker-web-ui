import { SidebarService } from './sidebar.service';

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
});
