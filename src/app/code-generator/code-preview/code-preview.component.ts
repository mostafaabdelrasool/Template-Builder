import { Component, OnInit, Input, Inject } from "@angular/core";
import { CodeModel } from '@ngstack/code-editor';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: "app-code-preview",
  templateUrl: "./code-preview.component.html",
  styleUrls: ["./code-preview.component.scss"]
})

export class CodePreviewComponent implements OnInit {
  @Input() activeTheme = 'vs';
  @Input() readOnly = false;
  @Input() code;

  codeModel: CodeModel = {
    language: 'typescript',
    uri: 'main.ts',
    value: '',
    dependencies: ['@types/node', '@ngstack/translate', '@ngstack/code-editor']
  };

  options = {
    contextmenu: true,
    minimap: {
      enabled: true
    }
  };
  onNoClick(): void {
    this.dialogRef.close();
  }
  constructor( public dialogRef: MatDialogRef<CodePreviewComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    this.codeModel.value =  [
      `import { TranslateModule, TranslateService } from '@ngstack/translate';`,
      `import { CodeEditorModule } from '@ngstack/code-editor';`,
      `import * as fs from 'fs';`,
      '',
      `export class MyClass {`,
      `  constructor(translate: TranslateService) {`,
      '',
      '  }',
      `}`
    ].join('\n');
  }

  ngOnInit() {

  }

}
