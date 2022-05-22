import { Component, OnInit, Inject } from "@angular/core";
import { Form } from '../../model/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormService } from '../form.service';
import { Feature } from './../../model/feature';

@Component({
  selector: "app-form-edit",
  templateUrl: "./form-edit.component.html",
  styleUrls: ["./form-edit.component.scss"]
})

export class FormEditComponent implements OnInit {
  form: Form;
  features: Feature[]
  constructor(public dialogRef: MatDialogRef<FormEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Form, public formService: FormService) {

  }

  ngOnInit() {
    this.form = this.data || new Form();
    this.getFeatures();
  }
  getFeatures() {
    this.formService.getUrl("api/Feature").subscribe((feature: Feature[]) => {
      this.features = feature;
    });
  }
  save() {
    if (!this.form.id) {
      this.formService.post(this.form).subscribe(x => {
        this.dialogRef.close(x);
      })
    } else {
      this.formService.put(this.form).subscribe(x => {
        this.dialogRef.close(this.form);
      })
    }
  }
}
