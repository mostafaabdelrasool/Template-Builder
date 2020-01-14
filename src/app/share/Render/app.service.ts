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
  constructor() {
    this.fields = new Array<Fields>();
  }

}
