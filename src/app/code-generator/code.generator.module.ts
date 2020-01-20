import { NgModule } from '@angular/core';
import { CodeEditorModule } from '@ngstack/code-editor';
import { CodePreviewComponent } from './code-preview/code-preview.component';
import { AngularMaterialModule } from '../angularMaterial/angularMaterial.module';
import { ComponentCodeService } from './angular/component-code.service';

@NgModule({
    imports: [CodeEditorModule.forRoot(), AngularMaterialModule],
    exports: [CodePreviewComponent],
    declarations: [CodePreviewComponent],
    providers: [ComponentCodeService],
    entryComponents: [CodePreviewComponent]
})
export class CodeGeneratorModule { }
