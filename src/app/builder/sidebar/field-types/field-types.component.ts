import { Component, OnInit } from "@angular/core";


import { FieldType } from '../../model/field';


@Component({
  selector: "app-field-types",
  templateUrl: "./field-types.component.html",
  styleUrls: ["./field-types.component.scss"]
})

export class FieldTypesComponent implements OnInit {

  constructor() {

  }

  ngOnInit() {

  }

  onDragStart(event, type, isContainer, isChildContainer) {
    const data = { type, isContainer, isChildContainer };
    event.dataTransfer.effectAllowed='move';
    event
      .dataTransfer
      .setData('text/plain', JSON.stringify(data));
  }
  onButtonDragStart(type, color,event) {
    const data = { type: FieldType.BUTTON, buttonType: type, color: color }
    event
      .dataTransfer
      .setData('text/plain', JSON.stringify(data));
  }
}
