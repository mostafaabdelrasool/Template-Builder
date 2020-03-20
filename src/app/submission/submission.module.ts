import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubmissionComponent } from './submission.component';
import { SubmissionRoutes } from './submission.routing';
import { FormsModule } from '@angular/forms';
import { AngularMaterialModule } from '../angularMaterial/angularMaterial.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SubmissionService } from './submission.service';
import { SubmissionEditComponent } from './submission-edit/submission-edit.component';
import { PageRendererModule } from '../page-renderer/page-renderer.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AngularMaterialModule,
    FlexLayoutModule,
    SubmissionRoutes,
    PageRendererModule
  ],
  declarations: [SubmissionComponent,SubmissionEditComponent],
  providers:[SubmissionService]
})
export class SubmissionModule { }
