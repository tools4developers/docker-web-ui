import { NgModule } from '@angular/core';
import { CommonModule as NgCommonModule } from '@angular/common';

import { UnixMsDateStringPipe } from './pipes/unix-ms-date-string.pipe';
import { HumanizeFileSizePipe } from './pipes/humanize-file-size.pipe';

import { BooleanGlyphiconComponent } from './components/boolean-glyphicon/boolean-glyphicon.component';

@NgModule({
  imports: [
    NgCommonModule
  ],
  exports: [
    UnixMsDateStringPipe,
    HumanizeFileSizePipe,
    BooleanGlyphiconComponent,
  ],
  declarations: [
    UnixMsDateStringPipe,
    HumanizeFileSizePipe,
    BooleanGlyphiconComponent
  ]
})
export class CommonModule { }
