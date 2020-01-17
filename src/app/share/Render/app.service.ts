import { Injectable } from "@angular/core";
import { Fields, Style, FieldType } from 'src/app/model/field';
import { Manager_Type } from 'src/app/model/manager';
import { BehaviorSubject } from 'rxjs';
import { Containers } from 'src/app/model/containers';

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
  fieldStyleSubject: BehaviorSubject<Style>;
  currentContainer: Containers;
  constructor() {
    this.currentContainer = {
      model: undefined,
      type: FieldType.DIV, id: Date.now().toString(), fields: [],style:{}
    };
    this.containers = [Object.assign({},this.currentContainer)];
    this.fieldStyleSubject = new BehaviorSubject<Style>(null);
  }

}
