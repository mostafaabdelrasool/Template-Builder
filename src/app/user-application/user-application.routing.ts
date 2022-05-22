import { Routes, RouterModule } from '@angular/router';
import { UserApplicationComponent } from './user-application.component';
import { UserFeatureComponent } from './user-feature/user-feature.component';

const routes: Routes = [
  {  path: 'application', component: UserApplicationComponent  },
  {  path: 'app-feature/:appId', component: UserFeatureComponent  },
];

export const UserApplicationRoutes = RouterModule.forChild(routes);
