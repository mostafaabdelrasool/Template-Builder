import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface OKDialogData {
  title: string;
  messages: string[];
}

@Component({
    selector: 'app-ok-dialog',
    templateUrl: './ok-dialog.component.html',
    styleUrls: ['./ok-dialog.component.scss'],
    standalone: false
})
export class OkDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<OkDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: OKDialogData) {}

  onOKClick(): void {
    this.dialogRef.close();
  }
}
