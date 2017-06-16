import { Pipe, PipeTransform } from '@angular/core';
import { NOTIFY_MODEL_TYPE, NotifyModel } from '../models/notify.model';

@Pipe({
  name: 'notifyClassSuffix'
})
export class NotifyClassSuffixPipe implements PipeTransform {

  public static readonly CSS_CLASS_SUFFIX = {
    SUCCESS: 'success',
    INFO: 'info',
    WARNING: 'warning',
    DANGER: 'danger',
    DEFAULT: 'default'
  };

  transform(notify: NotifyModel, args?: any): string {
    switch (notify.type) {
      case NOTIFY_MODEL_TYPE.INFO:
        return NotifyClassSuffixPipe.CSS_CLASS_SUFFIX.INFO;
      case NOTIFY_MODEL_TYPE.SUCCESS:
        return NotifyClassSuffixPipe.CSS_CLASS_SUFFIX.SUCCESS;
      case NOTIFY_MODEL_TYPE.WARNING:
        return NotifyClassSuffixPipe.CSS_CLASS_SUFFIX.WARNING;
      case NOTIFY_MODEL_TYPE.ERROR:
        return NotifyClassSuffixPipe.CSS_CLASS_SUFFIX.DANGER;
      default:
        return NotifyClassSuffixPipe.CSS_CLASS_SUFFIX.DEFAULT;
    }
  }

}
