import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ContainersListFilterModel } from '../../models/containers-list-filter.model';

@Component({
  selector: 'app-containers-list-filter',
  templateUrl: './containers-list-filter.component.html',
  styleUrls: ['./containers-list-filter.component.scss']
})
export class ContainersListFilterComponent implements OnInit {

  @Output() changeFilter = new EventEmitter<ContainersListFilterModel>();

  form: FormGroup;
  model = new ContainersListFilterModel();

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
    });
  }

  private subscribeChanges() {
    this.form.valueChanges.subscribe(() => {
      this.onSubmit();
    });
  }

  private prepareModel(): ContainersListFilterModel {
    const formModel = this.form.value;

    return {
      showAll: formModel.showAll as boolean,
    } as ContainersListFilterModel;
  }
}
