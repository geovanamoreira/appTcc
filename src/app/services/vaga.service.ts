import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';
import { IVaga } from '../models/cadastro-vagas.model';

@Injectable({
  providedIn: 'root',
})
export class VagaService {
  listaVagas: IVaga[] = [];

  constructor(private storageService: StorageService) {}

  async salvar(vaga: IVaga) {
    this.listaVagas[vaga.id] = vaga;
    this.storageService.set('vagas', this.listaVagas);
  }

  async buscarUma(id: number) {}

  async buscarTodas() {
    this.listaVagas = this.storageService.get('vagas') as unknown as IVaga[];
    return this.listaVagas;
  }

  async deletarVaga(id: number) {
    this.buscarTodas();
    delete this.listaVagas[id];
    this.storageService.set('vagas', this.listaVagas);
  }

  async getIDVaga() {
    const id = await this.storageService.get('vagas');
    if (id) {
      return id + 1;
    } else {
      this.storageService.set('idVaga', 0);
      return 0;
    }
  }

}
