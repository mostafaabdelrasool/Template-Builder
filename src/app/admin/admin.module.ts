import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { AngularMaterialModule } from '../angularMaterial/angularMaterial.module';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedModule } from '../share/shared.module';
import { AdminRoutes } from './admin.routing';
import { GroupsComponent } from './groups/groups.component';
import { PositionsComponent } from './positions/positions.component';
import { FormEditComponent } from './forms/form-edit/form-edit.component';
import { FormsComponent } from './forms/forms.component';
import { ApplicationComponent } from './application/application.component';
import { FeaturesComponent } from './features/features.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AngularMaterialModule,
    FlexLayoutModule,
    SharedModule,
    AdminRoutes
  ],
  declarations: [AdminComponent, GroupsComponent, PositionsComponent,
    FormsComponent, FormEditComponent, ApplicationComponent, FeaturesComponent],
  entryComponents: [FormEditComponent]
})
export class AdminModule { }
