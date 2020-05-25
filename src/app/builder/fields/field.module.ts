import { NgModule } from '@angular/core';
import { FieldsComponent } from './fields.component';
import { TableFieldComponent } from './table-field/table-field.component';
import { SelectFieldComponent } from './select-field/select-field.component';
import { RichTextSettingComponent } from './rich-text-setting/rich-text-setting.component';
import { InputFieldComponent } from './input-field/input-field.component';
import { CreateableTableSettingComponent } from './createable-table/createable-table-setting/createable-table-setting.component';
import { CreateableTableComponent } from './createable-table/createable-table.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AngularMaterialModule } from 'src/app/angularMaterial/angularMaterial.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FieldActionComponent } from './field-action/field-action.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { OwlNativeDateTimeModule, OwlDateTimeModule } from 'ng-pick-datetime';
import { ButtonFieldComponent } from './button-field/button-field.component';
import { RadioButtonFieldComponent } from './radio-button-field/radio-button-field.component';
import { FieldService } from './fields.service';

const components = [FieldsComponent, TableFieldComponent, SelectFieldComponent, RichTextSettingComponent, InputFieldComponent,
    CreateableTableSettingComponent,
    CreateableTableComponent,FieldActionComponent,ButtonFieldComponent,RadioButtonFieldComponent]
@NgModule({
    imports: [CommonModule,
        FormsModule,
        AngularMaterialModule,
        FlexLayoutModule,
        NgxPaginationModule,
        AngularEditorModule,
        OwlDateTimeModule, OwlNativeDateTimeModule],
    exports: components,
    declarations: [components],
    providers: [FieldService],
    entryComponents: [components]
})
export class FieldModule { }
