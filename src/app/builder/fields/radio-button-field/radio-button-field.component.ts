import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { InputField } from '../../model/field';

@Component({
  selector: "app-radio-button-field",
  templateUrl: "./radio-button-field.component.html",
  styleUrls: ["./radio-button-field.component.scss"]
})

export class RadioButtonFieldComponent implements OnInit {
  @Input() field: InputField;
  @Input() value: any;
  @Output() valueChange: EventEmitter<any> = new EventEmitter();
  constructor() {

  }

  onValueChange(event) {
    this.value = event.value;
    this.valueChange.emit(this.value)
  }

  ngOnInit() {
    this.value = this.value || '';
    if (!this.field.radioButtonGroup) {
      this.field.radioButtonGroup = [{ value: '1', placeholder: 'Label' }]
    }
  }
  onDrop($event) {
    const trans = $event.dataTransfer.getData('text');
    if (trans) {
      const data = JSON.parse(trans);
      if (data.changePosition) {
        return;
      }
    }
    this.field.radioButtonGroup.push({ value: (this.field.radioButtonGroup.length + 1), placeholder: 'Label' + (this.field.radioButtonGroup.length + 1) })
    $event.stopPropagation();
  }
}
