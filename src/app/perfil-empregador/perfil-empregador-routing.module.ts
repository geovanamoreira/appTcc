import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PerfilEmpregadorPage } from './perfil-empregador.page';

const routes: Routes = [
  {
    path: '',
    component: PerfilEmpregadorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PerfilEmpregadorPageRoutingModule {}
