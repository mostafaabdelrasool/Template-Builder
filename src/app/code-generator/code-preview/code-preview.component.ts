import { Component, OnInit, Input, Inject } from "@angular/core";
import { CodeModel } from '@ngstack/code-editor';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: "app-code-preview",
  templateUrl: "./code-preview.component.html",
  styleUrls: ["./code-preview.component.scss"]
})

export class CodePreviewComponent implements OnInit {
  currentCodeModel: CodeModel = {
    language: 'typescript',
    uri: 'main.ts',
    value: '{}',
    dependencies: ['@types/node', '@ngstack/translate', '@ngstack/code-editor']
  };
  tsCodeModel: CodeModel = { ...this.currentCodeModel, language: 'typescript' }
  htmlCodeModel: CodeModel = { ...this.currentCodeModel, language: 'html' }
  cssCodeModel: CodeModel = { ...this.currentCodeModel, language: 'css' }
  options = {
    contextmenu: true,
    minimap: {
      enabled: true
    }
  };
  onNoClick(): void {
    this.dialogRef.close();
  }
  constructor(public dialogRef: MatDialogRef<CodePreviewComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    this.tsCodeModel.value = data.tsCode || ''
    this.htmlCodeModel.value = data.htmlCode;
    this.currentCodeModel = { ...this.htmlCodeModel };
  }
  setCurrentCodeModel(event) {
    switch (event.target.innerText) {
      case "HTML":
        this.currentCodeModel = { ...this.htmlCodeModel }
        break;
      case "JS":
        this.currentCodeModel = { ...this.tsCodeModel }
        break;
      case "CSS":
        this.currentCodeModel = { ...this.cssCodeModel }
        break;
      default:
        break;
    }

  }
  ngOnInit() {

  }

}
