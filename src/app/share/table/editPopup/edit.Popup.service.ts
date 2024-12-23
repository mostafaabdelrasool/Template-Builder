import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditPopupComponent } from './edit.popup.component';
import {  PopupFields } from '../model/popup.fields';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EditpopupService {
  constructor(public dialog: MatDialog) {
  }
  openDialog(fields: Array<PopupFields>, data?: any): Observable<any> {
    if (!fields || fields.length === 0) {
      return of({});
    }
    const dialogRef = this.dialog.open(EditPopupComponent, {
      width: '50vw',
      data: { fields: fields, data: {...data} }
    });
    return dialogRef.afterClosed();
  }

}
