import { Component, OnInit, Inject } from "@angular/core";
import { HttpClient, HttpBackend } from "@angular/common/http";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { objectKeys } from "src/app/share/object-func";
import { AppService } from "../../share/Render/app.service";
import { FieldDataSource } from "../../model/data-source";

@Component({
  selector: "app-data-setting",
  templateUrl: "./data-setting.component.html",
  styleUrls: ["./data-setting.component.scss"],
  standalone: false,
})
export class DataSettingComponent implements OnInit {
  dataSource: FieldDataSource;
  http: HttpClient;
  constructor(
    private hanlder: HttpBackend,
    public dialogRef: MatDialogRef<DataSettingComponent>,
    public appService: AppService,
    @Inject(MAT_DIALOG_DATA) public data: FieldDataSource
  ) {
    this.http = new HttpClient(hanlder);
  }

  ngOnInit() {
    this.dataSource = { ...this.data };
    this.dataSource.name = this.data
      ? this.data.name
      : "dataSource " + (this.appService.dataSources.length + 1);
  }
  fetchData() {
    if (!this.dataSource.url) {
      return;
    }
    this.http.get(this.dataSource.url).subscribe((x) => {
      const data = Array.isArray(x) ? x[0] : x;
      const setting = objectKeys(data).map((key) => {
        return { name: key, isSelcted: true, binding: key };
      });
      this.dataSource.dataStructure = setting;
      if (!this.data) {
        this.appService.dataSources.push(this.dataSource);
      }
      // this.dataSource.data = x;
      this.dialogRef.close(this.dataSource);
    });
  }
  save() {
    //in case of edit data source
    if (!this.data) {
      this.appService.dataSources.push(this.dataSource);
    }
    if (!this.dataSource.dataStructure && this.dataSource.staticData) {
      this.dataSource.dataStructure = [{ name: "id" }, { name: "discription" }];
    }
    this.dialogRef.close(this.dataSource);
  }
  addNewRow() {
    if (!this.dataSource.staticData) {
      this.dataSource.staticData = [];
    }
    this.dataSource.staticData.push({ id: "id", discription: "description" });
  }
  deleteItem(item: any) {
    if (this.dataSource.staticData) {
      const index = this.dataSource.staticData.indexOf(item);
      this.dataSource.staticData.splice(index, 1);
    }
  }
  dataSourceChange(dataSource: FieldDataSource) {
    this.dataSource = dataSource;
  }
}
