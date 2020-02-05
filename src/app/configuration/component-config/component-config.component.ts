import { Component, OnInit } from "@angular/core";
import { CodeModel } from '@ngstack/code-editor';
import { interfacePropertyToString } from 'src/app/share/parsing-ts';
import { json2ts } from "json-ts"
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
  modelName: string="ModelName";
  constructor() {

  }

  ngOnInit() {
    this.codeModel.value = 
    `{
      "prop1": "Shane",
      "prop2": 0,
      "prop3": true
    }`
    console.log(json2ts(this.codeModel.value,{rootName:this.modelName,namespace:'MyNamespace'}))
  }
}
