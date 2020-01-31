import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Fields } from '../model/field';
import { AppService } from '../share/Render/app.service';
import { CardField } from '../model/containers';

@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.scss'],
})
export class PropertiesComponent implements OnInit {
  @Input() currentField: Fields;
  applyStyleInClass: boolean;
  boxShadow: string[];
  constructor(private appService: AppService) {

  }

  ngOnInit() {
    this.currentField.classes = this.currentField.classes || [];
    if (this.currentField.style.boxShadow) {
      this.boxShadow = this.currentField.style.boxShadow.split(' ');
    }
  }
  addClass = className => {
    return this.currentField.classes.push(className);
  }
  updateStyle(event, styleName) {
    this.currentField.style[styleName] = event;
    this.filedValueChanged('');
  }
  filedValueChanged(event) {
    const style = { ...this.currentField.style }
    //this work around to detect child property change;
    this.currentField.style = undefined;
    this.currentField.style = style
  }
  setFlexSetting(flexType, value) {
    this.currentField.style[flexType] = value;
    this.filedValueChanged('');
  }
  addNewCardAction() {
    const length = (<CardField>this.currentField).cardActions.length;
    (<CardField>this.currentField).cardActions.push({ title: 'Action title ' + length })
  }
  addFieldEvent() {
    this.currentField.fieldEvent.push({ name: '', type: '' });
  }
  boxShawChange(type, event) {
    if (!this.currentField.style.boxShadow) {
      this.currentField.style.boxShadow = ''
    }
    let result = this.currentField.style.boxShadow.split(' ');
    switch (type) {
      case 'x':
        result[0] = event.value + 'px'
        break;
      case 'y':
        result[1] = event.value + 'px'
        break;
      case 'b':
        result[2] = event.value + 'px'
        break;
      case 's':
        result[3] = event.value + 'px'
        break;
      case 'c':
        result[4] = event
        break;
      default:
        break;
    }
    this.boxShadow = result;
    this.currentField.style.boxShadow = result.join(' ');
    this.filedValueChanged('');
  }
}
