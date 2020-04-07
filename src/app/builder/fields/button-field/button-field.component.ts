import { Component, OnInit, Input } from "@angular/core";
import { ButtonField } from '../../model/field';

@Component({
  selector: "app-button-field",
  templateUrl: "./button-field.component.html",
  styleUrls: ["./button-field.component.scss"]
})

export class ButtonFieldComponent implements OnInit {
  @Input() field: ButtonField;
  constructor() { 

  }

  ngOnInit() {

  }
}
