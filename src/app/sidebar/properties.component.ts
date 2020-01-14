import { Component, OnInit, Input } from '@angular/core';
import { Fields } from '../app.component';

@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.css']
})
export class PropertiesComponent implements OnInit {
  @Input() currentField: Fields
  constructor() {

  }

  ngOnInit() {
    this.currentField.classes = this.currentField.classes || [];
  }
  addClass = className => {
    return this.currentField.classes.push(className);
  }
  updateStyle(event, styleName) {
    this.currentField.style[styleName] = event;
  }
  // setMeasureUnit(event, model) {
  //   this.currentField.style[model + 'unit'] = event.target.value;
  //   this.currentField.style[model] = this.currentField.style[model].replace(/[^\d]/g, "") + event.target.value;
  // }
  // propertyChangeHandle(event) {
  //   const { value, name } = event.target;
  //   this.currentField.style[name] = value + (this.currentField.style[name + 'unit'] || '');
  // }
}
