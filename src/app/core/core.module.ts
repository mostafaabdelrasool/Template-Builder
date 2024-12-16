import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from './data.api/data.service';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { BasicAuthInterceptor } from './interceptors/basic-auth-interceptor';
import { ErrorInterceptor } from './interceptors/error-interceptor';
@NgModule({ imports: [CommonModule], providers: [DataService, [
            {
                provide: HTTP_INTERCEPTORS,
                useClass: BasicAuthInterceptor,
                multi: true
            }, {
                provide: HTTP_INTERCEPTORS,
                useClass: ErrorInterceptor,
                multi: true
            }
        ], provideHttpClient(withInterceptorsFromDi())] })
export class CoreModule { }
