import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WindowWrapperService, AppInfoService } from './services';

export function windowHandler(): Window {
  return window;
}

@NgModule({
  imports: [CommonModule],
  exports: [CommonModule],
  declarations: [],
})
export class SharedModule {
  static forRoot(): ModuleWithProviders<SharedModule> {
    return {
      ngModule: SharedModule,
      providers: [
        AppInfoService,
        { provide: WindowWrapperService, useFactory: windowHandler },
      ],
    };
  }
}
