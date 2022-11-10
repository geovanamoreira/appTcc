import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UsuarioEmpregadorPageRoutingModule } from './usuario-empregador-routing.module';

import { UsuarioEmpregadorPage } from './usuario-empregador.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UsuarioEmpregadorPageRoutingModule
  ],
  declarations: [UsuarioEmpregadorPage]
})
export class UsuarioEmpregadorPageModule {}
