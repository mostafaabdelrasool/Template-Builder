import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxLayoutsModule } from 'ngx-layouts';
import {
  MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule,
} from '@angular/material';
import { FormsModule } from '@angular/forms';
import {DragDropModule} from '@angular/cdk/drag-drop';
@NgModule({
  exports: [MatToolbarModule, MatSidenavModule,MatSelectModule,MatButtonToggleModule,MatChipsModule,
    MatButtonModule, MatListModule, MatIconModule, MatDividerModule, MatInputModule, MatDialogModule,
    MatTooltipModule,NgxLayoutsModule, FormsModule,MatCheckboxModule,MatExpansionModule,MatAutocompleteModule , MatRadioModule,DragDropModule,MatTreeModule]
})
export class AngularMaterialModule { }
