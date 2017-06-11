import { Injectable } from '@angular/core';
import { SettingsModel } from '../models/settings.model';

@Injectable()
export class SettingsService {

  public static STORAGE_KEY = 'settings';

  private _model = new SettingsModel();

  constructor() {
    const settingsString = localStorage.getItem(SettingsService.STORAGE_KEY);

    if (settingsString) {
      this._model = Object.assign(this._model, JSON.parse(settingsString));
    }
  }

  get model(): SettingsModel {
    return this._model;
  }

  set model(model: SettingsModel) {
    this._model = model;
    localStorage.setItem(SettingsService.STORAGE_KEY, JSON.stringify(model));
  }
}
