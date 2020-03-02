import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { InputField } from '../../model/field';

@Component({
  selector: "app-input-field",
  templateUrl: "./input-field.component.html",
  styleUrls: ["./input-field.component.scss"]
})

export class InputFieldComponent implements OnInit {
  @Input() field: InputField;
  typeName: string
  @Input() value: any;
  @Output() valueChange: EventEmitter<any> = new EventEmitter();
  constructor() {

  }

  ngOnInit() {
    this.value = this.value || '';
    this.typeName = this.getTypeName();
  }
  onValueChange(event) {
    this.value = event.checked ? event.checked : event.target.value;
    this.valueChange.emit(this.value)
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
