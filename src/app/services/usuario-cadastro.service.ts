import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API } from '../app.api';
import { IEmpregado } from '../models/cadastro-empregado.model';

@Injectable({
  providedIn: 'root'
})

export class UsuarioCadastroService {

  private url = API + '/empregados';

  constructor(private http: HttpClient) {}

  buscarEmpregado(): Observable<IEmpregado[]> {
    return this.http.get<IEmpregado[]>(`${this.url}/todos`).pipe((retorno => retorno));
  }

  buscarEmpregadoPeloId(id: number): Observable<IEmpregado>{
    return this.http.get<IEmpregado>(`${this.url}/${id}`).pipe((retorno => retorno));
  }
}
