import { ActivatedRoute } from '@angular/router';
import { InterfaceEmpregadoService } from './../services/interface-empregado.service';
import { Component, OnInit } from '@angular/core';
import { Empregado } from '../models/perfil-empregado.model';

@Component({
  selector: 'app-interface-empregado',
  templateUrl: './interface-empregado.page.html',
  styleUrls: ['./interface-empregado.page.scss'],
})
export class InterfaceEmpregadoPage implements OnInit {

  empregado: Empregado = new Empregado();

  constructor(private interfaceEmpregadoService: InterfaceEmpregadoService, private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.exibirEmpregado();
  }

  async exibirEmpregado(){
    const id = Number(this.activateRoute.snapshot.paramMap.get('id'));
    await this.interfaceEmpregadoService.buscarEmpregadoPeloId(1).subscribe(retorno =>{
      this.empregado = retorno;
    });

  }

}
