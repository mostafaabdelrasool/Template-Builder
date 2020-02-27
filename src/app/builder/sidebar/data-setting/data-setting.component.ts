import { Component, OnInit, Inject } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { objectKeys } from 'src/app/share/object-func';
import { AppService } from '../../share/Render/app.service';
import { FieldDataSource } from '../../model/data-source';

@Component({
  selector: "app-data-setting",
  templateUrl: "./data-setting.component.html",
  styleUrls: ["./data-setting.component.scss"]
})

export class DataSettingComponent implements OnInit {
  dataSource: FieldDataSource
  constructor(private http: HttpClient,
    public dialogRef: MatDialogRef<DataSettingComponent>, public appService: AppService,
    @Inject(MAT_DIALOG_DATA) public data: FieldDataSource) {

  }

  ngOnInit() {
    this.dataSource = this.data || new FieldDataSource();
    this.dataSource.name = 'dataSource ' + (this.appService.dataSources.length + 1);
  }
  fetchData() {
    if (!this.dataSource.url) {
      return;
    }
    this.http.get(this.dataSource.url).subscribe(x => {
      const data = Array.isArray(x) ? x[0] : x
      const setting = objectKeys(data).map(key => { return { name: key, isSelcted: true, binding: key, url: this.dataSource.url } });
      this.dataSource.dataStructure = setting.map(x => x.name);
      if (!this.data) {
        this.appService.dataSources.push(this.dataSource); 
      }
      this.dialogRef.close({ data: x, setting: setting });
    })
  }
  save() {
    //in case of edit data source
    if (!this.data) {
      this.appService.dataSources.push(this.dataSource);
    }
    this.dialogRef.close(this.dataSource);
  }
  addNewRow() {
    if (!this.dataSource.staticData) {
      this.dataSource.staticData = [];
    }
    this.dataSource.staticData.push({ id: 'id', discription: 'description' })
  }
  deleteItem(item) {
    const index = this.dataSource.staticData.indexOf(item);
    this.dataSource.staticData.splice(index, 1);
  }
}
