import { Injectable } from "@angular/core";
import { Fields, FieldType, ButtonField } from 'src/app/builder/model/field';
import { Manager_Type } from 'src/app/builder/model/manager';
import { Containers } from 'src/app/builder/model/containers';
import { FieldDataSource } from '../../model/data-source';
import { Style } from '../../model/style';
import { BehaviorSubject, Observable } from 'rxjs';
import { moveItemInArray } from '@angular/cdk/drag-drop';
/**
 * @description
 * @class
 */
@Injectable()
export class AppService {

  containers: Containers[];
  currentField: Fields;
  openFieldTypes = false;
  private openProperties = false;
  currentContainer: Containers;
  containerStyle: Style;
  dataSources: FieldDataSource[] = [];
  allFields: Fields[] = [];
  allContainers: Containers[] = [];
  currentFieldSubject: BehaviorSubject<Fields>;
  constructor() {
    this.containerStyle = {
      height: 'auto',
      border: "1px dashed #e9e4e4",
      paddingTop: "5px",
      paddingRight: "5px",
      paddingBottom: "5px",
      paddingLeft: "5px",
      minHeight: "100%",
      width: "98%",
      fxFlex: {}
    }
    this.currentContainer = {
      model: undefined,
      type: FieldType.DIV, id: Date.now().toString(), fields: [], style: this.containerStyle, isContainer: true
    };
    this.containers = [Object.assign({}, this.currentContainer)];
    this.allFields.push(this.currentContainer);
    this.allContainers.push(this.currentContainer);
    this.currentFieldSubject = new BehaviorSubject<Fields>(this.currentField)
  }
  selectField(field: Fields) {
    if (this.currentField && field.id === this.currentField.id) {
      event.stopPropagation();
      return;
    }
    field.isSelected = true;
    this.currentField = Object.assign({}, field);
    if (field.isContainer) {
      this.currentContainer = Object.assign({}, <Containers>field);
    }
    this.openProperties = true;
    this.currentFieldSubject.next(this.currentField);
    event.stopPropagation();
  }
  getDefaultContainer(): Containers {
    return Object.assign({}, {
      model: undefined,
      type: FieldType.DIV, id: Date.now().toString(), fields: [], style: this.containerStyle, isContainer: true
    });
  }
  copyField(field: Fields, index: number) {
    const newField = JSON.parse(JSON.stringify(field));
    newField.id = Date.now().toString();
    if (newField.isContainer && newField.fields) {
      newField.fields.forEach(f => {
        f.id = Date.now().toString();
        f.containerId = newField.id;
      });
    }
    this.currentField = Object.assign({}, newField);
    let container = this.allContainers.find(x => x.id === field.containerId)
    if (container) {
      container.fields.splice(index, 0, newField);
    } else {
      //parent is root container
      this.containers[0].fields.splice(index, 0, newField);
    }
    if (field.isContainer) {
      this.allContainers.push(newField);
    }
    this.allFields.push(newField);
  }
  deleteField(field: Fields, index: number) {
    const allIndex = this.allFields.findIndex(x => x.id === field.id)
    this.allFields.splice(allIndex, 1);
    let parentContainer = this.allContainers.find(x => x.id === field.containerId);
    if (parentContainer) {
      parentContainer.fields.splice(index, 1);
    } else {
      //root container
      this.containers[0].fields.splice(index, 1);
    }
  }
  updateFieldStyle(field: Fields) {
    if (field) {
      const currentField = this.allFields.find(x => x.id === field.id);
      if (currentField) {
        const style = { ...field.style }
        //this work around to detect child property change;
        currentField.style = undefined;
        currentField.style = style
      }
    }
  }
  togglePropertiesSideBar(): void {
    if (this.currentField) {
      this.openProperties = !this.openProperties;
    }
  }
  getOpenProperties(): boolean {
    return this.openProperties;
  }
  openPropertiesSidebar() {
    this.openProperties = true;
  }
  addToContainers(container: Containers) {
    if (container) {
      this.allFields.push(container);
      this.allContainers.push(container);
    }
  }
  createNewField(option) {
    let field: Fields = {
      type: option.type, model: '', value: option.text || '', fullWidth: option.fullWidth,
      id: Date.now().toString(), classes: [], style: {
        marginBottom: '5px',
        marginLeft: '5px',
        marginRight: '5px',
        marginTop: '5px',
        paddingBottom: '0px',
        paddingLeft: '0px',
        paddingRight: '0px',
        paddingTop: '0px',
        fxFlex: {}
      }, containerId: this.currentContainer.id,
      placeholder: 'placeholder', isContainer: option.isContainer, fieldEvent: [],
      name: 'Field' + (this.allFields.length + 1), category: option.category, label: "label"
    };
    if (option.isChildContainer) {
      //because here we add field so fields prop. note exist in type field
      field["fields"] = [];
      field.isContainer = true;
      field.style.width = '99%';
      this.allContainers.push(<Containers>field);
    }
    if (field.type === FieldType.TABLE) {
      field.fullWidth = true
    }
    if (field.fullWidth) {
      field.style.width='99%';
      field.style.overflow="auto"
    }
    this.addField(field)
  }
  selectCurrentField(field: Fields) {
    if (field) {
      this.currentFieldSubject.next(field);
      this.currentField = Object.assign({}, field);
      this.currentContainer = Object.assign({}, <Containers>field);
    }
  }
  updateFieldProperty(fieldId: string, value: any, propName: string) {
    if (fieldId && value) {
      let currentField = this.allFields.find(x => x.id === fieldId);
      if (currentField) {
        currentField[propName] = value;
      }
    }
  }
  changePositionInDifferentContainer(data: any, newContainerId: string) {
    let field = this.allFields.find(x => x.id === data.id);
    if (field) {
      const fieldContainer = this.allContainers.find(x => x.id === data.containerId);
      if (fieldContainer) {
        const index = fieldContainer.fields.findIndex(x => x.id === data.id);
        fieldContainer.fields.splice(index, 1)
        field.containerId = newContainerId;
        this.currentContainer.fields.push(field);
      }
    }
  }
  changePositionInSameContainer(data: any, currentHoverFieldId: string) {
    const currentContainer = this.allContainers.find(x => x.id === data.containerId);
    if (currentContainer) {
      const prev = currentContainer.fields.findIndex(x => x.id === data.id)
      const current = currentContainer.fields.findIndex(x => x.id === currentHoverFieldId);
      moveItemInArray(currentContainer.fields, prev, current);
    }
  }
  addField(field: Fields) {
    this.currentContainer.fields.push(field);
    this.allFields.push(field);
  }
}
