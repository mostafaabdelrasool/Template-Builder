import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { OkDialogComponent } from './ok-dialog/ok-dialog.component';
import { YesNoDialogComponent } from './yes-no-dialog/yes-no-dialog.component';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DialogsService {

  constructor(private dialog: MatDialog, private router: Router) { }

  public openOKDialog( title: string, messages: string[]) {
    const dialogRef = this.dialog.open(OkDialogComponent, {
      width: '400px',
      data: { title, messages }
    });

    return dialogRef.afterClosed();
  }

  public openYesNoDialog(title: string, message: string) {
    const dialogRef = this.dialog.open(YesNoDialogComponent, {
      width: '400px',
      data: { title, message }
    });

    return dialogRef.afterClosed();
  }

  openLeavePageModal = (title: string, message: string, path: string) => {
    this.openYesNoDialog(title, message).subscribe(
      (result) => {
        if (result && path) { // OK clicked and path has value
          this.router.navigate([path]);
        }
      }
    );
  }
}
