import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FlexLayoutModule} from '@angular/flex-layout';
import { AngularMaterialModule } from './angularMaterial/angularMaterial.module';
import { SanitizeHtmlPipe } from './share/Render/sanitizer';
import { ResizableModule } from 'angular-resizable-element';
import { PropertiesComponent } from './sidebar/properties.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import { MeasureUnitComponent } from './sidebar/measureUnit.component';
import { CodeGeneratorModule } from './code-generator/code.generator.module';
import { FieldsComponent } from './fields/fields.component';
import { AppService } from './share/Render/app.service';
import { TopNavComponent } from './top-nav/top-nav.component';
import { FieldTypesComponent } from './sidebar/field-types/field-types.component';
import { ApplyStyleDirective } from './share/Render/apply-style.directive';
import { HighlightDirective } from './share/Render/highlight.directive';
import { ContainersComponent } from './containers/containers.component';
import { ChildContainerComponent } from './child-container/child-container.component';
import { ColorPickerModule } from 'ngx-color-picker';
@NgModule({
  declarations: [
    AppComponent,
    SanitizeHtmlPipe,
    PropertiesComponent,
    MeasureUnitComponent,
    FieldsComponent,TopNavComponent,
    FieldTypesComponent,
    ApplyStyleDirective,
    HighlightDirective,
    ContainersComponent,
    ChildContainerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    AngularMaterialModule,
    ResizableModule,
    NgSelectModule,
    FormsModule,
    CodeGeneratorModule,
    ColorPickerModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent],
 
})
export class AppModule { }
