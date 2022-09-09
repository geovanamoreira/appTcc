import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InterfaceEmpregadorPage } from './interface-empregador.page';

const routes: Routes = [
  {
    path: '',
    component: InterfaceEmpregadorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InterfaceEmpregadorPageRoutingModule {}
