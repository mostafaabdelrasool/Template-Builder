import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-measureUnit",
  templateUrl: "./measureUnit.component.html",
  styleUrls: ["./measureUnit.component.scss"]
})

export class MeasureUnitComponent implements OnInit {
  @Input() item: any;
  @Output() valueUpdated: EventEmitter<any> = new EventEmitter<any>();
  constructor() {

  }
  value: string;
  unit: string;
  setMeasureUnit(event) {
    const model = this.value + event.target.value;
    this.unit = event.target.value;
    this.valueUpdated.emit(model)
  }
  propertyChangeHandle(event) {
    const { value } = event.target;
    const model = value + (this.unit || '');
    this.value = value;
    this.valueUpdated.emit(model)
  }
  ngOnInit() {
    if (this.item.modelValue) {
      this.value = this.item.modelValue.replace(/[^\d]/g, "");
      this.unit = this.item.modelValue.replace(/[0-9]/g, "");
    } else {
      this.unit = 'px';
    }
  }
  clear() {
    this.value = '';
    this.valueUpdated.emit('')
  }
}
