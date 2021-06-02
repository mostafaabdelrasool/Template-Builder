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
import { StyleToCssComponent } from './sidebar/style--to-css/style--to-css.component';
import { DataSettingComponent } from './data-source/data-setting/data-setting.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../share/shared.module';
import { EditInPlaceComponent } from '../share/edit-in-place/edit-in-place.component';
import { ComplexValueComponent } from './complex-value/complex-value.component';
import { DataMapperSettingComponent } from './data-mapper-setting/data-mapper-setting.component';
import { BuilderService } from './builder.service';
import { FieldModule } from './fields/field.module';
import { ChildContainerModule } from './child-container/child-container-module';
import { SharedBuilderModule } from './share/shared-builder-module';
import { FieldPropertySettingComponent } from './sidebar/field-property-setting/field-property-setting.component';
import { FieldValueSettingComponent } from './sidebar/field-value-setting/field-value-setting.component';
import { ComponentConfigComponent } from './component-config/component-config.component';
import { FormLoadingComponent } from './form-loading/form-loading.component';
import { ButtonClickHandlerComponent } from './fields/button-field/Button-Click-Handler/Button-Click-Handler.component';
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
    FieldPropertySettingComponent,
    FieldValueSettingComponent,
    ComponentConfigComponent,
    FormLoadingComponent,
    ButtonClickHandlerComponent
  ],
  providers: [AppService, BuilderService],
  entryComponents: [StyleToCssComponent, DataSettingComponent, ComplexValueComponent,
    DataMapperSettingComponent, ComponentConfigComponent, FormLoadingComponent, ButtonClickHandlerComponent],
  exports: [EditInPlaceComponent, ContainersComponent, SharedBuilderModule]
})
export class BuilderModule { }
