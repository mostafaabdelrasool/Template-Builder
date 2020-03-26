import { Injectable } from "@angular/core";
import { Fields, FieldType } from 'src/app/builder/model/field';
import { Manager_Type } from 'src/app/builder/model/manager';
import { Containers } from 'src/app/builder/model/containers';
import { FieldDataSource } from '../../model/data-source';
import { Style } from '../../model/style';

/**
 * @description
 * @class
 */
@Injectable()
export class AppService {
  containers: Containers[];
  currentField: Fields;
  openFieldTypes=false;
  openProperties=false;
  currentContainer: Containers;
  containerStyle: Style;
  dataSources: FieldDataSource[] = [];
  allFields: Fields[] = [];
  allContainers: Containers[]=[];

  constructor() {
    this.containerStyle = {
      height: 'auto',
      border: "1px dashed #e9e4e4",
      boxShadow: "0 0 4px #eee2e2",
      borderRadius: "5px",
      marginTop: "5px",
      marginRight: "5px",
      marginBottom: "5px",
      marginLeft: "5px",
      paddingTop: "5px",
      paddingRight: "5px",
      paddingBottom: "5px",
      paddingLeft: "5px",
      minHeight: "10em",
      width: "98%",
    }
    this.currentContainer = {
      model: undefined,
      type: FieldType.DIV, id: Date.now().toString(), fields: [], style: this.containerStyle, isContainer: true
    };
    this.containers = [Object.assign({}, this.currentContainer)];
  }
  selectField(field: Fields) {
    if (this.currentField && field.id === this.currentField.id) {
      event.stopPropagation();
      return;
    }
    field.isSelected = true;
    this.openProperties = true;
    this.currentField = undefined;
    // this.selectFieldContainer(field);
    setTimeout(() => {
      //this is a work around because angular doesn't detect change of child properties so i clear all and set again
      this.currentField = field;
    });
    event.stopPropagation();
  }
  filedValueChanged() {
    const style = { ...this.currentField.style }
    //this work around to detect child property change;
    this.currentField.style = undefined;
    this.currentField.style = style
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
    this.currentField = { ...newField };
    this.currentContainer.fields.splice(index, 0, newField);
    this.allFields.push(newField);
  }
  deleteField(field: Fields, index: number) {
    const allIndex = this.allFields.findIndex(x => x.id === field.id)
    this.allFields.splice(allIndex, 1);
    this.currentContainer.fields.splice(index, 1);
  }
}
