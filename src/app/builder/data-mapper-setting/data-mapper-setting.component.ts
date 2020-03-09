import { Component, OnInit, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { objectKeys } from 'src/app/share/object-func';
import { SharedService } from 'src/app/share/shared.service';
import { FieldDataSource } from '../model/data-source';

@Component({
  selector: "app-data-mapper-setting",
  templateUrl: "./data-mapper-setting.component.html",
  styleUrls: ["./data-mapper-setting.component.scss"]
})

export class DataMapperSettingComponent implements OnInit {
  propMapper: any[] = []
  sourceProps: any[] = [];
  destinationProps: any[] = [];
  constructor(public dialogRef: MatDialogRef<DataMapperSettingComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, public sharedService: SharedService) {

  }

  ngOnInit() {
    if (this.data.destination === 'mainModel' && this.sharedService.model) {
      this.destinationProps = objectKeys(JSON.parse(this.sharedService.model));
      if (this.sharedService.instanceName) {
        this.destinationProps = this.destinationProps.map(x =>
          this.sharedService.instanceName + '.' + x
        )
      }
    }
    if (this.data.source === 'currentItem' && this.data.field.dataSource) {
      this.sourceProps = (<FieldDataSource>this.data.field.dataSource).dataStructure.map(x => x.name)
    }
  }
  add() {
    this.propMapper.push({})
  }
  remove(item) {
    const index = this.propMapper.indexOf(item);
    this.propMapper.splice(index, 1);
  }
  save(){
    this.dialogRef.close(this.propMapper);
  }
}
