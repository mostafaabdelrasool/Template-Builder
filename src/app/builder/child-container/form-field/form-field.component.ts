import { Component, OnInit, Input } from "@angular/core";
import { AppService } from '../../share/Render/app.service';
import { MatSnackBar } from '@angular/material';
import { ContainersComponent } from '../../containers/containers.component';
import { FormField, Fields } from '../../model/field';

@Component({
  selector: "app-form-field",
  templateUrl: "./form-field.component.html",
  styleUrls: ["./form-field.component.scss"]
})

export class FormFieldComponent extends ContainersComponent implements OnInit {

  @Input() field: FormField;
  constructor(public appService: AppService, public snackBar: MatSnackBar) {
    super(appService, snackBar)
  }

  ngOnInit() {
    if (!this.field.fields) {
      this.field.fields = new Array<Fields>();
    }
  }
}
