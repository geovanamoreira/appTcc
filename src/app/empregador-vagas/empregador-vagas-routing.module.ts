import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmpregadorVagasPage } from './empregador-vagas.page';

const routes: Routes = [
  {
    path: '',
    component: EmpregadorVagasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmpregadorVagasPageRoutingModule {}
