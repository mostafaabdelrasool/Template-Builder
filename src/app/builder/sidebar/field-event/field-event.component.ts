import { Component, OnInit, Input } from "@angular/core";
import { Fields, FieldType, SelectField } from '../../model/field';
import { AppService } from '../../share/Render/app.service';
import { DataMapperSettingComponent } from '../../data-mapper-setting/data-mapper-setting.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: "app-field-event",
  templateUrl: "./field-event.component.html",
  styleUrls: ["./field-event.component.scss"]
})

export class FieldEventComponent implements OnInit {

  @Input() currentField: Fields;
  constructor(public appService: AppService, public dialog: MatDialog) {
  }

  ngOnInit() {

  }
  deleteFieldEvent(item) {
    const index = this.currentField.fieldEvent.indexOf(item);
    this.currentField.fieldEvent.splice(index, 1);
  }
  advancedFieldEvent() {
    let setting = { width: '70vw', height: 'auto', data: {} };
    if (this.currentField['dataSource']) {
      setting.data = { source: 'currentItem', field: this.currentField, destination: 'mainModel' }
    }
    const dialogRef = this.dialog.open(DataMapperSettingComponent, setting);

    dialogRef.afterClosed().subscribe(result => {
      if (this.currentField.type === FieldType.DROPDOWNLIST && result) {
        let field = (<SelectField>this.currentField);
        field.onSelect = {
          destinationPath: 'mainModel',
          mapper: result.mapper.map(x => {
            return {
              source: x.source,
              destination: x.destination
            }
          }),
          code:result.code
        }
      }

    });
  }
  addFieldEvent() {
    this.currentField.fieldEvent.push({ name: '', type: '' });
  }
}
