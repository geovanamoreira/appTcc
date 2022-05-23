import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginEmpregadorrrPageRoutingModule } from './login-empregadorrr-routing.module';

import { LoginEmpregadorrrPage } from './login-empregadorrr.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginEmpregadorrrPageRoutingModule
  ],
  declarations: [LoginEmpregadorrrPage]
})
export class LoginEmpregadorrrPageModule {}
