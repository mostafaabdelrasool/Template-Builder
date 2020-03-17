import { Component, OnInit, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { SharedService } from 'src/app/share/shared.service';
import { objectKeysDetail, getPathData, objectKeys } from 'src/app/share/object-func';
import { TableHeader, CreateableTable, FieldType } from 'src/app/builder/model/field';
import { DataMapperSettingComponent } from 'src/app/builder/data-mapper-setting/data-mapper-setting.component';

@Component({
  selector: "app-createable-table-setting",
  templateUrl: "./createable-table-setting.component.html",
  styleUrls: ["./createable-table-setting.component.scss"]
})

export class CreateableTableSettingComponent implements OnInit {
  mainModel: string[];
  modelProps: string[];
  constructor(public dialogRef: MatDialogRef<CreateableTableSettingComponent>,
    public sharedService: SharedService, @Inject(MAT_DIALOG_DATA) public data: CreateableTable,public dialog: MatDialog) {

  }

  ngOnInit() {
    if (this.sharedService.model) {
      this.mainModel = objectKeysDetail(JSON.parse(this.sharedService.model)).filter(x => x.type === "array").map(x => x.name);
      if (this.modelProps.length === 0) {
        this.getModelProps();
      }
    }

  }
  getModelProps() {
    const data = getPathData(JSON.parse(this.sharedService.model), this.data.model)[0];
    this.modelProps = objectKeys(data)
  }
  add() {
    this.data.header.push({ name: '', columnType: 'Text', binding: 'model',actions:[{}] })
  }
  save() {
    this.dialogRef.close(this.data);
  }
  remove(item) {
    const index = this.data.header.indexOf(item);
    this.data.header.splice(index, 1);
  }
  addAction(column: TableHeader) {
    column.actions.push({ tooltip: '' })
  }
  deleteAction(action, column: TableHeader) {
    const index = column.actions.indexOf(action);
    column.actions.splice(index, 1);
  }
  openEventDialop(action, column: TableHeader) {
    let setting = { width: '70vw', height: 'auto', data: {} };
    if (this.data['dataSource']) {
      setting.data = { source: 'currentItem', field: this.data, destination: 'mainModel' }
    }
    const dialogRef = this.dialog.open(DataMapperSettingComponent, setting);

    dialogRef.afterClosed().subscribe(result => {

    });
  }
}
