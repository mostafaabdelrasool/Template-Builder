import { Component, Inject, OnInit } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { CodeModel } from '@ngstack/code-editor';
import { Form } from './../../admin/model/forms';
import { BuilderService } from './../builder.service';
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

  constructor(public dialogRef: MatDialogRef<ComponentConfigComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Form, private builderService: BuilderService) {

  }
  ngOnInit() {
    if (!this.data || !this.data.dataStructure) {
      this.codeModel.value =
        `{
      "prop1": "Shane",
      "prop2": 0,
      "prop3": true,
      "data":[{"d1":"","d2":"","d3":"","d4":"","d5":""}]
}`
    } else {
      this.codeModel.value = this.data.dataStructure;
    }
  }
  onCodeChanged(code) {
    this.codeModel.value = code;
  }
  save() {
    if (this.codeModel.value) {
      this.data.dataStructure = this.codeModel.value;
      const data = (({ id, name, dataStructure,featureId }) => ({ id, name, dataStructure ,featureId }))(this.data)
      this.builderService.saveDataStructure(<Form>data).subscribe(x => this.dialogRef.close(this.codeModel.value))
    }
  }
  close() {
    this.dialogRef.close()
  }
}
