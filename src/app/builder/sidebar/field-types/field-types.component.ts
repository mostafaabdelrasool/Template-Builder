import { Component, OnInit } from "@angular/core";

import { ButtonField, FieldType } from "../../model/field";

@Component({
  selector: "app-field-types",
  templateUrl: "./field-types.component.html",
  styleUrls: ["./field-types.component.scss"],
  standalone: false,
})
export class FieldTypesComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  onTextDragStart(event: any, type: any, text: any) {
    const data = { type, text, fullWidth: true, category: 3 };
    this.transferData(event, data);
  }
  transferData(event: any, data: any) {
    event.dataTransfer.effectAllowed = "move";
    event.dataTransfer.setData("text/plain", JSON.stringify(data));
  }
  onDragStart(
    event: any,
    type: any,
    isContainer?: boolean,
    isChildContainer?: boolean,
    category?: any
  ) {
    const fullWidth =
      type === FieldType.CREATABLE_TABLE ||
      type === FieldType.TABLE ||
      type === FieldType.TEXT_AREA;
    const data = {
      type,
      isContainer,
      isChildContainer,
      category,
      fullWidth: fullWidth,
    };
    event.dataTransfer.effectAllowed = "move";
    this.transferData(event, data);
  }
  onButtonDragStart(type: string, color: string, event: any) {
    const data = { type: FieldType.BUTTON, buttonType: type, color: color };
    this.transferData(event, data);
  }
}
