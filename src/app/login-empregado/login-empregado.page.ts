import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { comparaValidator } from '../validators/compara-validator';

@Component({
  selector: 'app-login-empregado',
  templateUrl: './login-empregado.page.html',
  styleUrls: ['./login-empregado.page.scss'],
})
export class LoginEmpregadoPage implements OnInit {

  formLogin1: FormGroup;

  mensagens = {
    nome: [
      { tipo: 'required', mensagem: 'O nome é obrigatório' },
      { tipo: 'minlength', mensagem: 'O nome deve haver pelo menos 3 caracteres' }
    ],

    senha: [
      { tipo: 'required', mensagem: 'É obrigatório confirmar senha.' },
      { tipo: 'minlength', mensagem: 'A senha deve ter pelo menos 8 caracteres.', },
      { tipo: 'maxlength', mensagem: 'A senha deve ter no máximo 8 caractéres.' },
    ],
   confirmaSenha: [
      { tipo: 'required', mensagem: 'É obrigatório confirmar senha.' },
      { tipo: 'minlength', mensagem: 'A senha deve ter pelo menos 8 caracteres.', },
      { tipo: 'maxlength', mensagem: 'A senha deve ter no máximo 8 caractéres.' },
      { tipo: 'comparacao', mensagem: 'Deve ser igual a senha.' },
    ],
  };

  constructor(private formBuilder: FormBuilder) {
    this.formLogin1 = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      senha: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
      confirmaSenha: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
    }, {
      validator: comparaValidator('senha', 'confirmaSenha')
    });
  }

  ngOnInit() {
  }

  salvarLogin() {
    console.log('Formulário: ', this.formLogin1.valid);
  }

}
