import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ResizableModule } from 'angular-resizable-element';
import { FormsModule } from '@angular/forms';
import { CodeGeneratorModule } from './code-generator/code.generator.module';
import { BuilderModule } from './builder/builder.module';
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
    BuilderModule
  ],
  providers: [],
  bootstrap: [AppComponent],
 
})
export class AppModule { }
