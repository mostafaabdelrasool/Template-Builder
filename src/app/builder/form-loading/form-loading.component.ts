import { Component, Inject, OnInit } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
  selector: "app-form-loading",
  templateUrl: "./form-loading.component.html",
  styleUrls: ["./form-loading.component.scss"],
})

export class FormLoadingComponent implements OnInit {
  loadType: string;
  constructor(public dialogRef: MatDialogRef<FormLoadingComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string) {

  }

  ngOnInit() {
    if (this.data) {
      this.loadType = this.data
    }
  }
}
