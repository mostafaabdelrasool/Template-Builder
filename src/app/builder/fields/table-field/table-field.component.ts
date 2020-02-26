import { Component, OnInit, Input } from "@angular/core";
import { Fields, TableHeader } from '../../model/field';
import { MatDialog } from '@angular/material';
import { DataSettingComponent } from '../../sidebar/data-setting/data-setting.component';

@Component({
  selector: "app-table-field",
  templateUrl: "./table-field.component.html",
  styleUrls: ["./table-field.component.scss"]
})

export class TableFieldComponent implements OnInit {
  @Input() field: Fields;
  currentRows: TableHeader[];
  data: [];
  pageNo:number
  constructor(public dialog: MatDialog) {

  }

  ngOnInit() {
    const dialogRef = this.dialog.open(DataSettingComponent,{width:'40vw',height:'auto'});

    dialogRef.afterClosed().subscribe(result => {
      this.field.tableSetting = { header: [], url: '' }
      this.field.tableSetting.header = result.setting;
      this.currentRows = result.setting;
      this.data = result.data;
      this.field.tableSetting.url = result.url
    });
  }
  setHeaderVisability(event) {
    this.currentRows = event.value;
  }
}
