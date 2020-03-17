import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { GroupsComponent } from './groups/groups.component';

const routes: Routes = [
  {
    path: 'admin', component: AdminComponent, children: [
      {path: '', redirectTo: 'group' ,pathMatch: 'full'},
      { path: 'group', component: GroupsComponent },
      // { path: 'position', component: Specs }
    ]
  },
];

export const AdminRoutes = RouterModule.forChild(routes);
