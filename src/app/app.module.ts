import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ResizableModule } from 'angular-resizable-element';
import { FormsModule } from '@angular/forms';
import { CodeGeneratorModule } from './code-generator/code.generator.module';
import { BuilderModule } from './builder/builder.module';
import { ConfigurationModule } from './configuration/configuration.module';
import { RouterModule } from '@angular/router';
import { SharedService } from './share/shared.service';
import { PageRendererModule } from './page-renderer/page-renderer.module';
import { CoreModule } from './core/core.module';
import { AdminModule } from './admin/admin.module';
import { LoginModule } from './login/login.module';
import { SubmissionModule } from './submission/submission.module';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ResizableModule,
    FormsModule,
    CodeGeneratorModule,
    BuilderModule,
    ConfigurationModule,
    RouterModule.forRoot([],{useHash:true}),
    PageRendererModule,
    CoreModule,
    AdminModule,
    LoginModule,
    SubmissionModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent],
 
})
export class AppModule { }
