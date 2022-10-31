import { TestBed } from '@angular/core/testing';

import { CadastroEmpregadoService } from './cadastro-empregado.service';

describe('CadastroEmpregadoService', () => {
  let service: CadastroEmpregadoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CadastroEmpregadoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
