import { Component, OnInit } from '@angular/core';
import { IEmpregado } from '../models/cadastro-empregado.model';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-usuario-cadastro',
  templateUrl: './usuario-cadastro.page.html',
  styleUrls: ['./usuario-cadastro.page.scss'],
})
export class UsuarioCadastroPage implements OnInit {

  listaEmpregados: IEmpregado[] = [];

  constructor(private storageService: StorageService) { }

  async buscarEmpregados(){
    this.listaEmpregados = await this.storageService.getAll();
  }

  ngOnInit() {
  }

  ionViewDidEnter(){
    this.buscarEmpregados();
  }

   async excluirCadastro(email: string){
    this.storageService.remove(email);
    this.buscarEmpregados();
  }

}
