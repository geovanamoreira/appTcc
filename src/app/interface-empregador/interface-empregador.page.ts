/* eslint-disable no-trailing-spaces */
import { IVaga } from './../models/cadastro-vagas.model';
import { Empregador } from './../models/perfil-empregador.model';
import { Component, OnInit } from '@angular/core';
import { InterfaceEmpregadorService } from '../services/interface-empregador.service';
import { ActivatedRoute } from '@angular/router';
import { VagaService } from '../services/vaga.service';

@Component({
  selector: 'app-interface-empregador',
  templateUrl: './interface-empregador.page.html',
  styleUrls: ['./interface-empregador.page.scss'],
})
export class InterfaceEmpregadorPage implements OnInit {
  listaVagas: IVaga[] = [];
  empregador: Empregador = new Empregador();

  constructor(
    private interfaceEmpregadorService: InterfaceEmpregadorService,
    private activateRoute: ActivatedRoute,
    private vagaService: VagaService
  ) {}

  async buscarVagas() {
    this.listaVagas = await this.vagaService.buscarTodas();
  }

  ngOnInit(): void {
    this.exibirEmpregador();
  }

  ionViewDidEnter() {
    this.buscarVagas();
  }

  async exibirEmpregador() {
    const id = Number(this.activateRoute.snapshot.paramMap.get('id'));
    await this.interfaceEmpregadorService
      .buscarEmpregadorPeloId(1)
      .subscribe((retorno) => {
        this.empregador = retorno;
      });
  }
}
