import { Component, OnInit, Input } from "@angular/core";
import { MatDialog } from '@angular/material';
import { TableHeader, CreateableTable } from '../../model/field';
import { CreateableTableSettingComponent } from './createable-table-setting/createable-table-setting.component';

@Component({
  selector: "app-createable-table",
  templateUrl: "./createable-table.component.html",
  styleUrls: ["./createable-table.component.scss"]
})

export class CreateableTableComponent implements OnInit {

  @Input() field: CreateableTable;
  currentRows: TableHeader[];
  data: any[];
  pageNo: number;
  @Input() set perfomAction(val: boolean) {
    if (val) {
      this.openTableSetting();
    }
  };
  constructor(public dialog: MatDialog) {

  }

  ngOnInit() {
    this.field.hasAction = true;
    this.openTableSetting();
  }
  openTableSetting() {
    let setting = { width: '40vw', height: 'auto' };
    const dialogRef = this.dialog.open(CreateableTableSettingComponent, setting);

    dialogRef.afterClosed().subscribe((result) => {
    
    });
  }
}
