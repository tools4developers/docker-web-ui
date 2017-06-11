import { Component } from '@angular/core';
import { SidebarService } from './services/sidebar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private sidebarService: SidebarService) {}

  get mobileMenuCollapse(): boolean {
    return this.sidebarService.getMobileMenuCollapseStatus();
  }
}
