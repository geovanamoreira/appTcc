import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerfilEmpregadoPageRoutingModule } from './perfil-empregado-routing.module';

import { PerfilEmpregadoPage } from './perfil-empregado.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerfilEmpregadoPageRoutingModule
  ],
  declarations: [PerfilEmpregadoPage]
})
export class PerfilEmpregadoPageModule {}
