import { StorageService } from './../services/storage.service';
import { ActivatedRoute } from '@angular/router';
import { InterfaceEmpregadoService } from './../services/interface-empregado.service';
import { Component, OnInit } from '@angular/core';
import { Empregado } from '../models/perfil-empregado.model';
import { IVaga } from '../models/cadastro-vagas.model';

@Component({
  selector: 'app-interface-empregado',
  templateUrl: './interface-empregado.page.html',
  styleUrls: ['./interface-empregado.page.scss'],
})
export class InterfaceEmpregadoPage implements OnInit {
  listaVagas: IVaga[] = [];
  placeholderVagas: IVaga[] = [];
  empregado: Empregado = new Empregado();
  searchTerm: string;
  categoria = [];

  constructor(
    private interfaceEmpregadoService: InterfaceEmpregadoService,
    private activateRoute: ActivatedRoute,
    private storageService: StorageService
  ) {}

  async buscarVagas() {
    this.listaVagas = await this.storageService.getAll();
    console.log('limpa');
  }

  getListaIndex(data) {
    let index = 0;
    this.listaVagas.forEach((struct) => {
      index += 1;
      if (struct.categoria === data.categoria) {
        return index;
      }
    });
    return index;
  }

  async buscarPorCategoria(event) {
    const keyword = event.target.value.toLowerCase();
    if (keyword.length <= 2) {
      this.buscarVagas();
    }
    const data = await this.storageService.getAll();
    console.log(this.listaVagas);
    this.listaVagas.forEach((dataRes) => {
      const searchResult: number | boolean = dataRes.categoria.toLowerCase().indexOf(keyword);
      if (searchResult <= -1) {
        const index = this.getListaIndex(dataRes);
        console.log(index);
        this.listaVagas.splice(index-1, 1);
      }
    });
  }

  ngOnInit(): void {
    this.exibirEmpregado();
  }

  ionViewDidEnter() {
    this.buscarVagas();
  }

  async exibirEmpregado() {
    const id = Number(this.activateRoute.snapshot.paramMap.get('id'));
    await this.interfaceEmpregadoService
      .buscarEmpregadoPeloId(1)
      .subscribe((retorno) => {
        this.empregado = retorno;
      });
  }
}
