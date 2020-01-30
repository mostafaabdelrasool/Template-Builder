import { Component, OnInit } from "@angular/core";
import { AppService } from '../../share/Render/app.service';
import { FieldType, Fields, ButtonFieldTypes, ButtonFieldCOLOR, ButtonField } from '../../model/field';
import { Containers, CardField } from '../../model/containers';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: "app-field-types",
  templateUrl: "./field-types.component.html",
  styleUrls: ["./field-types.component.scss"]
})

export class FieldTypesComponent implements OnInit {

  constructor(public appService: AppService, private _snackBar: MatSnackBar) {

  }
  addElement(type: FieldType, isContainer: boolean, isChildContainer: boolean) {

    if (isContainer) {
      this.addContainer(type);
    } else {
      this.addField(type, isContainer, isChildContainer)
    }
  }
  ngOnInit() {

  }
  addContainer(type: FieldType) {
    let container: Containers = {
      type: type, model: 'text', id: Date.now().toString(), style: this.appService.containerStyle,
       fields: [], classes: []
    };
    if (type === FieldType.CARD) {
      (<CardField>container).cardSubTitle = "Here is Sub-title";
      (<CardField>container).cardTitle = "Here is title";
      (<CardField>container).cardActions = [{ title: 'Action' }];
    }
    this.appService.containers.push(container)
    this.appService.currentContainer = container;
  }
  addField(type: FieldType, isContainer: boolean, isChildContainer: boolean) {
    let field: Fields = {
      type: type, model: 'text',
      id: Date.now().toString(), classes: [], style: {}, containerId: this.appService.currentContainer.id,
      placeholder: 'label', isContainer: isContainer,fieldEvent:[]
    };
    if (isChildContainer) {
      //because here we add field so fields prop. note exist in type field
      field["fields"] = [];
      field.isContainer = true;
    }
    switch (type) {
      case FieldType.RADIO_BUTTON_GROUP:
        field.radioButtonGroup = [{ value: '1', placeholder: 'Label' }];
        break;
      case FieldType.RADIO_BUTTON:
        if (!this.appService.currentField
          || this.appService.currentField.type !== FieldType.RADIO_BUTTON_GROUP) {
          this.openSnackBar("Please select Radio button group", "close");
          return;
        }
        this.appService.currentField.radioButtonGroup.push({
          value: this.appService.currentField.radioButtonGroup.length,
          placeholder: 'Label'
        })
        break;

      default:
        break;
    }
    this.appService.currentContainer.fields.push(field);
  }
  addButton(buttonType: ButtonFieldTypes, event) {
    const color = ButtonFieldCOLOR[event.toElement.innerText];
    let button: ButtonField = {
      type: FieldType.BUTTON, model: 'text', id: Date.now().toString(), value: event.toElement.innerText,
      style: {}, classes: [], buttonType: buttonType, buttonColor: color,fieldEvent:[]
    };
    this.appService.currentContainer.fields.push(button)
  }
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 3000,
    });
  }
}
