import { Injectable } from "@angular/core";
import { Fields, Style, FieldType } from 'src/app/model/field';
import { Containers } from 'src/app/model/containers';
@Injectable({
    providedIn: 'root'
})
export class HtmlCodeService {
    constructor() {
    }
    inputCode(field: Fields): string {
        return `<mat-form-field [(ngModel)]="${field.model}" id="${field.id}" [style]="${this.getStyle(field.style)}" 
    class="${field.classes ? field.classes.join(' ') : ''}">
     <input type="${this.getTypeName(field.type)}" matInput placeholder="${field.placeholder || ''}" value="${field.value || ''}">
  </mat-form-field>`;
    }
    divCode(container: Containers): string {
        let code = `<div class="${container.classes ? container.classes.join(' ') : ''}" [style]="${this.getStyle(container.style)}">`;
        container.fields.forEach(x => {
            switch (x.type) {
                case FieldType.INPUT_NUMBER:
                case FieldType.INPUT_TEXT:
                    code += "\n" + this.inputCode(x)
                    break;

                default:
                    break;
            }
        })
        code += "</div> \n"
        return code;
    }
    generate(containers: Containers[]): string {
        let code = '';
        containers.forEach(c => {
            switch (c.type) {
                case FieldType.DIV:
                    code += this.divCode(c);
                    break;

                default:
                    break;
            }
        })
        return code;
    }
    private getStyle(style: Style) {
        let result = '{';
        Object.keys(style).forEach(key => {
            result += key + ":" + style[key] + ',';
        });
        result += '}';
        return result;
    }
    private getTypeName(type): String {
        switch (type) {
            case 0:
                return 'text'
            case 1:
                return 'number'
            default:
                return ''
        }
    }
}
