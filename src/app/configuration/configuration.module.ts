import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigurationComponent } from './configuration.component';
import { FormsModule } from '@angular/forms';
import { AngularMaterialModule } from '../angularMaterial/angularMaterial.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ConfigRoutes } from './config.routing';
import { ComponentConfigComponent } from './component-config/component-config.component';
import { CodeEditorModule } from '@ngstack/code-editor';

@NgModule({
  imports: [
    ConfigRoutes,
    CommonModule,
    FormsModule,
    AngularMaterialModule,
    FlexLayoutModule,
    CodeEditorModule.forRoot()
  ],
  declarations: [ConfigurationComponent,ComponentConfigComponent],
})
export class ConfigurationModule { }
