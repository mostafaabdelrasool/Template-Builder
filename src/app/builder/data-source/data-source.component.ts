import { Component, OnInit } from "@angular/core";
import { AppService } from '../share/Render/app.service';
import { FieldDataSource } from '../model/data-source';
import { MatDialog } from '@angular/material/dialog';
import { DataSettingComponent } from './data-setting/data-setting.component';

@Component({
  selector: "app-data-source",
  templateUrl: "./data-source.component.html",
  styleUrls: ["./data-source.component.scss"]
})

export class DataSourceComponent implements OnInit {

  constructor(public appService: AppService, public dialog: MatDialog) {

  }

  ngOnInit() {

  }
  openDataSource(dataSource: FieldDataSource=null) {
    let setting = { width: '40vw', height: 'auto' };
    if(dataSource) {
      setting["data"] = dataSource
    }
    const dialogRef = this.dialog.open(DataSettingComponent, setting);

    dialogRef.afterClosed().subscribe(result => {
      if(result)
      dataSource = result;
    });
  }
}
