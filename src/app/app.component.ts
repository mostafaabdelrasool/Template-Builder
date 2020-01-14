import { Component } from '@angular/core';
import { SanitizeHtmlPipe } from './share/Render/sanitizer';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { ThrowStmt } from '@angular/compiler';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'template-builder';
  fields: Fields[];
  selectedField: Fields;
  constructor() {
    this.fields = new Array<Fields>();
  }
  addElement(type: FieldType) {
    const field: Fields = {
      type: FieldType.INPUT_TEXT, model: 'text', id: Date.now().toString(), style: {}
    };
    this.fields.push(field);
  }
  selectItem(field: Fields) {
    field.isSelected = true;
    this.selectedField = field;
    this.fields.forEach(x => {
      if (x.id != field.id) {
        x.isSelected = false;
      }
    })
  }
  drop(event: CdkDragDrop<string[]>, item: Fields) {
    if (event.previousContainer === event.container) {
      moveItemInArray(this.fields, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }
}
export class Fields {
  type: FieldType;
  model: string;
  isSelected?: Boolean;
  id: string;
  classes?: string[];
  name?: string
  style?: Style
}
export enum FieldType {
  INPUT_TEXT, INPUT_NUMBER, DD
}
export interface Style {
  position?: string;
  display?: string;
  width?: string;
  height?: string;
  top?: string;
  right?: string;
  left?: string;
  bottom?: string;
  maxWidth?: string;
  maxHeight?: string;
  marginTop?: string;
  marginRight?: string;
  marginBottom?: string;
  marginLeft?: string;
  paddingTop?: string;
  paddingRight?: string;
  paddingBottom?: string;
  paddingLeft?: string;
}