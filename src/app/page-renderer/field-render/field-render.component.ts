import { Component, OnInit, Input } from "@angular/core";
import { Fields } from 'src/app/builder/model/field';
import { setPathData, getPathData } from 'src/app/share/object-func';

@Component({
  selector: "app-field-render",
  templateUrl: "./field-render.component.html",
  styleUrls: ["./field-render.component.scss"]
})

export class FieldRenderComponent implements OnInit {
  @Input() field: Fields;
  @Input() data;

  constructor() {

  }

  ngOnInit() {
  }
  valueChange(modelName, event) {
    setPathData(this.data, modelName,event.value || event.target.value);
  }
  getFieldValue(modelName) {
    const value = getPathData(this.data, modelName);
    return value || null;
  }
}
