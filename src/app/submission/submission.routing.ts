import { Routes, RouterModule } from '@angular/router';
import { SubmissionComponent } from './submission.component';
import { SubmissionEditComponent } from './submission-edit/submission-edit.component';

const routes: Routes = [
  {path: 'submission', component: SubmissionComponent},
  { path: 'submissione-edit/:id/:workflowId/:formId', component: SubmissionEditComponent },
  { path: 'submissione-edit/:workflowId/:formId', component: SubmissionEditComponent }
];

export const SubmissionRoutes = RouterModule.forChild(routes);
