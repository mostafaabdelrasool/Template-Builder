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
  @Input() currentField: Fields
  constructor(private appService: AppService) {

  }

  ngOnInit() {
    this.currentField.classes = this.currentField.classes || [];
  }
  addClass = className => {
    return this.currentField.classes.push(className);
  }
  updateStyle(event, styleName) {
    this.currentField.style[styleName] = event;
    this.filedValueChanged('');
  }
  filedValueChanged(event) {
    this.appService.fieldStyleSubject.next(this.currentField.style)
  }
  setFlexSetting(flexType, value) {
    this.currentField.style[flexType] = value;
    this.filedValueChanged('');
  }
  addNewCardAction() {
    const length = (<CardField>this.currentField).cardActions.length;
    (<CardField>this.currentField).cardActions.push({ title: 'Action title ' + length })
  }
}
