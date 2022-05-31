import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login-empregado',
  templateUrl: './login-empregado.page.html',
  styleUrls: ['./login-empregado.page.scss'],
})
export class LoginEmpregadoPage implements OnInit {

  formCadastro: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
  }

}
