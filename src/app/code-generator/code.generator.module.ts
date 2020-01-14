import { NgModule } from '@angular/core';
import { CodeEditorModule } from '@ngstack/code-editor';
import { CodePreviewComponent } from './code-preview/code-preview.component';

@NgModule({
    imports: [CodeEditorModule.forRoot()],
    exports: [CodePreviewComponent],
    declarations: [CodePreviewComponent],
    providers: [],
})
export class CodeGeneratorModule { }
