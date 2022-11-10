import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { API } from './../app.api';
import { Injectable } from '@angular/core';
import { Empregado } from '../models/perfil-empregado.model';

@Injectable({
  providedIn: 'root'
})

export class PerfilEmpregadoService {

  empregado: Empregado;

  private url = API + '/empregados';

  constructor(private http: HttpClient) { }

  buscarEmpregado(): Observable<Empregado[]> {
    return this.http.get<Empregado[]>(`${this.url}/todos`).pipe(
      (retorno => retorno)
    );
  }

  buscarEmpregadoPeloId(id: number): Observable<Empregado> {
    return this.http.get<Empregado>(`${this.url}/1`).pipe(
      (retorno => retorno)
    );
  }
}
