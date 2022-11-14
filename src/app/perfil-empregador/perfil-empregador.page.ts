import { Empregador } from './../models/perfil-empregador.model';
import { Component, OnInit } from '@angular/core';
import { PerfilEmpregadorService } from '../services/perfil-empregador.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-perfil-empregador',
  templateUrl: './perfil-empregador.page.html',
  styleUrls: ['./perfil-empregador.page.scss'],
})
export class PerfilEmpregadorPage implements OnInit {

  empregador: Empregador = new Empregador();

  constructor(private perfilEmpregadorService: PerfilEmpregadorService, private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.exibirEmpregador();
  }

  async exibirEmpregador(){
    const id = Number(this.activateRoute.snapshot.paramMap.get('id'));
    await this.perfilEmpregadorService.buscarEmpregadoPeloId(1).subscribe(retorno =>{
      this.empregador = retorno;
    });

  }

}
