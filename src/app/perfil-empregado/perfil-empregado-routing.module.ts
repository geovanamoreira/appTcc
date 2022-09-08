import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PerfilEmpregadoPage } from './perfil-empregado.page';

const routes: Routes = [
  {
    path: '',
    component: PerfilEmpregadoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PerfilEmpregadoPageRoutingModule {}
