import { Component, OnInit, Input } from "@angular/core";
import { Fields, FieldType } from "../../model/field";
import { AppService } from "../../share/Render/app.service";
import { MatDialog } from "@angular/material/dialog";
import { ComplexValueComponent } from "../../complex-value/complex-value.component";

@Component({
  selector: "app-field-action",
  templateUrl: "./field-action.component.html",
  styleUrls: ["./field-action.component.scss"],
  standalone: false,
})
export class FieldActionComponent implements OnInit {
  @Input() field: Fields;
  left: number;
  top: number;
  constructor(public appService: AppService, public dialog: MatDialog) {}

  ngOnInit() {}

  handleFieldAction(type: number, field: Fields, event: any) {
    const containerIndex = this.appService.allContainers.findIndex(
      (x) => x.id === field.containerId
    );
    if (containerIndex !== -1) {
      const index = this.appService.allContainers[
        containerIndex
      ].fields?.findIndex((x) => x.id === field.id);
      if (index === undefined) {
        return;
      }
      switch (type) {
        case 1:
          this.appService.deleteField(field, index);
          break;
        case 2:
          this.appService.copyField(field, index);
          break;
        case 4:
          this.openComplexValueSetting();
          break;
        case 3:
          this.selectParentContainr(field, event);
          break;
        default:
          break;
      }
    }
  }
  getType(type: FieldType) {
    return FieldType[type].toLowerCase();
  }
  openComplexValueSetting() {
    let setting = { width: "40vw", height: "auto", data: this.field };
    const dialogRef = this.dialog.open(ComplexValueComponent, setting);
  }

  selectParentContainr(field: Fields, event: any) {
    const parent = this.appService.allContainers.find(
      (x) => x.id === field.containerId
    );
    if (parent) {
      this.appService.selectField(parent, event);
    } else {
      //root container
      this.appService.selectField(this.appService.containers[0], event);
    }
  }
}
