import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FieldsComponent } from './fields/fields.component';
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

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AngularMaterialModule,
    FlexLayoutModule,
    NgSelectModule,
    ColorPickerModule,
    BuilderRoutes
  ],
  declarations: [
    SanitizeHtmlPipe,
    PropertiesComponent,
    MeasureUnitComponent,
    FieldsComponent, TopNavComponent,
    FieldTypesComponent,
    ApplyStyleDirective,
    HighlightDirective,
    ContainersComponent,
    ChildContainerComponent,
    BuilderComponent,
    FlexSettingComponent],
  providers: [AppService],
  // exports: [BuilderComponent]
})
export class BuilderModule { }