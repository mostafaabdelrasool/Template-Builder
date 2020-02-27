import { Component, OnInit } from "@angular/core";
import { AppService } from '../share/Render/app.service';
import { FieldDataSource } from '../model/data-source';
import { MatDialog } from '@angular/material';
import { DataSettingComponent } from '../sidebar/data-setting/data-setting.component';

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
  openDataSource(dataSource: FieldDataSource) {
    const dialogRef = this.dialog.open(DataSettingComponent, {
      width: '40vw',
      height: 'auto',
      data: dataSource
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result)
      dataSource = result;
    });
  }
}
