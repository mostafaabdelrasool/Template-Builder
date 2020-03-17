import { Routes, RouterModule } from '@angular/router';
import { FormsComponent } from './forms.component';

const routes: Routes = [
  { path: 'form', component: FormsComponent },
];

export const FormRoutes = RouterModule.forChild(routes);
