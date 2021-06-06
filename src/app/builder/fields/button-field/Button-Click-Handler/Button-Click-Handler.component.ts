import { Component, Inject, OnInit } from "@angular/core";
import { MAT_DIALOG_DATA } from "@angular/material";
import { ButtonField, ELementClickAction } from "src/app/builder/model/field";

@Component({
  selector: "app-Button-Click-Handler",
  templateUrl: "./Button-Click-Handler.component.html",
  styleUrls: ["./Button-Click-Handler.component.scss"]
})

export class ButtonClickHandlerComponent implements OnInit {
  clickAction: ELementClickAction
  constructor(@Inject(MAT_DIALOG_DATA) public data: ButtonField) {
    if (data) {
      if (!data.clickAction) {
        this.clickAction = new ELementClickAction();
      } else {
        this.clickAction = { ...data.clickAction };
      }
    }

  }

  ngOnInit() {

  }

}
