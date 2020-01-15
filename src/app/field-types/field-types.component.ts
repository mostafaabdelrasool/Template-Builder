import { Component, OnInit } from "@angular/core";
import { AppService } from '../share/Render/app.service';
import { FieldType, Fields } from '../model/field';

@Component({
  selector: "app-field-types",
  templateUrl: "./field-types.component.html",
  styleUrls: ["./field-types.component.scss"]
})

export class FieldTypesComponent implements OnInit {
  
  constructor(public appService: AppService) {

  }
  addElement(type: FieldType) {
    const field: Fields = {
      type: FieldType.INPUT_TEXT, model: 'text', id: Date.now().toString(), style: {}
    };
    this.appService.fields.push(field);
  }
  ngOnInit() {

  }
}
