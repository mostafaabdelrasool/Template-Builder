import { Component, OnInit, Input, HostListener } from "@angular/core";
import { MatDialog } from "@angular/material";
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
  @Input() renderMode:boolean;
  constructor(private dialog: MatDialog) {

  }

  ngOnInit() {

  }
  @HostListener('click')
  clickInside() {
    if (this.renderMode) {
      return;
    }
    let setting = { width: '50vw', height: 'auto' };
    this.dialog.open(ButtonClickHandlerComponent, setting).afterClosed().subscribe((x: ELementClickAction) => {
      if (x) {
        this.field.clickAction = x
      }
    });
  }
}
