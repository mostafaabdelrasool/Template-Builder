import { Component, OnInit } from "@angular/core";
import { MatDialogRef } from '@angular/material';
import { SharedService } from 'src/app/share/shared.service';
import { objectKeysDetail, getPathData, objectKeys } from 'src/app/share/object-func';
import { TableHeader } from 'src/app/builder/model/field';

@Component({
  selector: "app-createable-table-setting",
  templateUrl: "./createable-table-setting.component.html",
  styleUrls: ["./createable-table-setting.component.scss"]
})

export class CreateableTableSettingComponent implements OnInit {
  mainModel: string[];
  modelProps: string[];
  modelName: string;
  header: TableHeader[] = [];
  constructor(public dialogRef: MatDialogRef<CreateableTableSettingComponent>, public sharedService: SharedService) {

  }

  ngOnInit() {
    if (this.sharedService.model) {
      this.mainModel = objectKeysDetail(JSON.parse(this.sharedService.model)).filter(x => x.type === "array").map(x => x.name);
    }
  }
  getModelProps() {
    const data = getPathData(JSON.parse(this.sharedService.model), this.modelName)[0];
    this.modelProps = objectKeys(data)
  }
  add() {
    this.header.push({ name: '', columnType: 'Text', binding: 'model' })
  }
  save() {
    this.dialogRef.close();
  }
}
