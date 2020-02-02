import { Routes, RouterModule } from '@angular/router';
import { ConfigurationComponent } from './configuration.component';

const routes: Routes = [
  { path: '', component: ConfigurationComponent }
];

export const ConfigRoutes = RouterModule.forChild(routes);
