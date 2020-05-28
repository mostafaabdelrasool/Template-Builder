import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AngularMaterialModule } from 'src/app/angularMaterial/angularMaterial.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { ListFieldComponent } from './list-field/list-field.component';
import { FormFieldComponent } from './form-field/form-field.component';
import { TabFieldComponent } from './tab-field/tab-field.component';
import { ChildContainerComponent } from './child-container.component';
import { SharedBuilderModule } from '../share/shared-builder-module';
import { FieldModule } from '../fields/field.module';
import { SharedModule } from 'src/app/share/shared.module';
import { FieldChildContainerComponent } from './field-child-container/field-child-container.component';

const components = [FormFieldComponent, ListFieldComponent, TabFieldComponent, ChildContainerComponent,FieldChildContainerComponent]
@NgModule({
    imports: [CommonModule,
        FormsModule,
        AngularMaterialModule,
        FlexLayoutModule,
        AngularEditorModule,
        SharedBuilderModule,
        FieldModule,
        SharedModule
    ],
    exports: components,
    declarations: [components],
    providers: [],
    entryComponents: [components]
})
export class ChildContainerModule { }
