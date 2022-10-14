import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmpregadoCadastroPageRoutingModule } from './empregado-cadastro-routing.module';

import { EmpregadoCadastroPage } from './empregado-cadastro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmpregadoCadastroPageRoutingModule
  ],
  declarations: [EmpregadoCadastroPage]
})
export class EmpregadoCadastroPageModule {}
