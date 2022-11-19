import { IVaga } from './../models/cadastro-vagas.model';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StorageService } from '../services/storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-empregador-vagas',
  templateUrl: './empregador-vagas.page.html',
  styleUrls: ['./empregador-vagas.page.scss'],
})
export class EmpregadorVagasPage implements OnInit {
  formCadastro: FormGroup;
  vaga: IVaga = new IVaga();

  mensagens = {
    categoria: [
      { tipo: 'required', mensagem: 'O campo Categoria é obrigatório.' },
      {
        tipo: 'minlength',
        mensagem: 'A categoria deve ter pelo menos 4 caracteres.',
      },
    ],

    descricao: [
      { tipo: 'required', mensagem: 'O campo Descricao é obrigatório.' },
      {
        tipo: 'minlength',
        mensagem: 'A descrição deve ter pelo menos 6 caracteres.',
      },
    ],

    horario: [
      {
        tipo: 'required',
        mensagem: 'É obrigatório digitar o horário do freelance.',
      },
      {
        tipo: 'minlength',
        mensagem: 'A idade deve ter pelo menos 4 caracteres.',
      },
    ],

    pagamento: [
      {
        tipo: 'required',
        mensagem: 'É obrigatório digitar o pagamento POR DIA.',
      },
      {
        tipo: 'minlength',
        mensagem: 'O telefone deve ter pelo menos 2 caracteres.',
      },
    ],

    qntd: [
      {
        tipo: 'required',
        mensagem: 'É obrigatório digitar a quantidade de vagas',
      },
      {
        tipo: 'minlength',
        mensagem: 'O telefone deve ter pelo menos 1 caracteres.',
      },
      {
        tipo: 'maxlength',
        mensagem: 'O telefone deve ter no máximo 5 caractéres.',
      },
    ],
    empregador: [
      { tipo: 'required', mensagem: 'Seu nome é obrigatório.' },
      {
        tipo: 'minlength',
        mensagem: 'O nome deve ter pelo menos 4 caracteres.',
      },
    ],

    endereco: [
      { tipo: 'required', mensagem: 'O Endereço é obrigatório.' },
      {
        tipo: 'minlength',
        mensagem: 'O endereço deve ter pelo menos 4 caracteres.',
      },
    ]
  };

  constructor(
    private formBuilder: FormBuilder,
    private storageService: StorageService,
    private route: Router,
  ) {
    this.formCadastro = this.formBuilder.group({
      categoria: [
        '',
        Validators.compose([Validators.required, Validators.minLength(4)]),
      ],
      descricao: [
        '',
        Validators.compose([Validators.required, Validators.minLength(6)]),
      ],
      horario: [
        '',
        Validators.compose([Validators.required, Validators.minLength(4)]),
      ],
      pagamento: [
        '',
        Validators.compose([Validators.required, Validators.minLength(2)]),
      ],
      qntd: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(1),
          Validators.maxLength(5),
        ]),
      ],
      empregador: [
        '',
        Validators.compose([Validators.required, Validators.minLength(4)]),
      ],

     endereco: [
        '',
        Validators.compose([Validators.required, Validators.minLength(4)]),
      ],
    });
  }

  ngOnInit(): void {}

  async salvarCadastroVagas() {
    if (this.formCadastro.valid) {
      this.vaga.categoria = this.formCadastro.value.categoria;
      this.vaga.qntd = this.formCadastro.value.qntd;
      this.vaga.descricao = this.formCadastro.value.descricao;
      this.vaga.horario = this.formCadastro.value.horario;
      this.vaga.pagamento = this.formCadastro.value.pagamento;
      this.vaga.empregador = this.formCadastro.value.empregador;
      this.vaga.endereco = this.formCadastro.value.endereco;
      await this.storageService.set(this.vaga.categoria, this.vaga);
      this.route.navigateByUrl('/interface-empregador');
    } else {
      alert('Formulário Inválido!');
    }
  }

}
