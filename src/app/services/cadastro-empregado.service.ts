import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API } from '../app.api';
import { Empregado } from '../models/cadastro-empregado.model';

@Injectable({
  providedIn: 'root'
})
export class CadastroEmpregadoService {

  private url = API + '/empregados';

  constructor(private http: HttpClient) {}

  buscarEmpregado(): Observable<Empregado[]> {
    return this.http.get<Empregado[]>(`${this.url}/todos`).pipe((retorno => retorno));
  }

  buscarEmpregadoPeloId(id: number): Observable<Empregado>{
    return this.http.get<Empregado>(`${this.url}/${id}`).pipe((retorno => retorno));
  }
}
