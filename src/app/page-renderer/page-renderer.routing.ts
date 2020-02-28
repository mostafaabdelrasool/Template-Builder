import { Routes, RouterModule } from '@angular/router';
import { PageRendererComponent } from './page-renderer.component';

const routes: Routes = [
  {  path:'render',component:PageRendererComponent},
];

export const PageRendererRoutes = RouterModule.forChild(routes);
