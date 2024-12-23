import { Component, OnInit, Input } from "@angular/core";
import { ContainersComponent } from '../../containers/containers.component';
import { Containers } from '../../model/containers';
import { AppService } from '../../share/Render/app.service';
import { MatSnackBar } from "@angular/material/snack-bar";
import { Fields, FieldType } from '../../model/field';

@Component({
    selector: "app-field-child-container",
    templateUrl: "./field-child-container.component.html",
    styleUrls: ["./field-child-container.component.scss"],
    standalone: false
})

export class FieldChildContainerComponent extends ContainersComponent implements OnInit {

  @Input() field: Containers;
  constructor(public override appService: AppService, public snackBar: MatSnackBar) {
    super(appService, snackBar)
  }

  override ngOnInit() {
    super.ngOnInit();
    if (!this.field.fields) {
      this.field.type = FieldType.DIV;
      this.field.fields = new Array<Fields>();
    }
  }
}
