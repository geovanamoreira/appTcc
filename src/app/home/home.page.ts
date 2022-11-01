import { Component } from '@angular/core';
import { Empregado } from '../models/cadastro-empregado.model';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  listaEmpregados: Empregado[] = [];
  constructor(private storageService: StorageService) {}

  async buscarEmpregados(){
    this.listaEmpregados = await this.storageService.getAll();
  }

  ionViewDidEnter(){
    this.buscarEmpregados();
  }
}
