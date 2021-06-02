import { Component, OnInit } from "@angular/core";
import { ELementClickAction } from "src/app/builder/model/field";

@Component({
  selector: "app-Button-Click-Handler",
  templateUrl: "./Button-Click-Handler.component.html",
  styleUrls: ["./Button-Click-Handler.component.scss"]
})

export class ButtonClickHandlerComponent implements OnInit {
  clickAction :ELementClickAction
  constructor() {
    this.clickAction = new ELementClickAction();
  }

  ngOnInit() {

  }

}
