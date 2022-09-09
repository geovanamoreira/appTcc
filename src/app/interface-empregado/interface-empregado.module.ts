import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InterfaceEmpregadoPageRoutingModule } from './interface-empregado-routing.module';

import { InterfaceEmpregadoPage } from './interface-empregado.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InterfaceEmpregadoPageRoutingModule
  ],
  declarations: [InterfaceEmpregadoPage]
})
export class InterfaceEmpregadoPageModule {}
