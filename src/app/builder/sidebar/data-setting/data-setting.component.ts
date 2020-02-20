import { Component, OnInit } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { MatDialogRef } from '@angular/material';
import { objectKeys } from 'src/app/share/object-func';

@Component({
  selector: "app-data-setting",
  templateUrl: "./data-setting.component.html",
  styleUrls: ["./data-setting.component.scss"]
})

export class DataSettingComponent implements OnInit {
  URL: string
  constructor(private http: HttpClient, public dialogRef: MatDialogRef<DataSettingComponent>) {

  }

  ngOnInit() {

  }
  fetchData() {
    this.http.get(this.URL).subscribe(x => {
      const data = Array.isArray(x) ? x[0] : x
      const setting = objectKeys(data).map(key => { return { name: key, isSelcted: true, binding: key, url: this.URL } });
      this.dialogRef.close({ data: x, setting: setting });
    })
  }
}
