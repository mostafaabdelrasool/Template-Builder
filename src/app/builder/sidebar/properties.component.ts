import { Component, OnInit, Input } from '@angular/core';
import { AppService } from '../share/Render/app.service';
import { Fields } from '../model/field';
import { CardField } from '../model/containers';
import { SharedService } from 'src/app/share/shared.service';
import { objectKeys } from 'src/app/share/object-func';

@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.scss'],
})
export class PropertiesComponent implements OnInit {
  @Input() currentField: Fields;
  applyStyleInClass: boolean;
  boxShadow: { y?: string, x?: string, blur?: string, color?: string, spread?: string };
  modelProps: string[];
  constructor(private appService: AppService, public sharedService: SharedService) {
    this.boxShadow = {};
  }

  ngOnInit() {
    this.currentField.classes = this.currentField.classes || [];
    if (this.sharedService.model) {
      this.modelProps = objectKeys(JSON.parse(this.sharedService.model));
      this.modelProps = this.modelProps.map(x =>
        this.sharedService.rootModelName + '.' + x
      )
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
        result[0] = event
        break;
      case 'y':
        result[1] = event
        break;
      case 'b':
        result[2] = event
        break;
      case 's':
        result[3] = event
        break;
      case 'c':
        result[4] = event
        break;
      default:
        break;
    }
    this.currentField.style.boxShadow = result.join(' ');
    this.filedValueChanged('');
  }
}
