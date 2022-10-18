import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmpregadorMensagensPage } from './empregador-mensagens.page';

const routes: Routes = [
  {
    path: '',
    component: EmpregadorMensagensPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmpregadorMensagensPageRoutingModule {}
