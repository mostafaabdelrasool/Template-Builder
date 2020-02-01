import { Injectable } from "@angular/core";
import { Fields, Style, FieldType, ButtonField, ButtonFieldTypes, FieldEvent, AngularFieldEventType } from 'src/app/builder/model/field';
import { Containers } from 'src/app/builder/model/containers';
@Injectable({
    providedIn: 'root'
})
export class HtmlCodeService {
    constructor() {
    }
    inputCode(field: Fields): string {
        let code = ` <mat-form-field [(ngModel)]="${field.model}" ${this.commonProps(field)}>
            <input ${this.generateEvent(field.fieldEvent)} [required]="${field.required || ''}" type="${this.getTypeName(field.type)}" matInput placeholder="${field.placeholder || ''}" value="${field.value || ''}">
           </mat-form-field>`;
        return code;
    }
    checkBoxCode(field: Fields): string {
        return `<mat-checkbox  [required]="${field.required || ''}" [(ngModel)]="${field.model}" ${this.commonProps(field)}>
        ${field.placeholder || ''}</mat-checkbox>`;
    }
    datepickerCode(field: Fields): string {
        return `<mat-form-field   id="${field.id}" ${this.commonProps(field)}>
                <input readonly="true" [required]="${field.required || ''}" [min]="${field.min}" [max]="${field.max}" [(ngModel)]="${field.model}" matInput [matDatepicker]="picker" placeholder="${field.placeholder || ''}">
                <mat-datepicker-toggle matSuffix [for]="picker"></mat-datepicker-toggle>
                <mat-datepicker [startAt]="${field.startDate || ''}" #picker startView="year"></mat-datepicker>
            </mat-form-field>`;
    }
    RadioButtonGroupCode(field: Fields): string {
        let code = `<mat-radio-group [required]="${field.required || ''}" fxLayout="row" fxLayoutGap="5px" [(ngModel)]="${field.model}" 
        ${this.commonProps(field)}>`;
        field.radioButtonGroup.forEach(r => {
            code += `<mat-radio-button value="${field.value || ''}">${field.placeholder || ''}</mat-radio-button>`
        })
        code += '</mat-radio-group>'
        return code;
    }
    sliderCode(field: Fields): string {
        let code =
            `<div> 
         <label>${field.placeholder}</label>
         <mat-slider  ${this.commonProps(field)} [max]="${field.max || ''}" [min]="${field.min || ''}" [step]="${field.step || ''}">
         </mat-slider>
       </div>`;
        return code;
    }
    buttonCode(field: ButtonField): string {
        let code = `<button ${field.buttonType} color="${field.buttonColor}">`;
        if (field.buttonType === (ButtonFieldTypes.ICON || ButtonFieldTypes.MINI_FAB || ButtonFieldTypes.FAB)) {
            code += `<mat-icon>${field.value}</mat-icon>`
        } else {
            code += '\n' + field.value;
        }
        code += '\n</button>';
        return code;
    }
    divCode(container: Containers): string {
        let code = `<div  ${this.commonProps(container)}>`;
        container.fields.forEach(x => {
            switch (x.type) {
                case FieldType.INPUT_NUMBER:
                case FieldType.INPUT_TEXT:
                    code += "\n" + this.inputCode(x)
                    break;
                case FieldType.CHECKBOX:
                    code += '\n' + this.checkBoxCode(x);
                    break;
                case FieldType.DATEPICKER:
                    code += '\n' + this.datepickerCode(x);
                    break;
                case FieldType.RADIO_BUTTON_GROUP:
                    code += '\n' + this.RadioButtonGroupCode(x);
                    break;
                case FieldType.SLIDER:
                    code += '\n' + this.sliderCode(x);
                    break;
                case FieldType.BUTTON:
                    code += '\n' + this.buttonCode(<ButtonField>x);
                    break;
                default:
                    break;
            }
        })
        code += "\n </div> \n"
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
    private generateEvent(fieldEvents: FieldEvent[]) {
        let code = '';
        fieldEvents.forEach(x => {
            switch (x.type) {
                case AngularFieldEventType.Change:
                    code += `(${AngularFieldEventType.Change})="${x.name}($event)"`
                    break;
                case AngularFieldEventType.Click:
                    code += `(${AngularFieldEventType.Click})="${x.name}($event)"`
                    break;
                default:
                    break;
            }
        });
        return code;

    }
    private commonProps(field: Fields): string {
        const style = !field.applyStyleInClass ? `[style]="${this.getStyle(field.style)}"` : '';
        let code = `id="${field.id}" ${style} class="${field.classes ? field.classes.join(' ') : ''}"`;
        return code;
    }
}

