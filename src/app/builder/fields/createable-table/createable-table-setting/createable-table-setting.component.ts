import { Component, OnInit, Inject } from "@angular/core";
import { objectKeysDetail, getPathData, objectKeys } from 'src/app/share/object-func';
import { TableHeader, CreateableTable, TabelSummary } from 'src/app/builder/model/field';
import { DataMapperSettingComponent } from 'src/app/builder/data-mapper-setting/data-mapper-setting.component';
import { BuilderService } from "src/app/builder/builder.service";
import { Form } from "src/app/admin/model/forms";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: "app-createable-table-setting",
  templateUrl: "./createable-table-setting.component.html",
  styleUrls: ["./createable-table-setting.component.scss"]
})

export class CreateableTableSettingComponent implements OnInit {
  mainModel: string[];
  modelProps: string[] = [];
  isAddSummary = false;
  forms: Form[];
  constructor(public dialogRef: MatDialogRef<CreateableTableSettingComponent>,
    public builderService: BuilderService, @Inject(MAT_DIALOG_DATA) public data: CreateableTable,
     public dialog: MatDialog, private _snackBar: MatSnackBar) {
    data.rowsHeader = data.rowsHeader || [[]];
  }

  ngOnInit() {
    if (this.builderService.currentForm && this.builderService.currentForm.dataStructure) {
      const parsed =JSON.parse(this.builderService.currentForm.dataStructure);
      this.mainModel = objectKeysDetail(parsed).filter(x => x.type === "array").map(x => x.name);
      this.getModelProps(parsed);
    }
    this.data.summaries = this.data.summaries || [];
    this.getForms();
  }
  getModelProps(parsed) {
    if (this.data.model) {
      const data = getPathData(parsed, this.data.model)[0];
      this.modelProps = objectKeys(data)
    }else{
      this.modelProps  = objectKeysDetail(parsed).filter(x => x.type !== "array").map(x => x.name);
    }
  }
  addColumn(rowHeaderIndex) {
    this.data.header.push({ name: '', columnType: '1', binding: '', actions: [{}], rowHeaderIndex: rowHeaderIndex, rowSpan: -1, columnSpan: -1 })
  }
  save() {
    // if (!this.data.model) {
    //   this._snackBar.open("Please select Model Binding", "close", {
    //     duration: 3000,
    //   });
    // } else {

    // }
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
  getForms() {
    this.builderService.getForms(this.builderService.currentForm.featureId).subscribe(x => {
      this.forms = x.filter(f => f.id !== this.builderService.currentForm.id);
    })
  }
}
