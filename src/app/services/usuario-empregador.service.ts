import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API } from '../app.api';
import { IEmpregador } from '../models/cadastro-empregador.model';

@Injectable({
  providedIn: 'root'
})

export class UsuarioEmpregadorService {

  private url = API + '/empregadores';

  constructor(private http: HttpClient) {}

  buscarEmpregador(): Observable<IEmpregador[]> {
    return this.http.get<IEmpregador[]>(`${this.url}/todos`).pipe((retorno => retorno));
  }

  buscarEmpregadorPeloId(id: number): Observable<IEmpregador>{
    return this.http.get<IEmpregador>(`${this.url}/${id}`).pipe((retorno => retorno));
  }
}
