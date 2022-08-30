import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastroEmpregadoPage } from './cadastro-empregado.page';

const routes: Routes = [
  {
    path: '',
    component: CadastroEmpregadoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadastroEmpregadoPageRoutingModule {}
