import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from './data.api/data.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BasicAuthInterceptor } from './interceptors/basic-auth-interceptor';
@NgModule({
  imports: [
    CommonModule, HttpClientModule,
  ],
  providers: [DataService, [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: BasicAuthInterceptor,
      multi: true
    }]
  ],
})
export class CoreModule { }
