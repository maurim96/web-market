import { CommonModule } from '@angular/common';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { DataLayerHttpInterceptor } from './core/http-interceptor';

import { HttpService, BaseServiceDeps } from './services';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
  ],
})
export class DataLayerModule {
  static forRoot(): ModuleWithProviders<DataLayerModule> {
    return {
      ngModule: DataLayerModule,
      providers: [
        BaseServiceDeps,
        HttpService,
        { provide: HTTP_INTERCEPTORS, useClass: DataLayerHttpInterceptor, multi: true },
      ],
    };
  }
}
