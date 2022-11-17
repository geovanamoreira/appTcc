/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable max-len */
import { StorageService } from './../services/storage.service';
import { ActivatedRoute } from '@angular/router';
import { InterfaceEmpregadoService } from './../services/interface-empregado.service';
import { Component, OnInit } from '@angular/core';
import { Empregado } from '../models/perfil-empregado.model';
import { IVaga } from '../models/cadastro-vagas.model';
import { VagaService } from '../services/vaga.service';

@Component({
  selector: 'app-interface-empregado',
  templateUrl: './interface-empregado.page.html',
  styleUrls: ['./interface-empregado.page.scss'],
})
export class InterfaceEmpregadoPage implements OnInit {


  listaVagas: IVaga[] = [];
  empregado: Empregado = new Empregado();

  constructor(private interfaceEmpregadoService: InterfaceEmpregadoService, private activateRoute: ActivatedRoute, private vagaService: VagaService, private storageService: StorageService) { }

    async buscarVagas(){
      this.listaVagas = await this.vagaService.buscarTodas();
    }

  ngOnInit(): void {
    this.exibirEmpregado();
  }

  ionViewDidEnter(){
    this.buscarVagas();
  }

  async exibirEmpregado(){
    const id = Number(this.activateRoute.snapshot.paramMap.get('id'));
    await this.interfaceEmpregadoService.buscarEmpregadoPeloId(1).subscribe(retorno =>{
      this.empregado = retorno;
    });

  }

  async curtir(vaga: IVaga){
    const id = await this.vagaService.getIDCurtir();
      vaga.idCurtida = id;
      await this.vagaService.curtirVaga(vaga);
      this.storageService.set('idCurtir', id);
  }

}
