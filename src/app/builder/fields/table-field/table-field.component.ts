import { Component, OnInit, Input } from "@angular/core";
import { Fields } from '../../model/field';
import { MatDialog } from '@angular/material';
import { DataSettingComponent } from '../../sidebar/data-setting/data-setting.component';

@Component({
  selector: "app-table-field",
  templateUrl: "./table-field.component.html",
  styleUrls: ["./table-field.component.scss"]
})

export class TableFieldComponent implements OnInit {
  @Input() field: Fields;
  currentRows: [];
  data: [];
  constructor(public dialog: MatDialog) {

  }

  ngOnInit() {
    const dialogRef = this.dialog.open(DataSettingComponent);

    dialogRef.afterClosed().subscribe(result => {
      this.field.tableSetting = result.setting;
      this.data = result.data;
    });
  }
}
