import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmpregadoCadastroPage } from './empregado-cadastro.page';

const routes: Routes = [
  {
    path: '',
    component: EmpregadoCadastroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmpregadoCadastroPageRoutingModule {}
