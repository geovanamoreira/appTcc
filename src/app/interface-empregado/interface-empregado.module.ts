import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InterfaceEmpregadoPageRoutingModule } from './interface-empregado-routing.module';

import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { InterfaceEmpregadoPage } from './interface-empregado.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InterfaceEmpregadoPageRoutingModule,
    Ng2SearchPipeModule
  ],
  declarations: [InterfaceEmpregadoPage]
})
export class InterfaceEmpregadoPageModule {}
