import { ActivatedRoute } from '@angular/router';
import { PerfilEmpregadoService } from './../services/perfil-empregado.service';
import { Empregado } from '../models/perfil-empregado.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil-empregado',
  templateUrl: './perfil-empregado.page.html',
  styleUrls: ['./perfil-empregado.page.scss'],
})
export class PerfilEmpregadoPage implements OnInit {

  empregados: Empregado[] = [];
  empregado: Empregado;

  constructor(private perfilEmpregadoService: PerfilEmpregadoService, private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.exibirEmpregado();
  }

  exibirEmpregado(){
    const id = Number(this.activateRoute.snapshot.paramMap.get('id'));
    this.perfilEmpregadoService.buscarEmpregadoPeloId(id).subscribe(retorno =>{
      this.empregado = retorno;
    });
  }

}
