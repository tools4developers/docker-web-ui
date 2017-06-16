import { NgModule } from '@angular/core';
import { CommonModule as NgCommonModule } from '@angular/common';

import { UnixMsDateStringPipe } from './pipes/unix-ms-date-string.pipe';
import { HumanizeFileSizePipe } from './pipes/humanize-file-size.pipe';

@NgModule({
  imports: [
    NgCommonModule
  ],
  exports: [
    UnixMsDateStringPipe,
    HumanizeFileSizePipe,
  ],
  declarations: [
    UnixMsDateStringPipe,
    HumanizeFileSizePipe
  ]
})
export class CommonModule { }
