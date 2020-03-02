import { Component, OnInit, Input } from "@angular/core";
import { InputField } from '../../model/field';

@Component({
  selector: "app-input-field",
  templateUrl: "./input-field.component.html",
  styleUrls: ["./input-field.component.scss"]
})

export class InputFieldComponent implements OnInit {
  @Input() field: InputField;
  typeName: string
  constructor() {

  }

  ngOnInit() {
    this.typeName = this.getTypeName();
  }
  getTypeName(): string {
    switch (this.field.type) {
      case 0:
        return 'text'
      case 1:
        return 'number'
      case 21:
        return 'email'
      case 22:
        return 'password'
      default:
        return ''
    }
  }
}
