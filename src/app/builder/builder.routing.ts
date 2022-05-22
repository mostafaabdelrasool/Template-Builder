import { Routes, RouterModule } from '@angular/router';
import { BuilderComponent } from './builder.component';

const routes: Routes = [
  { path: '',pathMatch:'full' ,redirectTo:'builder' },
  {  path:'builder/:id',component:BuilderComponent},
  {  path:'builder',component:BuilderComponent},
];

export const BuilderRoutes = RouterModule.forChild(routes);
