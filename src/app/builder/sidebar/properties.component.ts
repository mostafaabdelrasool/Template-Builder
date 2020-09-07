import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AppService } from '../share/Render/app.service';
import { Fields, SelectField } from '../model/field';
import { CardField } from '../model/containers';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class PropertiesComponent implements OnInit {
  currentField: Fields;
  applyStyleInClass: boolean;
  boxShadow: { y?: string, x?: string, blur?: string, color?: string, spread?: string };

  constructor(public appService: AppService,
    public dialog: MatDialog) {
    this.boxShadow = {};
  }
  ngOnInit() {
    this.appService.currentFieldSubject.subscribe((x: Fields) => {
      this.currentField = undefined;
      setTimeout(() => {
        this.currentField = x;
      });
    });
  }

  updateStyle(event, styleName) {
    this.currentField.style[styleName] = event;
    this.appService.updateFieldStyle(this.currentField);
  }
  addNewCardAction() {
    const length = (<CardField>this.currentField).cardActions.length;
    (<CardField>this.currentField).cardActions.push({ title: 'Action title ' + length })
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
    this.appService.updateFieldStyle(this.currentField);
  }
  colorPickerChange(event, model) {
    this.currentField.style[model] = event;
    this.appService.updateFieldStyle(this.currentField);
  }
  fieldValueChanged(event) {
    const { name, value } = event.target;
    if (name.includes('.')) {
      return;
    }
    this.appService.updateFieldProperty(this.currentField.id, value, name);
    this.currentField[name] = value;
  }
}
