import { Component, OnInit, Input } from "@angular/core";
import { ListField, Fields } from '../../model/field';
import { ContainersComponent } from '../../containers/containers.component';
import { AppService } from '../../share/Render/app.service';
import { MatDialog } from '@angular/material/dialog';
import { DataSettingComponent } from '../../data-source/data-setting/data-setting.component';
import { FieldDataSource } from '../../model/data-source';
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: "app-list-field",
  templateUrl: "./list-field.component.html",
  styleUrls: ["./list-field.component.scss"]
})

export class ListFieldComponent extends ContainersComponent implements OnInit {
  @Input() field: ListField;
  data: any;
  constructor(public appService: AppService, public snackBar: MatSnackBar,public dialog: MatDialog) {
    super(appService, snackBar)
  }

  ngOnInit() {
    if (!this.field.fields) {
      this.field.fields = new Array<Fields>();
    }
    this.field.hasAction = true;
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
