import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FILTER_DANGLING, ImagesListFilterModel } from '../../models/images-list-filter.model';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-images-list-filter',
  templateUrl: './images-list-filter.component.html',
  styleUrls: ['./images-list-filter.component.scss']
})
export class ImagesListFilterComponent implements OnInit {

  @Output() changeFilter = new EventEmitter<ImagesListFilterModel>();

  form: FormGroup;
  model = new ImagesListFilterModel();
  danglingItems: Array<{value: FILTER_DANGLING, title: string}>;

  constructor(private fb: FormBuilder) {
    this.createForm();
    this.subscribeChanges();

    this.danglingItems = [
      { value: FILTER_DANGLING.NONE, title: 'None' },
      { value: FILTER_DANGLING.NO, title: 'No' },
      { value: FILTER_DANGLING.YES, title: 'Yes' },
    ];
  }

  ngOnInit() {
    this.form.setValue(this.model);
  }

  onSubmit(): void {
    this.model = this.prepareModel();
    this.changeFilter.emit(this.model);
  }

  private createForm(): void {
    this.form = this.fb.group({
      showAll: false,
      reference: '',
      dangling: FILTER_DANGLING.NONE,
    });
  }

  private subscribeChanges(): void {
    this.form.valueChanges.subscribe(data => {
      this.onSubmit();
    });
  }

  private prepareModel(): ImagesListFilterModel {
    const formModel = this.form.value;

    return {
      showAll: formModel.showAll as boolean,
      reference: formModel.reference as string,
      dangling: formModel.dangling as FILTER_DANGLING,
    } as ImagesListFilterModel;
  }
}
