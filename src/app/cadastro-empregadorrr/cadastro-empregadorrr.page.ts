import { comparaValidator } from './../validators/compara-validator';
import { CpfValidator } from './../validators/cpf-validator';

import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-cadastro-empregadorrr',
  templateUrl: './cadastro-empregadorrr.page.html',
  styleUrls: ['./cadastro-empregadorrr.page.scss'],
})
export class CadastroEmpregadorrrPage implements OnInit {

  formCadastro: FormGroup;

  mensagens = {
    nome: [
      { tipo: 'required', mensagem: 'O campo Nome é obrigatório.' },
      { tipo: 'minlength', mensagem: 'O nome deve ter pelo menos 3 caracteres.' },
    ],
    cpf: [
      { tipo: 'required', mensagem: 'O campo CPF é obrigatório.' },
      { tipo: 'invalido', mensagem: 'CPF Inválido.' },
    ],
    email: [
      { tipo: 'required', mensagem: 'O campo E-mail é obrigatório.' },
      { tipo: 'email', mensagem: 'E-mail Inválido.' },
    ],
    senha: [
      { tipo: 'required', mensagem: 'É obrigatório confirmar senha.' },
      { tipo: 'minlength', mensagem: 'A senha deve ter pelo menos 6 caracteres.', },
      { tipo: 'maxlength', mensagem: 'A senha deve ter no máximo 8 caractéres.' },
    ],
    confirmaSenha: [
      { tipo: 'required', mensagem: 'É obrigatório confirmar senha.' },
      { tipo: 'minlength', mensagem: 'A senha deve ter pelo menos 8 caracteres.', },
      { tipo: 'comparacao', mensagem: 'Deve ser igual a senha.' },
    ],
    idade: [
      { tipo: 'required', mensagem: 'É obrigatório digitar a idade.' },
      { tipo: 'minlength', mensagem: 'A idade deve ter pelo menos 2 caracteres.', },
      { tipo: 'maxlength', mensagem: 'A idade deve ter no máximo 2 caractéres.' },
    ],
    telefone: [
      { tipo: 'required', mensagem: 'Campo obrigatório!.' },
      { tipo: 'minlength', mensagem: 'O telefone deve ter pelo menos 11 caracteres.', },
      { tipo: 'maxlength', mensagem: 'O telefone deve ter no máximo 11 caractéres.' },
    ],
    cvPix: [
      { tipo: 'required', mensagem: 'Campo obrigatório!' },
    ],
    endereco: [
      { tipo: 'required', mensagem: 'Campo obrigatório!' },
      { tipo: 'maxlength', mensagem: 'O telefone deve ter no máximo 100 caractéres.' },
    ],
  };

  constructor(private formBuilder: FormBuilder) {
    this.formCadastro = this.formBuilder.group({
      nome: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      cpf: ['', Validators.compose([Validators.required, CpfValidator.cpfValido])],
      idade: ['', Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(2)])],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      telefone: ['', Validators.compose([Validators.required, Validators.minLength(11), Validators.maxLength(11)])],
      cvPix: ['', Validators.required],
      endereço: ['', Validators.compose([Validators.required, Validators.maxLenght(100)])],
      senha: ['', Validators.compose([Validators.required, Validators.minLength(8)])],
      confirmaSenha: ['', Validators.compose([Validators.required, Validators.minLength(8)])]
    }, {
      validator: comparaValidator('senha', 'confirmaSenha')
    });
  }

  ngOnInit() {
  }

  salvarCadastro(){
    console.log('Formulário: ', this.formCadastro.valid);
  }

}

