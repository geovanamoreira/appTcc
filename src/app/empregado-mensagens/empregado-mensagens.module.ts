import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmpregadoMensagensPageRoutingModule } from './empregado-mensagens-routing.module';

import { EmpregadoMensagensPage } from './empregado-mensagens.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmpregadoMensagensPageRoutingModule
  ],
  declarations: [EmpregadoMensagensPage]
})
export class EmpregadoMensagensPageModule {}
