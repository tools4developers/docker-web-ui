import { Component, OnInit } from '@angular/core';
import { SystemInfoModel } from '../../models/system-info.model';
import { DashboardService } from '../../services/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  model: SystemInfoModel;

  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {
    this.dashboardService.getInfo().subscribe((model: SystemInfoModel) => {
      this.model = model;
    });
  }

}
