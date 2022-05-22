import { Component, OnInit, Input, HostListener } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { ButtonField } from '../../model/field';
import { ButtonClickHandlerComponent } from "./Button-Click-Handler/Button-Click-Handler.component";
import { ELementClickAction } from './../../model/field';

@Component({
  selector: "app-button-field",
  templateUrl: "./button-field.component.html",
  styleUrls: ["./button-field.component.scss"]
})

export class ButtonFieldComponent implements OnInit {
  @Input() field: ButtonField;
  constructor(private dialog: MatDialog) {

  }

  ngOnInit() {
    this.field.hasAction = true;
  }
  openSetting() {
    let setting = { width: '50vw', height: 'auto', data: this.field };
    this.dialog.open(ButtonClickHandlerComponent, setting).afterClosed().subscribe((x: ELementClickAction) => {
      if (x) {
        this.field.clickAction = x
      }
    });
  }
}
