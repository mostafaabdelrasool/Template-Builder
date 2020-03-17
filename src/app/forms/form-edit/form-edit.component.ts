import { Component, OnInit, Inject } from "@angular/core";
import { Form } from '../model/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormService } from '../form.service';

@Component({
  selector: "app-form-edit",
  templateUrl: "./form-edit.component.html",
  styleUrls: ["./form-edit.component.scss"]
})

export class FormEditComponent implements OnInit {
  form: Form
  constructor(public dialogRef: MatDialogRef<FormEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Form, public formService: FormService) {

  }

  ngOnInit() {
    this.form = this.data || new Form();
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
