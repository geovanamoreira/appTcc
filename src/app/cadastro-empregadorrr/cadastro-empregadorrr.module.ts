import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastroEmpregadorrrPageRoutingModule } from './cadastro-empregadorrr-routing.module';

import { CadastroEmpregadorrrPage } from './cadastro-empregadorrr.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule, ReactiveFormsModule,
    IonicModule,
    CadastroEmpregadorrrPageRoutingModule
  ],
  declarations: [CadastroEmpregadorrrPage]
})
export class CadastroEmpregadorrrPageModule {}
