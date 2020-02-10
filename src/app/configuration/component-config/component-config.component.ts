import { Component, OnInit } from "@angular/core";
import { CodeModel } from '@ngstack/code-editor';
import { interfacePropertyToString } from 'src/app/share/object-func';
import { json2ts } from "json-ts"
import { SharedService } from 'src/app/share/shared.service';
@Component({
  selector: "app-component-config",
  templateUrl: "./component-config.component.html",
  styleUrls: ["./component-config.component.scss"]
})

export class ComponentConfigComponent implements OnInit {
  codeModel: CodeModel = {
    language: 'json',
    uri: 'main.ts',
    value: '{}',
    dependencies: ['@types/node', '@ngstack/translate', '@ngstack/code-editor']
  };
  options = {
    contextmenu: true,
    minimap: {
      enabled: true
    }
  };

  constructor(public sharedService: SharedService) {

  }
  ngOnInit() {
    if (!this.sharedService.model) {
      this.sharedService.model = this.codeModel.value =
        `{
      "prop1": "Shane",
      "prop2": 0,
      "prop3": true
}`
    }
  }
  onCodeChanged(code) {
    this.sharedService.model = code;
  }
}
