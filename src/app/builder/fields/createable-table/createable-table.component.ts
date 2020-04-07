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
      this.field.header=new Array<TableHeader>();
    }
    //this.openTableSetting();
  }
  openSetting() {
    let setting = { width: '70vw', height: 'auto', data: this.field };
    const dialogRef = this.dialog.open(CreateableTableSettingComponent, setting);

  //  dialogRef.afterClosed()
  }
}
