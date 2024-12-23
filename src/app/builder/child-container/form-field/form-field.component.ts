import { Component, OnInit, Input } from "@angular/core";
import { AppService } from '../../share/Render/app.service';
import { ContainersComponent } from '../../containers/containers.component';
import { FormField, Fields } from '../../model/field';
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
    selector: "app-form-field",
    templateUrl: "./form-field.component.html",
    styleUrls: ["./form-field.component.scss"],
    standalone: false
})

export class FormFieldComponent extends ContainersComponent implements OnInit {

  @Input() field: FormField;
  constructor(public override appService: AppService, public snackBar: MatSnackBar) {
    super(appService, snackBar)
  }

  override ngOnInit() {
    super.ngOnInit()
    if (!this.field.fields) {
      this.field.fields = new Array<Fields>();
    }
  }
}
