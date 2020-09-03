import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopNavComponent } from './top-nav/top-nav.component';
import { ContainersComponent } from './containers/containers.component';
import { FormsModule } from '@angular/forms';
import { BuilderComponent } from './builder.component';
import { AngularMaterialModule } from '../angularMaterial/angularMaterial.module';
import { SanitizeHtmlPipe } from './share/Render/sanitizer';
import { PropertiesComponent } from './sidebar/properties.component';
import { MeasureUnitComponent } from './sidebar/measureUnit.component';
import { FieldTypesComponent } from './sidebar/field-types/field-types.component';
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
import { SharedModule } from '../share/shared.module';
import { EditInPlaceComponent } from '../share/edit-in-place/edit-in-place.component';
import { ComplexValueComponent } from './complex-value/complex-value.component';
import { DataMapperSettingComponent } from './data-mapper-setting/data-mapper-setting.component';
import { CodeEditorModule } from '@ngstack/code-editor';
import { BuilderService } from './builder.service';
import { FieldModule } from './fields/field.module';
import { ChildContainerModule } from './child-container/child-container-module';
import { SharedBuilderModule } from './share/shared-builder-module';
import { FieldPropertySettingComponent } from './sidebar/field-property-setting/field-property-setting.component';
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
    SharedModule,
    ChildContainerModule,
    FieldModule,
    SharedBuilderModule
  ],
  declarations: [
    SanitizeHtmlPipe,
    PropertiesComponent,
    MeasureUnitComponent,
    TopNavComponent,
    FieldTypesComponent,
    ContainersComponent,
    BuilderComponent,
    TypographyComponent,
    FlexSettingComponent,
    StyleToCssComponent,
    FieldPropertySettingComponent
  ],
  providers: [AppService, CodeService, BuilderService],
  entryComponents: [StyleToCssComponent, DataSettingComponent, ComplexValueComponent, DataMapperSettingComponent],
  exports: [ EditInPlaceComponent, ContainersComponent,SharedBuilderModule]
})
export class BuilderModule { }
