import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginEmpregadoPage } from './login-empregado.page';

const routes: Routes = [
  {
    path: '',
    component: LoginEmpregadoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginEmpregadoPageRoutingModule {}
