import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmpregadoMensagensPage } from './empregado-mensagens.page';

const routes: Routes = [
  {
    path: '',
    component: EmpregadoMensagensPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmpregadoMensagensPageRoutingModule {}
