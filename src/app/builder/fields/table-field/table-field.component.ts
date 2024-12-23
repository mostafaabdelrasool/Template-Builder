import { Component, OnInit, Input } from "@angular/core";
import { TableHeader, TableField } from '../../model/field';
import { MatDialog } from '@angular/material/dialog';
import { DataSettingComponent } from '../../data-source/data-setting/data-setting.component';
import { FieldDataSource } from '../../model/data-source';

@Component({
    selector: "app-table-field",
    templateUrl: "./table-field.component.html",
    styleUrls: ["./table-field.component.scss"],
    standalone: false
})

export class TableFieldComponent implements OnInit {
  @Input() field: TableField;
  currentRows: TableHeader[];
  data: any[];
  pageNo: number;
  constructor(public dialog: MatDialog) {

  }

  ngOnInit() {
    this.field.hasAction = true;
    //this.openDataSource();
  }
  setHeaderVisability(event: any) {
    this.currentRows = event.value;
  }
  openSetting() {
    let setting = { width: '40vw', height: 'auto', data: {} };
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
