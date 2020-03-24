import { Routes, RouterModule } from '@angular/router';
import { SubmissionComponent } from './submission.component';
import { SubmissionEditComponent } from './submission-edit/submission-edit.component';

const routes: Routes = [
  {path: 'submission', component: SubmissionComponent},
  { path: 'submission-edit/:id/:workflowId', component: SubmissionEditComponent },
  { path: 'submission-edit/:workflowId', component: SubmissionEditComponent }
];

export const SubmissionRoutes = RouterModule.forChild(routes);
