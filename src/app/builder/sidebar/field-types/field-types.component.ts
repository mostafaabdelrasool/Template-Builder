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
  onTextDragStart(event, type, text) {
    const data = { type, text,fullWidth:true };
    this.transferData(event, data);
  }
  transferData(event, data) {
    event.dataTransfer.effectAllowed = 'move';
    event
      .dataTransfer
      .setData('text/plain', JSON.stringify(data));
  }
  onDragStart(event, type, isContainer = null, isChildContainer = null) {
    const data = { type, isContainer, isChildContainer };
    event.dataTransfer.effectAllowed = 'move';
    this.transferData(event, data);
  }
  onButtonDragStart(type, color, event) {
    const data = { type: FieldType.BUTTON, buttonType: type, color: color }
    this.transferData(event, data);
  }
}
