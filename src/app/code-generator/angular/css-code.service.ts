import { Injectable } from "@angular/core";
import { Style } from 'src/app/builder/model/style';

/**
 * @description
 * @class
 */
@Injectable()
export class CssCodeService {

  constructor() {

  }
  addCssFromStyle(style: Style,className:String) {
    let code = `.${className}{`
    Object.keys(style).forEach(propName => {
      if (typeof style[propName] === 'string') {
        code += `${propName.replace(/([A-Z])/g, '-$1').trim().toLowerCase()}:${style[propName]};`;
      }
    });
    code+="}"
    return code;
  }

}
