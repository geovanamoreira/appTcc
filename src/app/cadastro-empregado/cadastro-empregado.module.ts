import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastroEmpregadoPageRoutingModule } from './cadastro-empregado-routing.module';

import { CadastroEmpregadoPage } from './cadastro-empregado.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadastroEmpregadoPageRoutingModule
  ],
  declarations: [CadastroEmpregadoPage]
})
export class CadastroEmpregadoPageModule {}
