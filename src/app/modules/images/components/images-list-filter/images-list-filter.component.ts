import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ImagesListFilterModel } from '../../models/images-list-filter.model';
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

  constructor(private fb: FormBuilder) {
    this.createForm();
    this.subscribeChanges();
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
    } as ImagesListFilterModel;
  }
}
