import { IEmpregador } from './../models/cadastro-empregador.model';
import { Component, OnInit } from '@angular/core';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-usuario-empregador',
  templateUrl: './usuario-empregador.page.html',
  styleUrls: ['./usuario-empregador.page.scss'],
})
export class UsuarioEmpregadorPage implements OnInit {

  listaEmpregadores: IEmpregador[] = [];

  constructor(private storageService: StorageService) { }

  async buscarEmpregadores(){
    this.listaEmpregadores = await this.storageService.getAll();
  }

  ngOnInit() {
  }

  ionViewDidEnter(){
    this.buscarEmpregadores();
  }

   async excluirCadastro(email: string){
    this.storageService.remove(email);
    this.buscarEmpregadores();
  }

}
