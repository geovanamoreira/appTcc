import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginEmpregadorrrPage } from './login-empregadorrr.page';

const routes: Routes = [
  {
    path: '',
    component: LoginEmpregadorrrPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginEmpregadorrrPageRoutingModule {}
