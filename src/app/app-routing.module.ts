import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent, PageNotFoundComponent, SessionExpiredComponent } from './core/components';
import { AdminGuard } from './core/guards';
import { SharedModule } from './shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      // {
      //   path: 'admin',
      //   loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
      //   canActivate: [ AdminGuard ],
      // }
    ]
  },
  {
    path: 'session-expired',
    component: SessionExpiredComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    SharedModule
  ],
  declarations: [AppComponent],
  exports: [RouterModule],
  providers: [AdminGuard]
})
export class AppRoutingModule { }
