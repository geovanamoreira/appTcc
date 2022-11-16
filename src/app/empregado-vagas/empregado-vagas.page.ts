import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IVaga } from '../models/cadastro-vagas.model';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-empregado-vagas',
  templateUrl: './empregado-vagas.page.html',
  styleUrls: ['./empregado-vagas.page.scss'],
})
export class EmpregadoVagasPage implements OnInit {

  listaVagas: IVaga[] = [];
  constructor(private activateRoute: ActivatedRoute, private storageService: StorageService) { }


  async buscarVagas(){
    this.listaVagas = await this.storageService.getAll();
  }

  ngOnInit() {
  }


  ionViewDidEnter(){
    this.buscarVagas();
  }
}
