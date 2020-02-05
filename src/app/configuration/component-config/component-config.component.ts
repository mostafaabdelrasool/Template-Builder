import { Component, OnInit } from "@angular/core";
import { CodeModel } from '@ngstack/code-editor';

@Component({
  selector: "app-component-config",
  templateUrl: "./component-config.component.html",
  styleUrls: ["./component-config.component.scss"]
})

export class ComponentConfigComponent implements OnInit {
  codeModel: CodeModel = {
    language: 'typescript',
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
  constructor() { 
  
  }

  ngOnInit() {
    this.codeModel.value=`export interface ModelName{
      prop1:object;
      prop2:object;
      prop3:object;
    }`
  }
}
