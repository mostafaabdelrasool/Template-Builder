import { Component, OnInit } from "@angular/core";
import { AppService } from '../share/Render/app.service';
import { FieldType, Fields } from '../model/field';
import { Containers } from '../model/containers';

@Component({
  selector: "app-field-types",
  templateUrl: "./field-types.component.html",
  styleUrls: ["./field-types.component.scss"]
})

export class FieldTypesComponent implements OnInit {

  constructor(public appService: AppService) {

  }
  addElement(type: FieldType, isContainer: boolean) {

    if (type === FieldType.DIV) {
      const container: Containers = {
        type: type, model: 'text', id: Date.now().toString(), style: {}, fields: [], classes: []
      };
      this.appService.containers.push(container)
      this.appService.currentContainer = container;
    } else {
      const field = {
        type: type, model: 'text',
        id: Date.now().toString(), classes: [], style: {}, containerId: this.appService.currentContainer.id,
        placeholder: 'label', isContainer: isContainer
      };
      if (isContainer) {
        //because here we add field so fields prop. note exist in type field
        field["fields"] = [];
      }
      this.appService.currentContainer.fields.push(field);
    }
  }
  ngOnInit() {

  }
}
