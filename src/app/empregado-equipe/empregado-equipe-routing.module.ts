import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmpregadoEquipePage } from './empregado-equipe.page';

const routes: Routes = [
  {
    path: '',
    component: EmpregadoEquipePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmpregadoEquipePageRoutingModule {}
