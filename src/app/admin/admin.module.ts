import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { AngularMaterialModule } from '../angularMaterial/angularMaterial.module';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedModule } from '../share/shared.module';
import { AdminRoutes } from './admin.routing';
import { GroupsComponent } from './groups/groups.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AngularMaterialModule,
    FlexLayoutModule,
    SharedModule,
    AdminRoutes
  ],
  declarations: [AdminComponent,GroupsComponent]
})
export class AdminModule { }
