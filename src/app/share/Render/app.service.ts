import { Injectable } from "@angular/core";
import { Fields } from 'src/app/model/field';

/**
 * @description
 * @class
 */
@Injectable()
export class AppService {
  fields: Fields[];
  currentField: Fields;
  sidebarOpened: boolean = false;
  constructor() {
    this.fields = new Array<Fields>();
  }

}
