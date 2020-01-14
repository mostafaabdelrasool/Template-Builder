import { Component, OnInit, Input } from '@angular/core';
import { Fields } from '../model/field';

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
}
