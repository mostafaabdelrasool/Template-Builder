import { Routes, RouterModule } from '@angular/router';
import { SubmissionComponent } from './submission.component';
import { SubmissionEditComponent } from './submission-edit/submission-edit.component';

const routes: Routes = [
  {
    path: 'submission', component: SubmissionComponent, children: [
      { path: 'edit/:id', component: SubmissionEditComponent }
    ]
  },
];

export const SubmissionRoutes = RouterModule.forChild(routes);
