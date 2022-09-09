import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InterfaceEmpregadoPage } from './interface-empregado.page';

const routes: Routes = [
  {
    path: '',
    component: InterfaceEmpregadoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InterfaceEmpregadoPageRoutingModule {}
