import { RadioButtonFieldComponent } from '../fields/radio-button-field/radio-button-field.component';
import { InputFieldComponent } from '../fields/input-field/input-field.component';
import { TableFieldComponent } from '../fields/table-field/table-field.component';
import { SelectFieldComponent } from '../fields/select-field/select-field.component';
import { CreateableTableComponent } from '../fields/createable-table/createable-table.component';
import { ButtonFieldComponent } from '../fields/button-field/button-field.component';
import { FormFieldComponent } from '../child-container/form-field/form-field.component';
import { ListFieldComponent } from '../child-container/list-field/list-field.component';
import { TabFieldComponent } from '../child-container/tab-field/tab-field.component';
import { FieldChildContainerComponent } from '../child-container/field-child-container/field-child-container.component';

export const FieldRenderSetting= {
    INPUT_TEXT: {
        componentName: InputFieldComponent
    },
    TABLE: {
        componentName: TableFieldComponent
    },
    DROPDOWNLIST: {
        componentName: SelectFieldComponent
    },
    CREATABLE_TABLE: {
        componentName: CreateableTableComponent
    },
    BUTTON:{
        componentName:ButtonFieldComponent
    },
    RADIO_BUTTON_GROUP:{
        componentName:RadioButtonFieldComponent
    },
    TABS:{
        componentName:TabFieldComponent
    },
    FORM:{
        componentName:FormFieldComponent
    },
    LIST:{
        componentName:ListFieldComponent
    },
    CHILD_DIV:{
        componentName:FieldChildContainerComponent
    }
    
}