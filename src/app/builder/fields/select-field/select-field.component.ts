import { Component, OnInit, Input } from "@angular/core";
import {  SelectField } from '../../model/field';
import { MatDialog } from '@angular/material';
import { DataSettingComponent } from '../../data-source/data-setting/data-setting.component';
import { FieldDataSource } from '../../model/data-source';

@Component({
  selector: "app-select-field",
  templateUrl: "./select-field.component.html",
  styleUrls: ["./select-field.component.scss"]
})

export class SelectFieldComponent implements OnInit {
  
  @Input() field: SelectField;
  data: any;
  constructor(public dialog: MatDialog) {

  }
  ngOnInit() {
    this.field.hasAction = true;
    //this.openDataSource();
  }
  openSetting() {
    let setting = { width: '40vw', height: 'auto' };
    if (this.field.dataSource) {
      setting["data"] = this.field.dataSource
    }
    const dialogRef = this.dialog.open(DataSettingComponent, setting);

    dialogRef.afterClosed().subscribe((result: FieldDataSource) => {
      if (!result) {
        return;
      }
      this.data = result.data;
      this.field.dataSource = result
    });
  }
}
