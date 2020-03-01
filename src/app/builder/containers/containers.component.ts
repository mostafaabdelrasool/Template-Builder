import { Component, OnInit } from "@angular/core";
import { Containers, CardField } from '../model/containers';
import { Manager_Type } from '../model/manager';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { FieldType, Fields, ButtonFieldTypes, ButtonField, ButtonFieldCOLOR } from '../model/field';
import { HighlightColors } from '../share/Render/highlight.directive';
import { AppService } from '../share/Render/app.service';
import { MatSnackBar } from '@angular/material';
import { ResizeEvent } from 'angular-resizable-element';

@Component({
  selector: "app-containers",
  templateUrl: "./containers.component.html",
  styleUrls: ["./containers.component.scss"],
})

export class ContainersComponent implements OnInit {
  color: HighlightColors;
  divType: FieldType;
  currentHoverField: Fields;
  constructor(public appService: AppService, private _snackBar: MatSnackBar) {
    this.color = HighlightColors.BLACK;
    this.divType = FieldType.DIV
  }
  selectItem = (event, container: Containers, selectItemOnly = false) => {
    if (this.appService.currentField && container.id === this.appService.currentField.id) {
      return;
    }
    container.isSelected = true;
    this.appService.sidebarOpened = true;
    //if drop item don't open the manager
    if (!selectItemOnly) {
      this.appService.currentManager = Manager_Type.STYLES;
    }
    this.appService.currentField = undefined;
    setTimeout(() => {
      this.appService.currentField = container;
      this.appService.currentContainer = container;
    }, 300);
    event.stopPropagation();
  }
  startReposition(event, field: Fields) {
    const data = { id: field.id, containerId: field.containerId, changePosition: true }
    event.dataTransfer.effectAllowed = 'move';
    event
      .dataTransfer
      .setData('text/plain', JSON.stringify(data));
  }
  ngOnInit() {

  }
  onDragOver(event, field: Containers = null) {
    this.currentHoverField = field;
    if (field && field.isContainer)
      this.selectItem(event, field, true)
    event.preventDefault();
    event.stopPropagation();
  }
  onDrop(event) {
    const trans = event.dataTransfer.getData('text');
    if (trans) {
      const data = JSON.parse(trans);
      if (data.changePosition) {
        const prev = this.appService.currentContainer.fields.findIndex(x => x.id === data.id);
        const current = this.appService.currentContainer.fields.findIndex(x => x.id === this.currentHoverField.id);
        moveItemInArray(this.appService.currentContainer.fields, prev, current);
      } else {
        this.addElement(data)
      }
    }
    event.stopPropagation();
  }
  addContainer(type: FieldType) {
    let container: Containers = {
      type: type, model: 'text', id: Date.now().toString(), style: this.appService.containerStyle,
      fields: [], classes: [], isContainer: true
    };
    if (type === FieldType.CARD) {
      (<CardField>container).cardSubTitle = "Here is Sub-title";
      (<CardField>container).cardTitle = "Here is title";
      (<CardField>container).cardActions = [{ title: 'Action' }];
    }
    this.appService.containers.push(container)
    this.appService.currentContainer = container;
  }
  addField(option) {
    let field: Fields = {
      type: option.type, model: 'text', value: option.text || '', fullWidth: option.fullWidth,
      id: Date.now().toString(), classes: [], style: {}, containerId: this.appService.currentContainer.id,
      placeholder: 'label', isContainer: option.isContainer, fieldEvent: []
    };
    if (option.isChildContainer) {
      //because here we add field so fields prop. note exist in type field
      field["fields"] = [];
      field.isContainer = true;
    }
    if (field.type === FieldType.TABLE) {
      field.fullWidth = true
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
      this.addField(data)
    }
  }
  onResizeEnd(event: ResizeEvent, field: Fields): void {
    const parent = document.getElementById(field.containerId)
    const newWidthRatio=(event.rectangle.width /parent.offsetWidth)*100;
    field.style.width = newWidthRatio.toFixed(2)+ '%';
    field.style.height = event.rectangle.height+ 'px';
    this.appService.filedValueChanged();
  }
}
  // switch (option.type) {
    //   case FieldType.RADIO_BUTTON_GROUP:
    //     field.radioButtonGroup = [{ value: '1', placeholder: 'Label' }];
    //     break;
    //   case FieldType.RADIO_BUTTON:
    //     if (!this.appService.currentField
    //       || this.appService.currentField.type !== FieldType.RADIO_BUTTON_GROUP) {
    //       this.openSnackBar("Please select Radio button group", "close");
    //       return;
    //     }
    //     this.appService.currentField.radioButtonGroup.push({
    //       value: this.appService.currentField.radioButtonGroup.length,
    //       placeholder: 'Label'
    //     })
    //     break;

    //   default:
    //     break;
    // }