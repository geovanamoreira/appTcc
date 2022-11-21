/* eslint-disable @typescript-eslint/naming-convention */
export class Empregado{
  id: number;
  nome: string;
  cpf: string;
  idade: number;
  email: string;
  telefone: string;
  experiencias: string;
  disponibilidade: string;
  cv_pix: string;
  cidade: Cidade;
}

export class Cidade{
  id: number;
  nome: string;
  estado: Estado;
}

export class Estado{
  id: number;
  sigla: string;
}

