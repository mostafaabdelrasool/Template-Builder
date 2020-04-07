import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopNavComponent } from './top-nav/top-nav.component';
import { ContainersComponent } from './containers/containers.component';
import { ChildContainerComponent } from './child-container/child-container.component';
import { FormsModule } from '@angular/forms';
import { BuilderComponent } from './builder.component';
import { AngularMaterialModule } from '../angularMaterial/angularMaterial.module';
import { SanitizeHtmlPipe } from './share/Render/sanitizer';
import { PropertiesComponent } from './sidebar/properties.component';
import { MeasureUnitComponent } from './sidebar/measureUnit.component';
import { FieldTypesComponent } from './sidebar/field-types/field-types.component';
import { ApplyStyleDirective } from './share/Render/apply-style.directive';
import { HighlightDirective } from './share/Render/highlight.directive';
import { AppService } from './share/Render/app.service';
import { NgSelectModule } from '@ng-select/ng-select';
import { ColorPickerModule } from 'ngx-color-picker';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BuilderRoutes } from './builder.routing';
import { FlexSettingComponent } from './sidebar/flex-setting/flex-setting.component';
import { TypographyComponent } from './sidebar/typography/typography.component';
import { CodeService } from './share/Render/code-service.service';
import { StyleToCssComponent } from './sidebar/style--to-css/style--to-css.component';
import { DataSettingComponent } from './data-source/data-setting/data-setting.component';
import { HttpClientModule } from '@angular/common/http';
import { ResizableModule } from 'angular-resizable-element';
import { TabFieldComponent } from './child-container/tab-field/tab-field.component';
import { SharedModule } from '../share/shared.module';
import { DataSourceComponent } from './data-source/data-source.component';
import { EditInPlaceComponent } from '../share/edit-in-place/edit-in-place.component';
import { ComplexValueComponent } from './complex-value/complex-value.component';
import { DataMapperSettingComponent } from './data-mapper-setting/data-mapper-setting.component';
import { FieldEventComponent } from './sidebar/field-event/field-event.component';
import { CodeEditorModule } from '@ngstack/code-editor';
import { FormFieldComponent } from './child-container/form-field/form-field.component';
import { BuilderService } from './builder.service';
import { FieldModule } from './fields/field.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AngularMaterialModule,
    FlexLayoutModule,
    NgSelectModule,
    ColorPickerModule,
    BuilderRoutes,
    HttpClientModule,
    ResizableModule,
    SharedModule,
    CodeEditorModule.forRoot(),
   
    FieldModule
  ],
  declarations: [
    SanitizeHtmlPipe,
    PropertiesComponent,
    MeasureUnitComponent,
    TopNavComponent,
    FieldTypesComponent,
    ApplyStyleDirective,
    HighlightDirective,
    ContainersComponent,
    ChildContainerComponent,
    BuilderComponent,
    TypographyComponent,
    FlexSettingComponent,
    StyleToCssComponent,
    DataSettingComponent,
    TabFieldComponent,
    DataSourceComponent,
    ComplexValueComponent,
    DataMapperSettingComponent,
    FieldEventComponent,
    FormFieldComponent,
  ],
  providers: [AppService, CodeService,BuilderService],
  entryComponents: [StyleToCssComponent, DataSettingComponent,ComplexValueComponent,DataMapperSettingComponent],
  exports: [ TabFieldComponent, EditInPlaceComponent, ChildContainerComponent, ContainersComponent, ApplyStyleDirective]
})
export class BuilderModule { }
