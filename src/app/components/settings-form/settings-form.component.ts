import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { SettingsService } from '../../services/settings.service';
import { NotifyService } from '../../services/notify.service';

import { SettingsModel } from '../../models/settings.model';

@Component({
  selector: 'app-settings-form',
  templateUrl: './settings-form.component.html',
  styleUrls: ['./settings-form.component.scss']
})
export class SettingsFormComponent implements OnInit {

  settingsForm: FormGroup;

  constructor(private fb: FormBuilder,
              private settingsService: SettingsService,
              private notifyService: NotifyService) {
    this.createForm();
  }

  ngOnInit() {
    this.settingsForm.setValue(this.settingsService.model);
  }

  onSubmit(): void {
    this.settingsService.model = this.prepareModel();
    this.notifyService.success('Settings saved');
  }

  private prepareModel(): SettingsModel {
    const formModel = this.settingsForm.value;

    return {
      dockerHost: formModel.dockerHost as string,
      dockerPort: formModel.dockerPort as number,
      isHttps: formModel.isHttps as boolean,
    } as SettingsModel;
  }

  private createForm(): void {
    this.settingsForm = this.fb.group({
      dockerHost: ['', Validators.required],
      dockerPort: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
      isHttps: [false, Validators.required],
    });
  }

}
