import { Component, OnInit } from '@angular/core';
import { Empregado } from '../models/cadastro-empregado.model';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-usuario-cadastro',
  templateUrl: './usuario-cadastro.page.html',
  styleUrls: ['./usuario-cadastro.page.scss'],
})
export class UsuarioCadastroPage implements OnInit {

  listaEmpregados: Empregado[] = [];
  constructor(private storageService: StorageService) { }

  ngOnInit() {
  }

}
