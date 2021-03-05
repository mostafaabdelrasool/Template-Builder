import { Component, OnInit, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog, MatSnackBar } from '@angular/material';
import { SharedService } from 'src/app/share/shared.service';
import { objectKeysDetail, getPathData, objectKeys } from 'src/app/share/object-func';
import { TableHeader, CreateableTable, FieldType, TabelSummary } from 'src/app/builder/model/field';
import { DataMapperSettingComponent } from 'src/app/builder/data-mapper-setting/data-mapper-setting.component';

@Component({
  selector: "app-createable-table-setting",
  templateUrl: "./createable-table-setting.component.html",
  styleUrls: ["./createable-table-setting.component.scss"]
})

export class CreateableTableSettingComponent implements OnInit {
  mainModel: string[];
  modelProps: string[] = [];
  isAddSummary = false;
  constructor(public dialogRef: MatDialogRef<CreateableTableSettingComponent>,
    public sharedService: SharedService, @Inject(MAT_DIALOG_DATA) public data: CreateableTable, public dialog: MatDialog
    , private _snackBar: MatSnackBar) {
    data.rowsHeader = data.rowsHeader || [[]];
  }

  ngOnInit() {
    if (this.sharedService.model) {
      this.mainModel = objectKeysDetail(JSON.parse(this.sharedService.model)).filter(x => x.type === "array").map(x => x.name);
      this.getModelProps();
    }
    this.data.summaries = this.data.summaries || [];
  }
  getModelProps() {
    if (this.data.model) {
      const data = getPathData(JSON.parse(this.sharedService.model), this.data.model)[0];
      this.modelProps = objectKeys(data)
    }
  }
  addColumn(rowHeaderIndex) {
    this.data.header.push({ name: '', columnType: '1', binding: '', actions: [{}], rowHeaderIndex: rowHeaderIndex, rowSpan: -1, columnSpan: -1 })
  }
  save() {
    if (!this.data.model || this.data.header.filter(x => !x.binding).length > 0) {
      this._snackBar.open("Please select Model Binding", "close", {
        duration: 3000,
      });
    } else {
      this.dialogRef.close(this.data);
    }

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

    // dialogRef.afterClosed().subscribe(result => {

    // });
  }
  deleteSummary(summary) {
    const index = this.data.summaries.indexOf(summary);
    this.data.summaries.splice(index, 1);
  }
  addSummary() {
    this.data.summaries.push(new TabelSummary());
  }
  addHeader() {
    this.data.rowsHeader.push([]);
  }
  getHeadersColumn(index) {
    return this.data.header.filter(x => x.rowHeaderIndex === index);
  }
}
