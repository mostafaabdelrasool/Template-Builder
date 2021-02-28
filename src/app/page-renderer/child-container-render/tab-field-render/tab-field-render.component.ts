import { Component, Input, OnInit } from "@angular/core";
import { TabField } from "src/app/builder/model/field";

@Component({
  selector: "app-tab-field-render",
  templateUrl: "./tab-field-render.component.html",
  styleUrls: ["./tab-field-render.component.scss"]
})

export class TabFieldRenderComponent implements OnInit {

  @Input() container: TabField;
  constructor() {

  }

  ngOnInit() {
  }
}
