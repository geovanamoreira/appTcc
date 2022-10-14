import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmpregadoEquipePageRoutingModule } from './empregado-equipe-routing.module';

import { EmpregadoEquipePage } from './empregado-equipe.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmpregadoEquipePageRoutingModule
  ],
  declarations: [EmpregadoEquipePage]
})
export class EmpregadoEquipePageModule {}
