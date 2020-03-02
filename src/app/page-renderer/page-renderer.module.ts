import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageRendererComponent } from './page-renderer.component';
import { FormsModule } from '@angular/forms';
import { AngularMaterialModule } from '../angularMaterial/angularMaterial.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PageRendererRoutes } from './page-renderer.routing';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { BuilderModule } from '../builder/builder.module';
import { FieldRenderComponent } from './field-render/field-render.component';
import { RenderService } from './render.service';
import { ChildContainerRenderComponent } from './child-container-render/child-container-render.component';

@NgModule({
  imports: [
    CommonModule, FormsModule,
    AngularMaterialModule,
    FlexLayoutModule,
    PageRendererRoutes,
    HttpClientModule,
    NgxPaginationModule,
    BuilderModule
  ],
  declarations: [PageRendererComponent,FieldRenderComponent,ChildContainerRenderComponent],
  providers:[RenderService]
})
export class PageRendererModule { }
