import { Component, OnInit, Input } from "@angular/core";
import { MatDialog } from '@angular/material';
import { TableHeader, CreateableTable } from '../../model/field';
import { CreateableTableSettingComponent } from './createable-table-setting/createable-table-setting.component';

@Component({
  selector: "app-createable-table",
  templateUrl: "./createable-table.component.html",
  styleUrls: ["./createable-table.component.scss"],

})

export class CreateableTableComponent implements OnInit {

  @Input() field: CreateableTable;
  constructor(public dialog: MatDialog) {

  }

  ngOnInit() {
    this.field.hasAction = true;
    if (!this.field.header) {
      this.field.header = new Array<TableHeader>();
    }
  }
  openSetting() {
    const field = JSON.parse(JSON.stringify(this.field));
    let setting = { width: '90vw', height: 'auto', data: field };
    const dialogRef = this.dialog.open(CreateableTableSettingComponent, setting);
    dialogRef.afterClosed().subscribe((result:CreateableTable) => {
      if (result) {
        this.field.header = result.header;
        this.field.model = result.model;
        this.field.summaries = result.summaries;
        this.field.rowsHeader= result.rowsHeader;
      }
    });
  }
  getHeaderColumns(index){
    return this.field.header.filter(x => x.rowHeaderIndex === index);
  }
}
