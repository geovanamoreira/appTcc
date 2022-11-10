import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsuarioEmpregadorPage } from './usuario-empregador.page';

const routes: Routes = [
  {
    path: '',
    component: UsuarioEmpregadorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsuarioEmpregadorPageRoutingModule {}
