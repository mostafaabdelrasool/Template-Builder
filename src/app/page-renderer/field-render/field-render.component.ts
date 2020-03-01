import { Component, OnInit, Input } from "@angular/core";
import { Fields } from 'src/app/builder/model/field';
import { setPathData, getPathData } from 'src/app/share/object-func';
import { FieldDataSource } from 'src/app/builder/model/data-source';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: "app-field-render",
  templateUrl: "./field-render.component.html",
  styleUrls: ["./field-render.component.scss"]
})

export class FieldRenderComponent implements OnInit {
  @Input() field: Fields;
  @Input() data;

  constructor(private http: HttpClient) {

  }

  ngOnInit() {
    if (this.field['dataSource']) {
      const dataSource = <FieldDataSource>this.field['dataSource'];
      if (dataSource.url) {
        this.http.get(dataSource.url).subscribe(x => {
          dataSource.data = x;
        });
      } else {
        dataSource.data = dataSource.staticData
      }

    }
  }
  valueChange(modelName, event) {
    setPathData(this.data, modelName, event.value || event.target.value);
  }
  getFieldValue(modelName) {
    const value = getPathData(this.data, modelName);
    return value || null;
  }
 }
