import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmpregadorMensagensPageRoutingModule } from './empregador-mensagens-routing.module';

import { EmpregadorMensagensPage } from './empregador-mensagens.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmpregadorMensagensPageRoutingModule
  ],
  declarations: [EmpregadorMensagensPage]
})
export class EmpregadorMensagensPageModule {}
