import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'user', loadChildren: () => import('./createuser/user.module').then(m => m.UserModule) },
  { path: '', redirectTo:'user', pathMatch:"full" },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
