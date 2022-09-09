import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InterfaceEmpregadorPageRoutingModule } from './interface-empregador-routing.module';

import { InterfaceEmpregadorPage } from './interface-empregador.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InterfaceEmpregadorPageRoutingModule
  ],
  declarations: [InterfaceEmpregadorPage]
})
export class InterfaceEmpregadorPageModule {}
