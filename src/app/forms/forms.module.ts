import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsComponent } from './forms.component';
import { AngularMaterialModule } from '../angularMaterial/angularMaterial.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormRoutes } from './form.routing';
import { FormService } from './form.service';
import { FormEditComponent } from './form-edit/form-edit.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AngularMaterialModule,
    FlexLayoutModule,
    FormRoutes
  ],
  declarations: [FormsComponent,FormEditComponent],
  providers:[FormService],
  entryComponents:[FormEditComponent]
})
export class FormModule { }
