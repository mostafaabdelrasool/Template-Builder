import { Component, OnInit, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { SharedService } from 'src/app/share/shared.service';
import { objectKeysDetail, getPathData, objectKeys } from 'src/app/share/object-func';
import { TableHeader, CreateableTable } from 'src/app/builder/model/field';

@Component({
  selector: "app-createable-table-setting",
  templateUrl: "./createable-table-setting.component.html",
  styleUrls: ["./createable-table-setting.component.scss"]
})

export class CreateableTableSettingComponent implements OnInit {
  mainModel: string[];
  modelProps: string[];
  constructor(public dialogRef: MatDialogRef<CreateableTableSettingComponent>, 
    public sharedService: SharedService, @Inject(MAT_DIALOG_DATA) public data: CreateableTable) {
    
  }

  ngOnInit() {
    if (this.sharedService.model) {
      this.mainModel = objectKeysDetail(JSON.parse(this.sharedService.model)).filter(x => x.type === "array").map(x => x.name);
    }
   
  }
  getModelProps() {
    const data = getPathData(JSON.parse(this.sharedService.model), this.data.model)[0];
    this.modelProps = objectKeys(data)
  }
  add() {
    this.data.header.push({ name: '', columnType: 'Text', binding: 'model' })
  }
  save() {
    this.dialogRef.close(this.data);
  }
  remove(item){
    const index=this.data.header.indexOf(item);
    this.data.header.splice(index,1);
  }
}
