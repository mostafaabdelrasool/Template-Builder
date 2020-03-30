import { Component, OnInit, Input } from '@angular/core';
import { AppService } from '../share/Render/app.service';
import { Fields, SelectField, FieldType, InputField } from '../model/field';
import { CardField } from '../model/containers';
import { SharedService } from 'src/app/share/shared.service';
import { objectKeys } from 'src/app/share/object-func';
import { MatDialog } from '@angular/material';
import { StyleToCssComponent } from './style--to-css/style--to-css.component';

@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.scss'],
})
export class PropertiesComponent implements OnInit {
  currentField: Fields;
  applyStyleInClass: boolean;
  boxShadow: { y?: string, x?: string, blur?: string, color?: string, spread?: string };
  modelProps: string[];
  constructor(public appService: AppService, public sharedService: SharedService,
    public dialog: MatDialog) {
    this.boxShadow = {};
  }

  ngOnInit() {
    this.currentField = this.appService.currentField;
    this.currentField.classes = this.currentField.classes || [];
    if (this.sharedService.model) {
      this.modelProps = objectKeys(JSON.parse(this.sharedService.model));
      if (this.sharedService.instanceName) {
        this.modelProps = this.modelProps.map(x =>
          this.sharedService.instanceName + '.' + x
        )
      }
    }
  }
  addClass = className => {
    return this.currentField.classes.push(className);
  }
  updateStyle(event, styleName) {
    this.currentField.style[styleName] = event;
    this.appService.filedValueChanged();
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
    this.appService.filedValueChanged();
  }
  openCssCode() {
    if (this.currentField.applyStyleInClass) {
      const dialogRef = this.dialog.open(StyleToCssComponent);

      dialogRef.afterClosed().subscribe(result => {
        this.currentField.classes.push(result);
      });
    }
  }
  getFieldDataStructure() {
    return (<SelectField>this.currentField).dataSource ?
      (<SelectField>this.currentField).dataSource.dataStructure : null;
  }
  typeValueChanged(event) {
    let input =(<InputField>this.currentField)
    input.typeName = event.value;
    if (event.value === 'datetime') {
      input.type = FieldType.DATEPICKER;
      input.typeName='';
    }else{
      input.type = FieldType.INPUT_TEXT;
    }
    this.appService.filedValueChanged();
  }

}
