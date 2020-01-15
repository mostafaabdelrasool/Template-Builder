import { Injectable } from "@angular/core";
import { Fields } from 'src/app/model/field';
import { Manager_Type } from 'src/app/model/manager';

/**
 * @description
 * @class
 */
@Injectable()
export class AppService {
  fields: Fields[];
  currentField: Fields;
  sidebarOpened: boolean = false;
  currentManager = Manager_Type.NONE;
  constructor() {
    this.fields = new Array<Fields>();
  }

}
