import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { FormsModule } from '@angular/forms';
import { AngularMaterialModule } from '../angularMaterial/angularMaterial.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LoginService } from './login.service';
import { LoginRoutes } from './login.routing';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AngularMaterialModule,
    FlexLayoutModule,
    LoginRoutes
  ],
  declarations: [LoginComponent],
  providers:[LoginService]
})
export class LoginModule { }
