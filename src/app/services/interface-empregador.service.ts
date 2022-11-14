import { Empregador } from './../models/perfil-empregador.model';
import { Injectable } from '@angular/core';
import { API } from '../app.api';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InterfaceEmpregadorService {

  empregador: Empregador;

  private url = API + '/empregadores';
  constructor(private http: HttpClient) { }

  buscarEmpregador(): Observable<Empregador[]> {
    return this.http.get<Empregador[]>(`${this.url}/todos`).pipe(
      (retorno => retorno)
    );
  }

  buscarEmpregadoPeloId(id: number): Observable<Empregador> {
    return this.http.get<Empregador>(`${this.url}/1`).pipe(
      (retorno => retorno)
    );
  }
}
