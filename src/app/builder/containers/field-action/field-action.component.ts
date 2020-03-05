import { Component, OnInit, Input } from "@angular/core";
import { Fields, FieldType } from '../../model/field';
import { AppService } from '../../share/Render/app.service';
import { MatDialog } from '@angular/material';
import { ComplexValueComponent } from '../../complex-value/complex-value.component';

@Component({
  selector: "app-field-action",
  templateUrl: "./field-action.component.html",
  styleUrls: ["./field-action.component.scss"]
})

export class FieldActionComponent implements OnInit {

  @Input() field: Fields;
  constructor(public appService: AppService, public dialog: MatDialog) {
  }

  ngOnInit() {

  }
  handleFieldAction(event, field) {
    const action = event.target.innerText;
    const index = this.appService.currentContainer.fields.findIndex(x => x.id === field.id);
    switch (action) {
      case 'delete':
        this.appService.currentContainer.fields.splice(index, 1);
        break;
      case 'file_copy':
        const newField = JSON.parse(JSON.stringify(field));
        newField.id = Date.now().toString();
        this.appService.currentField = { ...newField };
        this.appService.currentContainer.fields.splice(index, 0, newField);
        break;
      case 'functions':
        this.openComplexValueSetting();
        break;
      default:
        break;
    }
  }
  getType(type) {
    return FieldType[type].toLowerCase()
  }
  openComplexValueSetting() {
    let setting = { width: '40vw', height: 'auto' };
    const dialogRef = this.dialog.open(ComplexValueComponent, setting);
  }
}
