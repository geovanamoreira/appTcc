import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerfilEmpregadorPageRoutingModule } from './perfil-empregador-routing.module';

import { PerfilEmpregadorPage } from './perfil-empregador.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerfilEmpregadorPageRoutingModule
  ],
  declarations: [PerfilEmpregadorPage]
})
export class PerfilEmpregadorPageModule {}
