import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmpregadoVagasPageRoutingModule } from './empregado-vagas-routing.module';

import { EmpregadoVagasPage } from './empregado-vagas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmpregadoVagasPageRoutingModule
  ],
  declarations: [EmpregadoVagasPage]
})
export class EmpregadoVagasPageModule {}
