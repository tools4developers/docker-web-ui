import { NgModule } from '@angular/core';
import { CommonModule as NgCommonModule } from '@angular/common';

import { UnixMsDateStringPipe } from './pipes/unix-ms-date-string.pipe';

@NgModule({
  imports: [
    NgCommonModule
  ],
  exports: [
    UnixMsDateStringPipe,
  ],
  declarations: [
    UnixMsDateStringPipe
  ]
})
export class CommonModule { }
