import { Injectable } from "@angular/core";
import { Fields, Style } from 'src/app/model/field';
import { Manager_Type } from 'src/app/model/manager';
import { BehaviorSubject } from 'rxjs';

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
  fieldStyleSubject:BehaviorSubject<Style>;
  constructor() {
    this.fields = new Array<Fields>();
    this.fieldStyleSubject=new BehaviorSubject<Style>(null);
  }

}
