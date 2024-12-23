import { Component, OnInit } from "@angular/core";
import { MatDialogRef } from '@angular/material/dialog';

@Component({
    selector: "app-style--to-css",
    templateUrl: "./style--to-css.component.html",
    styleUrls: ["./style--to-css.component.scss"],
    standalone: false
})

export class StyleToCssComponent implements OnInit {
  className: string
  constructor(public dialogRef: MatDialogRef<StyleToCssComponent>) {

  }

  ngOnInit() {

  }
  addClass() {
    this.dialogRef.close(this.className)
  }
}
