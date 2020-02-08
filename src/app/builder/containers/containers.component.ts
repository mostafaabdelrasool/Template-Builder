import { Component, OnInit } from "@angular/core";
import { Containers, CardField } from '../model/containers';
import { Manager_Type } from '../model/manager';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { FieldType, Fields, ButtonFieldTypes, ButtonField, ButtonFieldCOLOR } from '../model/field';
import { HighlightColors } from '../share/Render/highlight.directive';
import { AppService } from '../share/Render/app.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: "app-containers",
  templateUrl: "./containers.component.html",
  styleUrls: ["./containers.component.scss"],
})

export class ContainersComponent implements OnInit {
  color: HighlightColors;
  divType: FieldType;
  constructor(public appService: AppService, private _snackBar: MatSnackBar) {
    this.color = HighlightColors.BLACK;
    this.divType = FieldType.DIV
  }
  selectItem(event, container: Containers) {
    container.isSelected = true;
    this.appService.sidebarOpened = true;
    this.appService.currentManager = Manager_Type.STYLES;
    this.appService.currentField = undefined;
    setTimeout(() => {
      this.appService.currentField = container;
      this.appService.currentContainer = container;
    });
    event.stopPropagation();
  }
  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(this.appService.containers, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }

  dropField(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(this.appService.currentContainer.fields, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }

  ngOnInit() {

  }
  onDragOver(event, container:Containers) {
    if(container)
    this.selectItem(event,container);
    event.preventDefault();
  }
  onDrop(event) {
    const data = JSON.parse(event.dataTransfer.getData('text'));
    this.addElement(data)
    event.stopPropagation();
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
      placeholder: 'label', isContainer: isContainer, fieldEvent: []
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
  addButton(buttonType: ButtonFieldTypes, color) {
    let button: ButtonField = {
      type: FieldType.BUTTON, model: 'text', id: Date.now().toString(), value: color,
      style: {}, classes: [], buttonType: buttonType, buttonColor: color, fieldEvent: []
    };
    this.appService.currentContainer.fields.push(button)
  }
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 3000,
    });
  }
  addElement(data) {
    if (data.type === FieldType.BUTTON) {
      this.addButton(data.buttonType, data.color)
    }
    else if (data.isContainer) {
      this.addContainer(data.type);
    } else {
      this.addField(data.type, data.isContainer, data.isChildContainer)
    }
  }
}
