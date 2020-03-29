import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { InputField } from '../../model/field';

@Component({
  selector: "app-input-field",
  templateUrl: "./input-field.component.html",
  styleUrls: ["./input-field.component.scss"]
})

export class InputFieldComponent implements OnInit {
  @Input() field: InputField;
  @Input() value: any;
  @Output() valueChange: EventEmitter<any> = new EventEmitter();
  constructor() {

  }

  ngOnInit() {
    this.value = this.value || '';
  }
  onValueChange(event) {
    this.value = event.checked ? event.checked : event.target.value;
    this.valueChange.emit(this.value)
  }
}
