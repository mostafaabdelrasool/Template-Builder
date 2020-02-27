import { Component, OnInit, Input, Output } from "@angular/core";
import { Fields, TableHeader, TableField } from '../../model/field';
import { MatDialog } from '@angular/material';
import { DataSettingComponent } from '../../sidebar/data-setting/data-setting.component';
import { FieldDataSource } from '../../model/data-source';
import { EventEmitter } from 'protractor';

@Component({
  selector: "app-table-field",
  templateUrl: "./table-field.component.html",
  styleUrls: ["./table-field.component.scss"]
})

export class TableFieldComponent implements OnInit {
  @Input() field: TableField;
  currentRows: TableHeader[];
  data: any[];
  pageNo: number;
  @Input() set perfomAction(val: boolean) {
    if (val) {
      this.openDataSource();
    }
  };
  constructor(public dialog: MatDialog) {

  }

  ngOnInit() {
    this.field.hasAction = true;
    this.openDataSource();
  }
  setHeaderVisability(event) {
    this.currentRows = event.value;
  }
  openDataSource() {
    let setting = { width: '40vw', height: 'auto' };
    if (this.field.dataSource) {
      setting["data"] = this.field.dataSource
    }
    const dialogRef = this.dialog.open(DataSettingComponent, setting);

    dialogRef.afterClosed().subscribe((result: FieldDataSource) => {
      if (!result) {
        return;
      }
      this.field.header = result.dataStructure;
      this.currentRows = result.dataStructure;
      this.data = result.data;
      this.field.dataSource = result
    });
  }
}
