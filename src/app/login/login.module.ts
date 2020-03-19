import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { FormsModule } from '@angular/forms';
import { AngularMaterialModule } from '../angularMaterial/angularMaterial.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AngularMaterialModule,
    FlexLayoutModule,
  ],
  declarations: [LoginComponent]
})
export class LoginModule { }
