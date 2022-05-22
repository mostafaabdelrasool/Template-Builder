import { Component, OnInit, Input, Inject } from "@angular/core";
import { Fields } from '../../model/field';
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
  selector: "app-rich-text-setting",
  templateUrl: "./rich-text-setting.component.html",
  styleUrls: ["./rich-text-setting.component.scss"]
})

export class RichTextSettingComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data: Fields,
    public dialogRef: MatDialogRef<RichTextSettingComponent>) {

  }

  ngOnInit() {
  }
  close() {
    this.dialogRef.close();
  }
}
