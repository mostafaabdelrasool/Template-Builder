import { Injectable } from "@angular/core";
import { Fields, Style, FieldType } from 'src/app/builder/model/field';
import { Manager_Type } from 'src/app/builder/model/manager';
import { Containers } from 'src/app/builder/model/containers';

/**
 * @description
 * @class
 */
@Injectable()
export class AppService {
  containers: Containers[];
  currentField: Fields;
  sidebarOpened: boolean = false;
  currentManager = Manager_Type.NONE;
  currentContainer: Containers;
  containerStyle: Style
  constructor() {
    this.containerStyle = {
      height: 'auto',
      border: "1px dashed #e9e4e4",
      boxShadow: "0 0 4px #eee2e2",
      borderRadius:"5px",
      marginTop:"5px",
      marginRight:"5px",
      marginBottom:"5px",
      marginLeft:"5px",
      paddingTop:"5px",
      paddingRight:"5px",
      paddingBottom:"5px",
      paddingLeft:"5px",
      minHeight: "10em",
      width: "98%",
    }
    this.currentContainer = {
      model: undefined,
      type: FieldType.DIV, id: Date.now().toString(), fields: [], style: this.containerStyle,isContainer:true
    };
    this.containers = [Object.assign({}, this.currentContainer)];
  }
  selectField(field: Fields) {
    field.isSelected = true;
    this.sidebarOpened = true;
    this.currentManager = Manager_Type.STYLES;
    this.currentField = undefined;
    setTimeout(() => {
      //this is a work around because angular doesn't detect change of child properties so i clear all and set again
      this.currentField = field;
    }, 100);
    event.stopPropagation();
  }
}
