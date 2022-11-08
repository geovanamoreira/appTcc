import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { API } from './../app.api';
import { Injectable } from '@angular/core';
import { IEmpregado } from '../models/perfil-empregado.model';

@Injectable({
  providedIn: 'root'
})
export class PerfilEmpregadoService {

  empregado: IEmpregado;

  private url = API + '/empregados';

  constructor(private http: HttpClient) { }

  buscarEmpregado(): Observable<IEmpregado[]> {
    return this.http.get<IEmpregado[]>(`${this.url}/todos`).pipe(
      (retorno => retorno)
    );
  }

  buscarEmpregadoPeloId(id: number): Observable<IEmpregado> {
    return this.http.get<IEmpregado>(`${1}`).pipe(
      (retorno => retorno)
    );
  }
}
