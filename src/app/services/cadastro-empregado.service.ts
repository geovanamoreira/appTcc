import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API } from '../app.api';

@Injectable({
  providedIn: 'root'
})
export class CadastroEmpregadoService {

  private url = API + '/empregados';

  constructor(private http: HttpClient) {}

}
