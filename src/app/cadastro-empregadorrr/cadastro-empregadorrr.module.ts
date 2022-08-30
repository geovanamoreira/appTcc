import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastroEmpregadorrrPageRoutingModule } from './cadastro-empregadorrr-routing.module';

import { CadastroEmpregadorrrPage } from './cadastro-empregadorrr.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadastroEmpregadorrrPageRoutingModule
  ],
  declarations: [CadastroEmpregadorrrPage]
})
export class CadastroEmpregadorrrPageModule {}
