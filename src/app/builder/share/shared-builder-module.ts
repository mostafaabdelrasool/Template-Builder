import { NgModule } from '@angular/core';
import { DataSettingComponent } from '../data-source/data-setting/data-setting.component';
import { DataSourceComponent } from '../data-source/data-source.component';
import { ComplexValueComponent } from '../complex-value/complex-value.component';
import { DataMapperSettingComponent } from '../data-mapper-setting/data-mapper-setting.component';
import { FieldEventComponent } from '../sidebar/field-event/field-event.component';
import { ApplyStyleDirective } from './Render/apply-style.directive';
import { HighlightDirective } from './Render/highlight.directive';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AngularMaterialModule } from 'src/app/angularMaterial/angularMaterial.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { SharedModule } from 'src/app/share/shared.module';
import { CodeEditorModule } from '@ngstack/code-editor';
import { InputValueHandler } from './Render/value.handler.directive';
import { ResizableModule } from 'angular-resizable-element';
@NgModule({
  imports: [CommonModule,
    FormsModule,
    AngularMaterialModule,
    FlexLayoutModule,
    AngularEditorModule,
    SharedModule,
    CodeEditorModule.forRoot(),
    ResizableModule],
  exports: [DataSettingComponent,
    DataSourceComponent,
    ComplexValueComponent,
    DataMapperSettingComponent,
    FieldEventComponent,
    ApplyStyleDirective,
    HighlightDirective,
    CodeEditorModule,
    ResizableModule,
    InputValueHandler
  ],
  declarations: [DataSettingComponent,
    DataSourceComponent,
    ComplexValueComponent,
    DataMapperSettingComponent,
    FieldEventComponent,
    ApplyStyleDirective,
    HighlightDirective,
    InputValueHandler
  ],
  providers: [],
  entryComponents: [DataSettingComponent,
    DataSourceComponent,
    ComplexValueComponent,
    DataMapperSettingComponent,
    FieldEventComponent]
})
export class SharedBuilderModule { }
