import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserApplicationComponent } from './user-application.component';
import { FormsModule } from '@angular/forms';
import { AngularMaterialModule } from '../angularMaterial/angularMaterial.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedModule } from '../share/shared.module';
import { UserApplicationRoutes } from './user-application.routing';
import { UserApplicationService } from './user-application.service';
import { UserFeatureComponent } from './user-feature/user-feature.component';
import { PageRendererModule } from '../page-renderer/page-renderer.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AngularMaterialModule,
    FlexLayoutModule,
    SharedModule,
    UserApplicationRoutes,
    PageRendererModule
  ],
  declarations: [UserApplicationComponent, UserFeatureComponent],
  providers: [UserApplicationService]
})
export class UserApplicationModule { }
