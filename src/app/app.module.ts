import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { DataLayerModule } from './data-layer/data-layer.module';

import { SharedModule } from './shared/shared.module';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found.component';
import { SessionExpiredComponent } from './core/components/session-expired/session-expired.component';

@Component({
  selector: 'web-market-root',
  template: '<router-outlet></router-outlet>'
})
export class RootComponent { }

@NgModule({
  declarations: [
    RootComponent,
    PageNotFoundComponent,
    SessionExpiredComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    DataLayerModule.forRoot(),
    SharedModule.forRoot()
  ],
  providers: [],
  bootstrap: [RootComponent]
})
export class AppModule { }
