import { Routes, RouterModule } from '@angular/router';
import { ConfigurationComponent } from './configuration.component';
import { ComponentConfigComponent } from './component-config/component-config.component';

const routes: Routes = [
  { path: '', component: ConfigurationComponent },
  { path: 'model-config', component: ComponentConfigComponent }
];

export const ConfigRoutes = RouterModule.forChild(routes);
