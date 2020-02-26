import { Component, OnInit, Input } from "@angular/core";
import {  SelectField } from '../../model/field';

@Component({
  selector: "app-select-field",
  templateUrl: "./select-field.component.html",
  styleUrls: ["./select-field.component.scss"]
})

export class SelectFieldComponent implements OnInit {
  
  @Input() field: SelectField;
  constructor() {

  }
  ngOnInit() {

  }
}
