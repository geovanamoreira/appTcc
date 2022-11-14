import { comparaValidator } from './../validators/compara-validator';
import { CpfValidator } from './../validators/cpf-validator';
import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { IEmpregador } from '../models/cadastro-empregador.model';
import { Router } from '@angular/router';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-cadastro-empregadorrr',
  templateUrl: './cadastro-empregadorrr.page.html',
  styleUrls: ['./cadastro-empregadorrr.page.scss'],
})
export class CadastroEmpregadorrrPage implements OnInit {

  formCadastro: FormGroup;
  empregador: IEmpregador = new IEmpregador();

  mensagens = {
    nome: [
      { tipo: 'required', mensagem: 'O campo Nome é obrigatório.' },
      { tipo: 'minlength', mensagem: 'O nome deve ter pelo menos 3 caracteres.' },
    ],
    cpf: [
      { tipo: 'required', mensagem: 'O campo CNPJ é obrigatório.' },
      { tipo: 'invalido', mensagem: 'CNPJ Inválido.' },
    ],
    email: [
      { tipo: 'required', mensagem: 'O campo E-mail é obrigatório.' },
      { tipo: 'email', mensagem: 'E-mail Inválido.' },
    ],
    senha: [
      { tipo: 'required', mensagem: 'É obrigatório confirmar senha.' },
      { tipo: 'minlength', mensagem: 'A senha deve ter pelo menos 8 caracteres.', },
      { tipo: 'maxlength', mensagem: 'A senha deve ter no máximo 8 caractéres.' },
    ],
    confirmaSenha: [
      { tipo: 'required', mensagem: 'É obrigatório confirmar senha.' },
      { tipo: 'minlength', mensagem: 'A senha deve ter pelo menos 8 caracteres.', },
      { tipo: 'comparacao', mensagem: 'Deve ser igual a senha.' },
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

  constructor(private formBuilder: FormBuilder, private storageService: StorageService, private route: Router) {
    this.formCadastro = this.formBuilder.group({
      nome: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      cpf: ['', Validators.compose([Validators.required, CpfValidator.cpfValido])],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      telefone: ['', Validators.compose([Validators.required, Validators.minLength(11), Validators.maxLength(11)])],
      cvPix: ['', Validators.required],
      endereco: ['', Validators.compose([Validators.required, Validators.maxLength(100)])],
      senha: ['', Validators.compose([Validators.required, Validators.minLength(8)])],
      confirmaSenha: ['', Validators.compose([Validators.required, Validators.minLength(8)])]
    }, {
      validator: comparaValidator('senha', 'confirmaSenha')
    });
  }

  ngOnInit() {
  }

  async salvarCadastroEmpregador(){
    if(this.formCadastro.valid){
      this.empregador.nome = this.formCadastro.value.nome;
      this.empregador.cpf = this.formCadastro.value.cpf;
      this.empregador.email = this.formCadastro.value.email;
      this.empregador.telefone = this.formCadastro.value.telefone;
      this.empregador.cvPix = this.formCadastro.value.cvPix;
      this.empregador.endereco = this.formCadastro.value.endereco;
      await this.storageService.set(this.empregador.email, this.empregador);
      this.route.navigateByUrl('/usuario-empregador');
    }

    else{
      alert('Formulário Inválido!');
    }
  }

}

