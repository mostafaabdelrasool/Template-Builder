import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AngularMaterialModule } from '../angularMaterial/angularMaterial.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { EditInPlaceComponent } from './edit-in-place/edit-in-place.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AngularMaterialModule,
    FlexLayoutModule,
  ],
  declarations:[EditInPlaceComponent],
  exports:[EditInPlaceComponent]
})
export class SharedModule { }
