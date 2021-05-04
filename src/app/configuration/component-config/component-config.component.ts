import { Component, OnInit } from "@angular/core";
import { MatDialogRef } from "@angular/material";
import { CodeModel } from '@ngstack/code-editor';
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

  constructor(public sharedService: SharedService, public dialogRef: MatDialogRef<ComponentConfigComponent>) {

  }
  ngOnInit() {
    if (!this.sharedService.model) {
      this.sharedService.model = this.codeModel.value =
        `{
      "prop1": "Shane",
      "prop2": 0,
      "prop3": true,
      "data":[{"d1":"","d2":"","d3":"","d4":"","d5":""}]
}`
    }
  }
  onCodeChanged(code) {
    this.sharedService.model = code;
  }
  save(){
    this.dialogRef.close(this.codeModel.value);
  }
  close(){
    this.dialogRef.close()
  }
}
