import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppCustomPreloader } from './app-routing-loader';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: './user-management/user-management.module#UsermanagementModule',
    data: { preload: true }
  },  
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'login'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false,preloadingStrategy: AppCustomPreloader })],
  exports: [RouterModule],
  providers: [AppCustomPreloader]
})
export class AppRoutingModule { }