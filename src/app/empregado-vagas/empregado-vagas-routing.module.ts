import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmpregadoVagasPage } from './empregado-vagas.page';

const routes: Routes = [
  {
    path: '',
    component: EmpregadoVagasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmpregadoVagasPageRoutingModule {}
