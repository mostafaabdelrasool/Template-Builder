import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { GroupsComponent } from './groups/groups.component';
import { PositionsComponent } from './positions/positions.component';
import { FormsComponent } from './forms/forms.component';
import { ApplicationComponent } from './application/application.component';
import { FeaturesComponent } from './features/features.component';

const routes: Routes = [
  {
    path: 'admin', component: AdminComponent ,children: [
      { path: '', redirectTo: 'application', pathMatch: 'full' },
      { path: 'group', component: GroupsComponent },
      { path: 'application', component: ApplicationComponent },
      { path: 'position', component: PositionsComponent },
      { path: 'form', component: FormsComponent },
      { path: 'features/:appId', component: FeaturesComponent , },
    ]
  },
];

export const AdminRoutes = RouterModule.forChild(routes);
