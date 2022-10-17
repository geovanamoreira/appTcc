import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastroEmpregadoPageRoutingModule } from './cadastro-empregado-routing.module';

import { CadastroEmpregadoPage } from './cadastro-empregado.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule, ReactiveFormsModule,
    IonicModule,
    CadastroEmpregadoPageRoutingModule
  ],
  declarations: [CadastroEmpregadoPage]
})
export class CadastroEmpregadoPageModule {}
