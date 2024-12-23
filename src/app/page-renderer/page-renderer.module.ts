import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageRendererComponent } from './page-renderer.component';
import { FormsModule } from '@angular/forms';
import { AngularMaterialModule } from '../angularMaterial/angularMaterial.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PageRendererRoutes } from './page-renderer.routing';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { BuilderModule } from '../builder/builder.module';
import { FieldRenderComponent } from './field-render/field-render.component';
import { RenderService } from './render.service';
import { ChildContainerRenderComponent } from './child-container-render/child-container-render.component';
import { CreateableTableRenderComponent } from './field-render/createable-table-render/createable-table-render.component';
import { FieldModule } from '../builder/fields/field.module';
import { ListFieldRenderComponent } from './child-container-render/list-field-render/list-field-render.component';
import { BrowserModule } from '@angular/platform-browser';
import { TabFieldRenderComponent } from './child-container-render/tab-field-render/tab-field-render.component';
import { ContainerRenderComponent } from './container.render/container.render.component';
import { ButtonFieldRenderComponent } from './field-render/button-field-render/button-field-render.component';
@NgModule({ declarations: [PageRendererComponent, FieldRenderComponent, ChildContainerRenderComponent,
        CreateableTableRenderComponent,
        ListFieldRenderComponent,
        TabFieldRenderComponent,
        ContainerRenderComponent,
        ButtonFieldRenderComponent],
    exports: [PageRendererComponent], imports: [BrowserModule,
        CommonModule,
        FormsModule,
        AngularMaterialModule,
        FlexLayoutModule,
        PageRendererRoutes,
        NgxPaginationModule,
        BuilderModule, FieldModule], providers: [RenderService, provideHttpClient(withInterceptorsFromDi())] })
export class PageRendererModule { }
