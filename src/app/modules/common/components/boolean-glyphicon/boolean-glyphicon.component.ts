import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-boolean-glyphicon',
  templateUrl: './boolean-glyphicon.component.html',
  styleUrls: ['./boolean-glyphicon.component.scss']
})
export class BooleanGlyphiconComponent {

  @Input() value: boolean;

}
