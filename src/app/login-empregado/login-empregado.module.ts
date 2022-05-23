import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginEmpregadoPageRoutingModule } from './login-empregado-routing.module';

import { LoginEmpregadoPage } from './login-empregado.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginEmpregadoPageRoutingModule
  ],
  declarations: [LoginEmpregadoPage]
})
export class LoginEmpregadoPageModule {}
